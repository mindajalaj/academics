/**
 * @author: jalaj
 * @since: 26/02/2015@11:14:36
 * @file: SearchBoxCollection.js
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
	'models/SearchBoxModel'
], function ($, _, Backbone, SearchBoxModel) {
	'use strict';

	var SearchBoxCollection = Backbone.Collection.extend({
		model: SearchBoxModel,

		url: 'api/public/search'
	});

	return SearchBoxCollection;
});
