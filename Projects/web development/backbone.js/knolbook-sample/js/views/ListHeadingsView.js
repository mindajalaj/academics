/**
 * @author: jalaj
 * @since: 23/02/2015@21:17:27
 * @file: ListHeadingsView.js
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
	'text!templates/ListHeadingsTpl.tpl'
], function ($, _, Backbone, ListHeadingsTpl) {
	'use strict';

	var ListHeadingsView = Backbone.View.extend({
		template: _.template(ListHeadingsTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function (item) {
			//console.log(item);
			this.$el.html(this.template({heading: item}));
			return this;
		}
	});

	return ListHeadingsView;
});
