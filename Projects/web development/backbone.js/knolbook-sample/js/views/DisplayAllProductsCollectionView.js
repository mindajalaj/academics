/**
 * @author: jalaj
 * @since: 03/03/2015@12:14:59
 * @file: DisplayAllProductsCollectionView.js
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
	'text!templates/DisplayAllProductsCollectionViewTpl.tpl',
	'views/DisplayAllProductsView'
], function ($, _, Backbone, DisplayAllProductsCollectionViewTpl, DisplayAllProductsView) {
	'use strict';

	var DisplayAllProductsCollectionView = Backbone.View.extend({
		template: _.template(DisplayAllProductsCollectionViewTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render',
				'addItemView');

			this.listenTo(this.collection, 'reset', this.render);
		},

		render: function () {
			//this.$el.html(this.template());
			this.collection.forEach(this.addItemView, this);
			//return this;
		},

		addItemView: function(item) {
			var childView = new DisplayAllProductsView({model: item});
			//this.$el.append(childView.render().el);
			childView.render();
		}
	});

	return DisplayAllProductsCollectionView;
});
