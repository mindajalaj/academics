/**
 * @author: jalaj
 * @since: 23/02/2015@02:25:07
 * @file: UsersListView.js
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
	'text!templates/UsersListTpl.tpl',
	'models/DisplayUserInfoModel',
	'views/DisplayUserInfoView'
], function ($, _, Backbone, UsersListTpl, DisplayUserInfoModel, DisplayUserInfoView) {
	'use strict';

	var UsersListView = Backbone.View.extend({
		template: _.template(UsersListTpl),
		//templateHeading:_.template(ListHeadingTpl),
		tagName: 'a',

		id: '',

		className: 'list-group-item lf-padding my-list-element ',

		events: {
			'click ': 'act'

		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','success_callDetails');
			//this.listenTo(this,'click ',this.act);
		},
		//get template for each uesr in list
		render: function (path) {
			this.path = path;
			//below code is to give url as name of the person....):
			//this.$el.attr("href", path+'/'+this.model.get("userFName")+'.'+this.model.get("userLName"))
			this.$el.attr("href", this.path+'/'+this.model.get("userId"));
			
			//console.log(this.model.get("userFName"))
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		//make that div active and rest as usual
		act : function(e){
			e.preventDefault();
			e.stopPropagation();
			console.log("active s being called.................");
			$('.list-group-item').removeClass('active');
			//this.$('.list-group-item').addClass('active');
			this.$el.addClass('active');
			this.targetUrl = this.path +'/'+this.model.get("userId");
			console.log(this.targetUrl);
			Backbone.history.navigate(this.targetUrl,{trigger:false});
			
			this.renderUserDetails();
		},
		success_callDetails:function(){

			this.infoView.render();

		},
		//display user info on which we clicked.
		renderUserDetails: function(){

			var userid = this.model.get('userId');
			this.info =   new DisplayUserInfoModel({id : userid});
			this.infoView =  new DisplayUserInfoView({model:this.info});
			
			this.info.fetch({
					
					success:this.success_callDetails
				});
			
		},
	});

	return UsersListView;
});
