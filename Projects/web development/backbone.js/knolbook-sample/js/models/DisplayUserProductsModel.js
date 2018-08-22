/**
 * @author: jalaj
 * @since: 25/02/2015@13:56:00
 * @file: DisplayUserProductsModel.js
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

	var DisplayUserProductsModel = Backbone.Model.extend({
		urlRoot: '',

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return DisplayUserProductsModel;
});
