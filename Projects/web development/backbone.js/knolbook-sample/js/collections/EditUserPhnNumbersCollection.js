/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:11
 * @file: EditUserPhnNumbersCollection.js
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
	'models/EditUserPhnNumbersModel'
], function ($, _, Backbone, EditUserPhnNumbersModel) {
	'use strict';

	var EditUserPhnNumbersCollection = Backbone.Collection.extend({
		model: EditUserPhnNumbersModel,

		url: ''
	});

	return EditUserPhnNumbersCollection;
});
