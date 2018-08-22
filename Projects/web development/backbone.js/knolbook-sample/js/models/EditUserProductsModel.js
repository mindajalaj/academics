/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:38
 * @file: EditUserProductsModel.js
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

	var EditUserProductsModel = Backbone.Model.extend({
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

	return EditUserProductsModel;
});
