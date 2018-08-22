/**
 * @author: jalaj
 * @since: 05/03/2015@22:59:09
 * @file: DisplayAllUpdatesView.js
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
	'text!templates/DisplayAllUpdatesTpl.tpl'
], function ($, _, Backbone, DisplayAllUpdatesTpl) {
	'use strict';

	var DisplayAllUpdatesView = Backbone.View.extend({
		template: _.template(DisplayAllUpdatesTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return DisplayAllUpdatesView;
});
