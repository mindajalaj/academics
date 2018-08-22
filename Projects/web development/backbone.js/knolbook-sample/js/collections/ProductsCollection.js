/**
 * @author: jalaj
 * @since: 23/02/2015@17:46:35
 * @file: ProductsCollection.js
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
	'models/ProductsModel'
], function ($, _, Backbone, ProductsModel) {
	'use strict';

	var ProductsCollection = Backbone.Collection.extend({
		model: ProductsModel,

		url: 'api/public/contacts/products'
	});

	return ProductsCollection;
});
