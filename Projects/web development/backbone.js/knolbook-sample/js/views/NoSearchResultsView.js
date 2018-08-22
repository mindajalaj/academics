/**
 * @author: jalaj
 * @since: 04/03/2015@09:34:15
 * @file: NoSearchResultsView.js
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
	'text!templates/NoSearchResultsTpl.tpl'
], function ($, _, Backbone, NoSearchResultsTpl) {
	'use strict';

	var NoSearchResultsView = Backbone.View.extend({
		template: _.template(NoSearchResultsTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .search-box-user' : 'displayHome'
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			this.$el.html(this.template());
			return this;
		},
		displayHome:function(event){
			event.preventDefault();
			event.stopPropagation();
			console.log("is clicked...!!!");
			$('.search-box').empty();
			$('.search-box').val('');
			//this.targetUrl = '/#Knollies/'+this.model.get("userId");
			//console.log(this.targetUrl);
			//Backbone.history.navigate(this.targetUrl,{trigger:false});
			//window.location.href=this.targetUrl;
			$('.my-search-view2').html("");

		}
	});

	return NoSearchResultsView;
});
