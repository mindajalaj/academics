/**
 * @author: jalaj
 * @since: 25/02/2015@13:56:00
 * @file: DisplayUserProductsCollection.js
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
	'models/DisplayUserProductsModel'
], function ($, _, Backbone, DisplayUserProductsModel) {
	'use strict';

	var DisplayUserProductsCollection = Backbone.Collection.extend({
		model: DisplayUserProductsModel,

		url: ''
	});

	return DisplayUserProductsCollection;
});
