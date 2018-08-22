/**
 * @author: jalaj
 * @since: 25/02/2015@14:21:19
 * @file: DisplayUserSocialLinksView.js
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
	'text!templates/DisplayUserSocialLinksTpl.tpl'
], function ($, _, Backbone, DisplayUserSocialLinksTpl) {
	'use strict';

	var DisplayUserSocialLinksView = Backbone.View.extend({
		template: _.template(DisplayUserSocialLinksTpl),
		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			
				$('.display-social-links').html(this.template(this.model.toJSON()));
			
			//return this;
		}
	});

	return DisplayUserSocialLinksView;
});
