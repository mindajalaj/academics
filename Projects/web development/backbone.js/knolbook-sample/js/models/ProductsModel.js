/**
 * @author: jalaj
 * @since: 23/02/2015@17:46:35
 * @file: ProductsModel.js
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
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var ProductsModel = Backbone.Model.extend({
		urlRoot: '',

		initialize: function() {
		},

		defaults: {
			productId: "",
	        productsName: "",
	        users:""
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return ProductsModel;
});
