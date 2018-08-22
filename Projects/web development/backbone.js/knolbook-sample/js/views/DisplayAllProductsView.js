/**
 * @author: jalaj
 * @since: 03/03/2015@12:14:59
 * @file: DisplayAllProductsView.js
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
	'text!templates/DisplayAllProductsTpl.tpl'
], function ($, _, Backbone, DisplayAllProductsTpl) {
	'use strict';

	var DisplayAllProductsView = Backbone.View.extend({
		template: _.template(DisplayAllProductsTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			console.log("inside rendering products...attaching");
			$('.my-prods').append(this.template(this.model.toJSON()));
			//this.$el.html(this.template(this.model.toJSON()));
			//return this;
		}
	});

	return DisplayAllProductsView;
});
