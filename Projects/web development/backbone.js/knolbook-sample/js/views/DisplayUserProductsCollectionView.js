/**
 * @author: jalaj
 * @since: 25/02/2015@13:56:00
 * @file: DisplayUserProductsCollectionView.js
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
	'text!templates/DisplayUserProductsCollectionViewTpl.tpl',
	'views/DisplayUserProductsView'
], function ($, _, Backbone, DisplayUserProductsCollectionViewTpl, DisplayUserProductsView) {
	'use strict';

	var DisplayUserProductsCollectionView = Backbone.View.extend({
		template: _.template(DisplayUserProductsCollectionViewTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render',
				'addItemView');

			//this.listenTo(this.collection, 'reset', this.render);
		},

		render: function (s) {
			//this.$el.html(this.template());
			$('.display-user-prods').html("");
			this.collection.forEach(this.addItemView, this);
			
		},

		addItemView: function(item) {
			var childView = new DisplayUserProductsView({model: item});
			childView.render();
		}
	});

	return DisplayUserProductsCollectionView;
});
