/**
 * @author: jalaj
 * @since: 26/02/2015@11:14:36
 * @file: SearchBoxView.js
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
	'text!templates/SearchBoxTpl.tpl'
], function ($, _, Backbone, SearchBoxTpl) {
	'use strict';

	var SearchBoxView = Backbone.View.extend({
		template: _.template(SearchBoxTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .search-box-user':'showUser'
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},
		//d
		render: function () {
			//console.log(this.template(this.model.toJSON()),"templates");
			this.$el.html(this.template(this.model.toJSON()));
			console.log(this.el,"el of iniside view......");
			return this;
		},
		showUser:function(event){
			//event.preventDefault();
			//event.stopPropagation();
			console.log("is clicked...!!!");
			$('.search-box').empty();
			$('.search-box').val('');
			this.targetUrl = '/#Knollies/'+this.model.get("userId");
			console.log(this.targetUrl);
			//Backbone.history.navigate(this.targetUrl,{trigger:false});
			//window.location.href=this.targetUrl;
			$('.my-search-view2').html("");

		}
	});

	return SearchBoxView;
});
