/**
 * @author: jalaj
 * @since: 23/02/2015@02:25:07
 * @file: UsersListCollectionView.js
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
	'text!templates/UsersListCollectionViewTpl.tpl',
	'views/UsersListView',
	'collections/UsersListCollection',
	'collections/ProductsCollection',
	'views/ListHeadingsView',
	'models/DisplayUserInfoModel',
	'views/DisplayUserInfoView'
],function ($, _, Backbone, UsersListCollectionViewTpl, UsersListView,UsersListCollection,ProductsCollection,ListHeadingsView,DisplayUserInfoModel,DisplayUserInfoView) {
	'use strict';

	var UsersListCollectionView = Backbone.View.extend({
		template: _.template(UsersListCollectionViewTpl),

		tagName: 'div',

		id: '',

		className: 'list-group',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','renderDept','renderProducts','success_callback',
				'addItemView','renderUserDetails','renderPathArray','success_callDetails');
			this.firstLoad = true;

			//this.listenTo(this.collection, 'reset', this.render);
		},
		//sort the collection based on first name,get all undividual views, call render PathArray
		render: function (pathArray) {
			this.pathArray= pathArray;
			this.$el.html(this.template());
			console.log("inside render of coll-knol-view");
			console.log(pathArray,"after Knollies");
			this.collection.changeSort('firstName');
			this.collection.sort();
			
			this.collection.forEach(this.addItemViewKnol, this);
			
			//console.log(this.$el,"collection");
			this.renderPathArray();
			return this;
		},
		//check if there are more words after first word....that if user id preceeds it
		renderPathArray: function(){

			if(this.pathArray.length>0){

				console.log("in if");
				var path=this.pathArray.shift();
				this.renderUserDetails(path);
			}
			if(this.pathArray.length>0){

				console.log(this.pathArray);
				Backbone.history.navigate('#Knollies/'+path,{trigger:false});
			
			}

	
		},
		//
		success_callDetails:function(){

			console.log(this.info.get("phoneNumbers"));
			//var phnNumbers = this.info.get("phoneNumbers");
			this.infoView.render();

		},
		//create object to display individual user info. fetch the data for this user
		renderUserDetails: function(path){

			console.log(path);
			var usermodel =this.collection.find(function(model){
				//return  model.get("userFName")+'.'+model.get("userLName")  ===path
				//console.log(model.get("userId"));
				return model.get("userId") == path;// note here === is not working..!!
			});
			//Backbone.history.navigate('#Knollies/'+usermodel.get("userFName")+'.'+usermodel.get("userLName"),{trigger:false});
			//Backbone.history.navigate('#Knollies/'+usermodel.get("userFName")+'.'+usermodel.get("userLName"),{trigger:false});
			
			var userid = usermodel.get('userId');
			this.info =   new DisplayUserInfoModel({id : userid});
			this.infoView =  new DisplayUserInfoView({model:this.info});
			
			this.info.fetch({
					
					success:this.success_callDetails
				});
			
		},
		// create a child view for all users in the collection and append it to el
		addItemViewKnol: function(item){ 

			var childView = new UsersListView({model: item});
			this.$el.append(childView.render("#Knollies").el);

		},
		//add users for products
		addItemView: function(item){ 

			var childView = new UsersListView({model: item});
			this.$el.append(childView.render("#Product").el);


		},
		//make list for department.....
		addItemViewDept: function(item){ 
			console.log(item.get('userDeptName'),"collll");
			//console.log(this.deptName,"var");
			
			if(this.deptName===item.get('userDeptName')){
			
			}
			else{
				this.deptName=item.get('userDeptName');
				var childViewHead = new ListHeadingsView({model:item});
				this.$el.append(childViewHead.render(this.deptName).el);
				
			}	
			var childView = new UsersListView({model: item});
				this.$el.append(childView.render('#Department').el);
		},
		renderDept:function(pathArray){
			this.pathArray=pathArray;
			this.$el.html(this.template());
			console.log("inside renderDept of coll-view");
//sorting the models of collection based on dept id and first name 
			
			this.collection.changeSort('dept');
			this.collection.sort();
				
			this.deptName=this.collection.models[0].get('userDeptName');
			var childView = new ListHeadingsView({model:this.collection.models[0]});
			this.$el.append(childView.render(this.deptName).el);
			//console.log(this.deptName);
			//console.log(this.collection.comparator,"after");
			this.collection.forEach(this.addItemViewDept, this);
			
			//console.log(this.$el,"collection");
			this.renderPathArray();
			return this;

		},
		//get users for each product 
		addPrducts:function(item){
			

			var childView = new ListHeadingsView({model:item});
			this.$el.append(childView.render(item.get('productsName')).el);
			
			this.usersCount = item.get('users').length;
			//console.log("vfdvdfvdv",item.toJSON());//
			var user=item.get('users');
			//console.log(user);
			//console.log(this.el);
			user.forEach(this.showUsers,this);


		},
		//add each user after gettting its id roight with existing collection
		showUsers:function(userId){
			var usermodel =this.collection.find(function(model){return model.get("userId")===userId});
			//console.log(usermodel);
			this.addItemView(usermodel);
		},
		//traverse through each  product
		success_callback:function(){
			console.log("succes of products.....");
			console.log(this.prodCollection.models);
			this.prodCollection.forEach(this.addPrducts,this);
				//console.log(this.prodCollection.models[1].get('users').length);
			this.attach.html(this.el);
			this.renderPathArray();
			//console.log("attach........");

		},
		//fetch users for each product and get all product
		renderProducts:function(attach,pathArray){
			this.attach=attach;
			this.pathArray=pathArray;
			this.$el.html(this.template());
			if(this.firstLoad){
				
				console.log("inside renderProducts of coll-view");
				this.prodCollection =this.prodCollection|| new ProductsCollection();
				this.prodCollection.fetch({
					
					success:this.success_callback
				});
				this.firstLoad=false;
			}
			else{
				this.prodCollection.forEach(this.addPrducts,this);
				this.attach.html(this.el);
				this.renderPathArray();
			}
		},
		renderKnewl: function (pathArray) {
			this.pathArray= pathArray;
			this.$el.html(this.template());
			console.log("inside render of coll-knol-view");
			console.log(pathArray,"after Knollies");
			this.collection.changeSort('firstName');
			this.collection.sort();
			
			this.collection.forEach(this.addItemViewKnewl, this);
			
			//console.log(this.$el,"collection");
			this.renderPathArray();
			return this;
		},
		addItemViewKnewl: function(item){ 

			var childView = new UsersListView({model: item});
			this.$el.append(childView.render("#Knewllies").el);

		}

	});

	return UsersListCollectionView;
});
