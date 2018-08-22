/**
 * @author: jalaj
 * @since: 26/02/2015@00:00:38
 * @file: EditUserSocialLinksView.js
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
	'text!templates/EditUserSocialLinksTpl.tpl'
], function ($, _, Backbone, EditUserSocialLinksTpl) {
	'use strict';

	var EditUserSocialLinksView = Backbone.View.extend({
		template: _.template(EditUserSocialLinksTpl),

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
		}
	});

	return EditUserSocialLinksView;
});
