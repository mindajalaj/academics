/**
 * @author: jalaj
 * @since: 25/02/2015@00:12:21
 * @file: DepartmentsView.js
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
	'text!templates/DepartmentsTpl.tpl'
], function ($, _, Backbone, DepartmentsTpl) {
	'use strict';

	var DepartmentsView = Backbone.View.extend({
		template: _.template(DepartmentsTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render');
		},

		render: function () {
			console.log("inside rendering deptartmenter view...attaching");
			$('.depts').append(this.template(this.model.toJSON()));
			//return this;
		}
	});

	return DepartmentsView;
});
