/**
 * @author: jalaj
 * @since: 25/02/2015@10:47:55
 * @file: DisplayUserPhnNumbersView.js
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
	'text!templates/DisplayUserPhnNumbersTpl.tpl'
], function ($, _, Backbone, DisplayUserPhnNumbersTpl) {
	'use strict';

	var DisplayUserPhnNumbersView = Backbone.View.extend({
		template: _.template(DisplayUserPhnNumbersTpl),
		
		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {

			console.log("apenidngggggg");
			
			$('.display-user-phn').append(this.template(this.model.toJSON()));
			
			//console.log($('.display-user-phn'));
		}
	});

	return DisplayUserPhnNumbersView;
});
