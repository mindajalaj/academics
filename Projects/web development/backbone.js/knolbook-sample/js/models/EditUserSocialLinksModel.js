/**
 * @author: jalaj
 * @since: 26/02/2015@00:00:53
 * @file: EditUserSocialLinksModel.js
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

	var EditUserSocialLinksModel = Backbone.Model.extend({
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

	return EditUserSocialLinksModel;
});
