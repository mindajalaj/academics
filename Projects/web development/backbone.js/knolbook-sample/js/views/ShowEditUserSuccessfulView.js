/**
 * @author: jalaj
 * @since: 27/02/2015@13:42:29
 * @file: ShowEditUserSuccessfulView.js
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
	'text!templates/ShowEditUserSuccessfulTpl.tpl'
], function ($, _, Backbone, ShowEditUserSuccessfulTpl) {
	'use strict';

	var ShowEditUserSuccessfulView = Backbone.View.extend({
		template: _.template(ShowEditUserSuccessfulTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			this.$el.html(this.template());
			return this;
		}
	});

	return ShowEditUserSuccessfulView;
});
