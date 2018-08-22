/**
 * @author: jalaj
 * @since: 03/03/2015@12:14:59
 * @file: DisplayAllProductsCollection.js
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
	'models/DisplayAllProductsModel'
], function ($, _, Backbone, DisplayAllProductsModel) {
	'use strict';

	var DisplayAllProductsCollection = Backbone.Collection.extend({
		model: DisplayAllProductsModel,

		url: 'api/public/products'
	});

	return DisplayAllProductsCollection;
});
