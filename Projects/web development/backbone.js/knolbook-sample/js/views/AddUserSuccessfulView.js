/**
 * @author: jalaj
 * @since: 27/02/2015@07:47:24
 * @file: AddUserSuccessfulView.js
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
	'text!templates/AddUserSuccessfulTpl.tpl'
], function ($, _, Backbone, AddUserSuccessfulTpl) {
	'use strict';

	var AddUserSuccessfulView = Backbone.View.extend({
		template: _.template(AddUserSuccessfulTpl),

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

	return AddUserSuccessfulView;
});
