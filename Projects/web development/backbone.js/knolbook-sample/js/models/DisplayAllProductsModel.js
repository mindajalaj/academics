/**
 * @author: jalaj
 * @since: 03/03/2015@12:14:59
 * @file: DisplayAllProductsModel.js
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

	var DisplayAllProductsModel = Backbone.Model.extend({
		urlRoot: '',

		initialize: function() {
		},

		defaults: {
			productName : "",
			productId : ""
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return DisplayAllProductsModel;
});
