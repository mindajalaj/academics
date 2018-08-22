/**
 * @author: jalaj
 * @since: 25/02/2015@10:47:55
 * @file: DisplayUserPhnNumbersModel.js
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

	var DisplayUserPhnNumbersModel = Backbone.Model.extend({
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

	return DisplayUserPhnNumbersModel;
});
