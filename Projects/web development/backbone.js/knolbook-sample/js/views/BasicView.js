/**
 * @author: jalaj
 * @since: 23/02/2015@00:00:19
 * @file: BasicView.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 * FILE DESCRIPTION
 *
 **/

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/BasicTpl.tpl',
	'views/UsersTabView',
	'collections/UsersListCollection',
	'collections/SearchBoxCollection',
	'views/SearchBoxCollectionView',
	'views/NoSearchResultsView',
	'models/ProfileModel',
	'collections/AdditionalSearchCollection',
	'views/SearchHeadingView'
	], function ($, _, Backbone, BasicTpl,UsersTabView,UsersListCollection,SearchBoxCollection,SearchBoxCollectionView,NoSearchResultsView, ProfileModel, AdditionalSearchCollection, SearchHeadingView) {
	'use strict';

	var BasicView = Backbone.View.extend({
		template: _.template(BasicTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .search-box':'search',
			'keyup .search-box':'searchQuery',
			'click .Product' : 'showByProducts',
			'click .Department' : 'showByDepartment',
			'click .Knollies' :'showByKnollies',
			'click .Knewllies' : 'showByKnewllies'
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','success_callback','error_callback','success_getNonNumSearch');
			this.firstLoad=true;
		},
		// will attach basic view to attach variable, and create an object of UserListCollection
		render: function (attach,path) {
			
			console.log("inside base render with path ",path);
			if(this.firstLoad){

				this.$el.html(this.template());
				attach.html(this.el);
				this.usersListcollection = new UsersListCollection();
				if(ProfileModel.get('id') != 1){
					$('.add-user-link').css('display','none');;
					console.log("hoding add user..!!");
				}

				this.firstLoad=false;
			}
			this.renderPath(path);
			
		},
		//extract the first word frim url and go to tab view render function
		renderPath: function (path) {

			var attach = this.$('.users');
			var pathArray=path.split('/');
			
			
			this.usersTabView =  new UsersTabView();
			this.usersTabView.usersListCollection = this.usersListcollection;
			this.usersTabView.render(attach,pathArray);

		},
		//check to see if a click is done on input search box in basic view
		search:function(){
			console.log("searching.........!!!");

		},
		//using the search input enter by user... first check for users in usercollection object
		//if it is numeric make a search request to server to fetch users having phone number 
		//starting with this character,
		searchQuery: function(e){
			//var charCode = evt.charCode || evt.keyCode;
			 var code = e.keyCode || e.which; 
			  if (code  == 13) {               
			    e.preventDefault();
			    return false;
			  }
			/*if (charCode  == 13) { //Enter key's keycode
				 evt.preventDefault();
          		console.log("disableling...!!");
          		debugger;
				//return false;
			}*/
			var query = $('.search-box').val();
			console.log($('.search-box').val(),"ndjks");
			console.log(this.usersListcollection.models);
			this.filteredUsersList = this.filteredUsersList || new UsersListCollection();
			console.log(query);
			if(query){
				//console.log("valid input...");
				//this.searchBoxCollection = new SearchBoxCollection();
				this.inputQuery = query;
				if(isNaN(query)){
					console.log("string input");
					this.filteredUsersList = this.usersListcollection.filter(function(model) {
						if(model.get('userFName').toLowerCase().indexOf(query.toLowerCase()) == 0
						 || model.get('userLName').toLowerCase().indexOf(query.toLowerCase()) == 0 
						 ||(model.get('userFName')+' '+model.get('userLName')).toLowerCase().indexOf(query.toLowerCase()) == 0) {
							return true;
						}
						else {
							return false;
						}
					});
					
					console.log(this.filteredUsersList);
					this.display();
				}
				else{

					console.log("numeric in nature..");

					/*this.filteredUsersList = this.usersListcollection.filter(function(model) {
						if((""+model.get('phoneNumber')).indexOf(query) == 0) {
							return true;
						}
						else {
							return false;
						}
					});*///searching locally................!!

					
	// fetching from the server for searchin.........
					this.filteredUsersList = new SearchBoxCollection();
					this.filteredUsersList.fetch({data:{query:query},
						success:this.success_callback,
						error: this.error_callback});
				}

			}
			else{
				//this.filteredUsersList.reset();
					//this.display();
					$('.my-search-view2').html("");
				}
		},
		// will attach the search results of name and number to the dom
		display:function(){

			this.searchBoxCollectionView = new SearchBoxCollectionView({
					collection:this.filteredUsersList
				});

			//this.searchBoxCollection=this.filteredUsersList;
			//this.searchBoxCollection.models = _.extend(this.searchBoxCollection.models,this.filteredUsersList.models);
			//console.log(this.searchBoxCollection,"searchBoxCollection");
			//$('.my-search-view2').empty();
			//this.searchBoxCollectionView.delegateEvents();
			
			$('.my-search-view2').html(this.searchBoxCollectionView.render().el);
			


			if(isNaN(this.inputQuery)){
				this.additionalSearch();
			}
			else{
				this.checkIfEmpty();
			}
			
			
			console.log("rendered....");
		
		},
		// will attach users if dearch result matches a dept or product name starting characters.
		additionalDisplay:function(){

			this.searchBoxCollectionView = new SearchBoxCollectionView({
					collection:this.filteredUsersList
				});

			$('.my-search-view2').append(this.searchBoxCollectionView.render().el);
		},
		//if there exist no user with input query by user then attach no result to dom
		checkIfEmpty:function(){
			console.log(this.filteredUsersList.length,"search list length...!!");
			if(this.filteredUsersList.length==0)
			{
				this.noSearchResultsView =this.noSearchResultsView ||  new NoSearchResultsView();
				$('.my-search-view2').html(this.noSearchResultsView.render().el);
				this.noSearchResultsView.delegateEvents();
			}
		},
		//success on fetching users with phone number....
		success_callback:function(){
			console.log(this.filteredUsersList);
					this.display();

		},
		error_callback:function(){
			console.log("eorroen");
		},
		//success for getting users for products/dept that matches the input query
		success_getNonNumSearch: function(){
			console.log(this.additionalUsersList);
			console.log(this.additionalUsersList.models[0].get("dept"));
			console.log(this.additionalUsersList.models[0].get("dept").length);
			if(this.additionalUsersList.models[0].get("dept").length === undefined){
				console.log(this.additionalUsersList.models[0].get("dept")["deptName"]);
				this.searchDeptName = this.additionalUsersList.models[0].get("dept")["deptName"];
			
				console.log("got users for dept");
				
				this. searchHeadingView = this.searchHeadingView || new SearchHeadingView();
				$('.my-search-view2').append(this.searchHeadingView.render("Department",this.searchDeptName ).el);
				this.filteredUsersList = new SearchBoxCollection(this.additionalUsersList.models[0].get("dept")["users"]);
				console.log(this.filteredUsersList);
				this.additionalDisplay();		
			}


			console.log(this.additionalUsersList.models[0].get("products"));
			
			console.log(this.additionalUsersList.models[0].get("products").length);
			if(this.additionalUsersList.models[0].get("products").length=== undefined){
				
				console.log(this.additionalUsersList.models[0].get("products")["productName"]);
				this.searchProdName = this.additionalUsersList.models[0].get("products")["productName"];
			

				console.log("got additional users for products");
				this. searchHeadingView = this.searchHeadingView || new SearchHeadingView();
				$('.my-search-view2').append(this.searchHeadingView.render("Products",this.searchProdName ).el);
				this.filteredUsersList = new SearchBoxCollection(this.additionalUsersList.models[0].get("products")["users"]);
				console.log(this.filteredUsersList);
				this.additionalDisplay();
				
			}

			this.checkIfEmpty();

		},
		//this will search in database for users belonging to products or departments for input parameter
		additionalSearch:function(){

			console.log("inside additionalSearch",this.inputQuery);
			this.additionalUsersList = new AdditionalSearchCollection();
			this.additionalUsersList.fetch({data:{query:this.inputQuery},
						success:this.success_getNonNumSearch,
						error: this.error_callback});
		},
		//on clicking the tab it will show users based on products
		showByProducts: function(){
			console.log("showing via products");
			//Backbone.history.navigate(,{trigger:false});
			Backbone.history.navigate('#Product',{trigger:true});
		},
		//on clicking the tab it will show users based on department
		showByDepartment: function(){
			console.log("showing by Department");
			Backbone.history.navigate('#Department',{trigger:true});
		},
		//on clicking the tab it will show users based on knollies
		showByKnollies: function(){
			Backbone.history.navigate('#Knollies',{trigger:true});	
		},
		//on clicking the tab it will show users based on knewllies
		showByKnewllies: function(){
			Backbone.history.navigate('#Knewllies',{trigger:true});
		}

	});

	return BasicView;
});
