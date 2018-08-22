/**
 * @author: jalaj
 * @since: 25/02/2015@13:56:00
 * @file: DisplayUserProductsView.js
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
	'text!templates/DisplayUserProductsTpl.tpl'
], function ($, _, Backbone, DisplayUserProductsTpl) {
	'use strict';

	var DisplayUserProductsView = Backbone.View.extend({
		template: _.template(DisplayUserProductsTpl),
		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			
			$('.display-user-prods').append(this.template(this.model.toJSON()));
			
		}
	});

	return DisplayUserProductsView;
});
