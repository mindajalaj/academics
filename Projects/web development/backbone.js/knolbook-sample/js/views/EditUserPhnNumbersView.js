/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:11
 * @file: EditUserPhnNumbersView.js
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
	'text!templates/EditUserPhnNumbersTpl.tpl'
], function ($, _, Backbone, EditUserPhnNumbersTpl) {
	'use strict';

	var EditUserPhnNumbersView = Backbone.View.extend({
		template: _.template(EditUserPhnNumbersTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .remove-phon' :'removePhone'
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		removePhone: function(e){
			e.preventDefault();
			console.log("removing the phone....");
			this.remove();
		}
	});

	return EditUserPhnNumbersView;
});
