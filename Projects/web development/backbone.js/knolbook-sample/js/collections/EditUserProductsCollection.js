/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:38
 * @file: EditUserProductsCollection.js
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
	'models/EditUserProductsModel'
], function ($, _, Backbone, EditUserProductsModel) {
	'use strict';

	var EditUserProductsCollection = Backbone.Collection.extend({
		model: EditUserProductsModel,

		url: ''
	});

	return EditUserProductsCollection;
});
