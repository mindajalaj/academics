/**
 * @author: jalaj
 * @since: 25/02/2015@10:47:55
 * @file: DisplayUserPhnNumbersCollection.js
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
	'models/DisplayUserPhnNumbersModel'
], function ($, _, Backbone, DisplayUserPhnNumbersModel) {
	'use strict';

	var DisplayUserPhnNumbersCollection = Backbone.Collection.extend({
		model: DisplayUserPhnNumbersModel,

		url: ''
	});

	return DisplayUserPhnNumbersCollection;
});
