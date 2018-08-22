/**
 * @author: jalaj
 * @since: 05/03/2015@22:59:09
 * @file: DisplayAllUpdatesCollection.js
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
	'models/DisplayAllUpdatesModel'
], function ($, _, Backbone, DisplayAllUpdatesModel) {
	'use strict';

	var DisplayAllUpdatesCollection = Backbone.Collection.extend({
		model: DisplayAllUpdatesModel,

		url: 'api/public/updates'
	});

	return DisplayAllUpdatesCollection;
});
