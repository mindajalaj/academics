/**
 * @author: jalaj
 * @since: 05/03/2015@17:56:02
 * @file: AdditionalSearchCollection.js
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
	'models/AdditionalSearchModel'
], function ($, _, Backbone, AdditionalSearchModel) {
	'use strict';

	var AdditionalSearchCollection = Backbone.Collection.extend({
		model: AdditionalSearchModel,

		url: 'api/public/search'

	});

	return AdditionalSearchCollection;
});
