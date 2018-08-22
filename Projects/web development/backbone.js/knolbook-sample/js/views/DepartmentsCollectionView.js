/**
 * @author: jalaj
 * @since: 25/02/2015@00:12:20
 * @file: DepartmentsCollectionView.js
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
	'text!templates/DepartmentsCollectionViewTpl.tpl',
	'views/DepartmentsView'
], function ($, _, Backbone, DepartmentsCollectionViewTpl, DepartmentsView) {
	'use strict';

	var DepartmentsCollectionView = Backbone.View.extend({
		template: _.template(DepartmentsCollectionViewTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render',
				'addItemView');

			
		},

		render: function () {
			//this.$el.html(this.template());
			this.collection.forEach(this.addItemView, this);
			//return this;
		},

		addItemView: function(item) {
			var childView = new DepartmentsView({model: item});
			childView.render();
		}
	});

	return DepartmentsCollectionView;
});
