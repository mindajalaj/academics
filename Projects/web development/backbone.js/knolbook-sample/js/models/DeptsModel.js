/**
 * @author: jalaj
 * @since: 24/02/2015@23:46:22
 * @file: DeptsModel.js
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

	var DeptsModel = Backbone.Model.extend({
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

	return DeptsModel;
});
