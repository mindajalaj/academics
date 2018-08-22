/**
 * @author: jalaj
 * @since: 24/02/2015@08:17:02
 * @file: DisplayUserInfoView.js
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
	'text!templates/DisplayUserInfoTpl.tpl',
	'collections/DisplayUserPhnNumbersCollection',
	'views/DisplayUserPhnNumbersCollectionView',
	'views/DisplayUserProductsCollectionView',
	'views/DisplayuserSocialLinksView',
	'views/EditUserInfoView',
	'models/ProfileModel'
], function ($, _, Backbone, DisplayUserInfoTpl,DisplayUserPhnNumbersCollection,DisplayUserPhnNumbersCollectionView, DisplayUserProductsCollectionView, DisplayuserSocialLinksView,EditUserInfoView,ProfileModel) {
	'use strict';

	var DisplayUserInfoView = Backbone.View.extend({
		template: _.template(DisplayUserInfoTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .edit-user':'editUserInfo' ,
			'click .back-link' : 'backToUserList' 
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},
		//display all the user info, check first if it is in mobile view or desktop and attach the details of 
		//user accordingly, further attach phon number, social links and products to the dom
		render: function () {//no need to send any thing,it is done via parse...
			//this.phnNumbers = phnNumbers;
			this.$el.html(this.template(this.model.toJSON()));
			//	console.log(this.model);
			var windowsize = $(window).width();
			
			$(window).resize(function() {
				console.log("resizing...",windowsize);
			   windowsize = $(window).width();
			   if (windowsize>767){
			   		$('.users-mobile').css('display','none');	
					$('.users').css('display','block');
			   }
			   console.log(windowsize);
			});
			
			
			console.log("here is the widht of wondow...",windowsize);
			if (windowsize <767) {
				
				console.log("display user in short form");
				$('.users-mobile').html(this.el);
				$('.users-mobile').css('display','block');	
				$('.users').css('display','none');
			}
			else{
				$('.userDetails').html(this.el);
			}
			  
			
			
			this.attachPhnNumber();
			this.attachProducts();
			this.attachSocialLinks();
			console.log(ProfileModel.get('id'),this.model.get('userId'),"what is goining on..?");
			if( (ProfileModel.get('id')===1) || (ProfileModel.get('id') === this.model.get('userId'))){
				//$('.edit-user-link').css('display','block');
				$('.edit-user-link').show();

			}
			else{
				$('.edit-user-link').css('display','none');	
			}
			
		},
		//back button is pressed in mobile view
		backToUserList:function(){
			$('.users-mobile').removeClass("visible-xs");
			$('.users-mobile').css('display','none');	
				$('.users').css('display','block');
		},
		//get all phone number ogf the user and display
		attachPhnNumber: function(){
			console.log("creating obj for phn collll.......");
			this.phnCollectionView = this.phnCollectionView || new DisplayUserPhnNumbersCollectionView({
				collection:this.model.get("phoneNumbers")
			});
			//this.phnCollection.set(this.phnNumbers);
			//console.log(this.model.phnCollection);
			//console.log(this.model.phnCollection.models,"display collection...");
			//console.log(this.model.get("phoneNumbers"));//this is how we prse the response ...easy to update data now..
			this.phnCollectionView.render();
		},
		//get all products of user
		attachProducts : function(){

			this.prodCollectionView = this.prodCollectionView || new DisplayUserProductsCollectionView({
				collection:this.model.get("products")
			}); 
			this.prodCollectionView.render();

		},
		attachSocialLinks : function(){
			this.socialLinksView = this.socialLinksView || new DisplayuserSocialLinksView({
				model : this.model.get("socialLinks")
			});
			this.socialLinksView.render();
		},
		//change the view to edit the info of a user
		editUserInfo:function(){
			Backbone.history.navigate('#Knollies/'+this.model.get("userId")+'/Edit',{trigger:false});
			this.editUserInfoview = this.editUserInfoview || new EditUserInfoView({model:this.model});
			//$('.userDetails').empty();
		    this.editUserInfoview.render();
			//this.editUserInfoview.delegateEvents();
			
		}
	});

	return DisplayUserInfoView;
});
