/**
 * @author: jalaj
 * @since: 25/02/2015@00:12:20
 * @file: DepartmentsModel.js
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

	var DepartmentsModel = Backbone.Model.extend({
		urlRoot: '',

		initialize: function() {
		},

		defaults: {
			deptId : "",
			deptName : ""
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return DepartmentsModel;
});
