/**
 * @author: jalaj
 * @since: 05/03/2015@22:59:09
 * @file: DisplayAllUpdatesModel.js
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

	var DisplayAllUpdatesModel = Backbone.Model.extend({
		urlRoot: '',

		initialize: function() {
		},

		defaults: {

			updateText: "",
	        updateTime: "",
	        userFName: "",
	        userLName: "",
	        userPic: "",
	        userId: "",
	        userDesignation: ""
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return DisplayAllUpdatesModel;
});
