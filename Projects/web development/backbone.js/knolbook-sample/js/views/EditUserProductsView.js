/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:38
 * @file: EditUserProductsView.js
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
	'text!templates/EditUserProductsTpl.tpl'
], function ($, _, Backbone, EditUserProductsTpl) {
	'use strict';

	var EditUserProductsView = Backbone.View.extend({
		template: _.template(EditUserProductsTpl),

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
			//console.log($('.my-prods'));
		}
	});

	return EditUserProductsView;
});
