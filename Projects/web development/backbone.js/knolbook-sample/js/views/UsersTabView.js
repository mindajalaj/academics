/**
 * @author: jalaj
 * @since: 23/02/2015@02:58:57
 * @file: UsersTabView.js
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
	'text!templates/UsersTabTpl.tpl',
	
	'collections/UsersListCollection',
	'views/UsersListCollectionView',
	'views/AddUserView',
	'models/AddUserModel',
	'collections/DisplayAllUpdatesCollection',
	'views/DisplayAllUpdatesCollectionView',
	'views/AddUserSuccessfulView'
], function ($, _, Backbone, UsersTabTpl,UsersListCollection,UsersListCollectionView,AddUserView, AddUserModel, DisplayAllUpdatesCollection, DisplayAllUpdatesCollectionView,AddUserSuccessfulView) {
	'use strict';

	var UsersTabView = Backbone.View.extend({
		template: _.template(UsersTabTpl),

		tagName: 'div',

		id: '',

		className: 'tab-pane fade in active',

		events: {},
		
		initialize: function (options) {
			console.log(options);
			this.vars = options;
			_.bindAll(this, 'render','success_callback','success_updates','error_updates');
			this.firstLoad = true;
			this.isAdded=false;
			//this.usersListCollection = this.vars;
		},
		//success of fetching collection of user to display on left hand side
		success_callback:function () {
			//console.log("inside success");
			console.log(this.usersListCollection.models,"collection of user list...");
			//console.log(this.$el,"befire render....");
			//this.$el.html(this.usersListCollectionView.render().el);
			//console.log(this.$el,"after renderssssssssssss");
			//this.attach.html(this.el);
			/*this.usersListCollectionView =  new UsersListCollectionView({
					collection:this.usersListCollection
				});*/
			this.renderTabs();

		},
		//check if it is the first time . if yes the fetch all the users from the server
		render: function (attach,pathArray) {
			
			this.attach = attach;
			this.pathArray=pathArray;
			this.$el.html(this.template());
			/*this.usersListCollection.fetch({
					
					success:this.success_callback
				});*/

			if(this.firstLoad){
				
		
				//this.usersListCollection =this.usersListCollection || new UsersListCollection();
				this.usersListCollectionView = this.usersListCollectionView || new UsersListCollectionView({
					collection:this.usersListCollection
				});
				this.usersListCollection.fetch({
					
					success:this.success_callback
				});

				this.firstLoad=false;
			}
			else{
				//this.delegateEvents();
				this.renderTabs();
			}
		},
		//based on the path we got in url direct execution of code
		renderTabs:function(){
			var pathword= this.pathArray.shift();
			$('.users-mobile').css('display','none');	
				$('.users').css('display','block');
			console.log("pathword",pathword);
			
			//console.log($(pathword));
			if(pathword){
				switch(pathword){
					case 'Knollies':this.renderKnollies();
										$('.Knollies').addClass('active');
										$('.Knewllies').removeClass('active');
										$('.Department').removeClass('active');
										$('.Product').removeClass('active');
										break;
					case 'Knewllies': this.renderKnewllies();
										$('.Knewllies').addClass('active');
										break;
					case 'Department': this.renderDepartment();
										$('.Department').addClass('active');
										break;
					case 'Product':this.renderProduct();
										$('.Product').addClass('active');
										break;
					case 'addUser' :this.renderKnollies();
									this.renderaddUser();
									$('.Knollies').addClass('active');
										$('.Knewllies').removeClass('active');
										$('.Department').removeClass('active');
										$('.Product').removeClass('active');
										break;
					case 'updates' :this.renderKnollies(); 
										$('.Knollies').addClass('active');
										$('.Knewllies').removeClass('active');
										$('.Department').removeClass('active');
										$('.Product').removeClass('active');
									this.renderUpdates();
										break;					
					default: console.log("this one is defalut",pathword);
				}
			}
			this.usersListCollectionView.delegateEvents();
			this.checkIfUserAdded();// to check if user was just added to knolbook
		},
		//will attach knollies list to dom
		renderKnollies:function(){
			console.log("inside Knollies");
			this.$el.html(this.usersListCollectionView.render(this.pathArray).el);
			this.attach.html(this.el);
			/*var windowsize = $(window).width();
			
			$(window).resize(function() {
				console.log("resizing. inside render knollies..",windowsize);
			   windowsize = $(window).width();
			   console.log(windowsize);
			   if (windowsize >767) {
				$('.users').html(this.el); 
			}
			});*/
			//console.log("here is the widht of in render knollies wondow...",windowsize);
			
		},
		//attach knewllies list to dom
		renderKnewllies:function(){
			console.log("inside Knewllies");
			this.$el.html(this.usersListCollectionView.renderKnewl(this.pathArray).el);
			this.attach.html(this.el);
		},
		//attach dept list to dom
		renderDepartment:function(){
			console.log("inside Department");
			this.$el.html(this.usersListCollectionView.renderDept(this.pathArray).el);
			this.attach.html(this.el);
		},
		//attach product list to dom
		renderProduct:function(){
			console.log("inside Product");
			//this.$el.html(this.usersListCollectionView.renderProducts().el);
			//this.attach.html(this.el);
			this.usersListCollectionView.renderProducts(this.attach,this.pathArray);
		},
		//create an object to add user to knollbook, listen for event if user is added successfully !!
		//before that render the add user form.
		renderaddUser:function(){
			console.log("adding user..");
			this.addUserModel = new AddUserModel();
			this.add= this.add || new AddUserView({model : this.addUserModel});

			this.listenTo(this.addUserModel,'sync',this.userIsAdded);
			this.add.render();
		},
		//when a user is successfully added we navigate and reload the app by, fetching the users list again
		userIsAdded: function(){
			console.log("got it ...post is successfull...!!");
			this.firstLoad=true;
			this.isAdded = true;
			Backbone.history.navigate('#Knollies',{trigger:true});
		},
		//creat an object to display updates of all user 
		renderUpdates:function(){
			console.log("going in updates...");
			this.updatesCollection = new DisplayAllUpdatesCollection();
			this.updatesCollectionView = new DisplayAllUpdatesCollectionView({
				collection: this.updatesCollection});
			
  
  			this.updatesCollection.fetch({
  				success:this.success_updates,
  				error:this.error_updates
  			});
		},
		//get all updates of user
		success_updates:function(){
			console.log("success");
			//$('.userDetails').html(this.updatesCollectionView.render().el);
			this.updatesCollectionView.render();
			this.delegateEvents();
		},
		error_updates: function(){
			console.log("error while fetching updates...!!");
		},
		//check if add user bit is set to true if yes display user added view 
		checkIfUserAdded : function(){
			if(this.isAdded)
			{
				console.log("inside added..!!");
				this.successView = this.successView || new AddUserSuccessfulView();
				$('.userDetails').html(this.successView.render().el);
				this.isAdded=false;
			}
		}
		
	});

	return UsersTabView
});
