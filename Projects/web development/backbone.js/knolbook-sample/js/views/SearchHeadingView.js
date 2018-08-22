/**
 * @author: jalaj
 * @since: 05/03/2015@18:35:52
 * @file: SearchHeadingView.js
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
	'text!templates/SearchHeadingTpl.tpl'
], function ($, _, Backbone, SearchHeadingTpl) {
	'use strict';

	var SearchHeadingView = Backbone.View.extend({
		template: _.template(SearchHeadingTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function (topic,name) {
			this.$el.html(this.template({heading:topic,item : name}));
			return this;
		}
	});

	return SearchHeadingView;
});
