/**
 * @author: jalaj
 * @since: 25/02/2015@00:12:20
 * @file: DepartmentsCollection.js
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
	'backbone',
	'models/DepartmentsModel'
], function ($, _, Backbone, DepartmentsModel) {
	'use strict';

	var DepartmentsCollection = Backbone.Collection.extend({
		model: DepartmentsModel,

		url: 'api/public/departments'
	});

	return DepartmentsCollection;
});
