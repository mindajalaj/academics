/**
 * @author: jalaj
 * @since: 23/02/2015@02:25:07
 * @file: UsersListModel.js
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

	var UsersListModel = Backbone.Model.extend({
		urlRoot: '',

		initialize: function() {
		},

		defaults: {

			phoneNumber: "",
	        userId: "",
	        userFName: "",
	        userLName: "",
	        userDOJ: "",
	        userPic: "",
	        userDesignation: "",
	        userDepartment: "",
	        userDeptName: ""
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return UsersListModel;
});
