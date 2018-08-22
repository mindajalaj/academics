/**
 * @author: jalaj
 * @since: 02/03/2015@13:43:06
 * @file: AddPhoneNumberView.js
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
	'text!templates/AddPhoneNumberTpl.tpl'
], function ($, _, Backbone, AddPhoneNumberTpl) {
	'use strict';

	var AddPhoneNumberView = Backbone.View.extend({
		template: _.template(AddPhoneNumberTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .remove-phn':'removePhnNumber'
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function (phtype,phone) {

			console.log(phone,phtype);

			this.$el.html(this.template({phn:phone,type:phtype}));
			console.log(this.el);
			return this;
		},
		removePhnNumber:function(e){
			console.log("removing...");
			e.preventDefault();
			this.remove();
		}
	});

	return AddPhoneNumberView;
});
