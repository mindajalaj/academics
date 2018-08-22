/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:38
 * @file: EditUserProductsCollectionView.js
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
	'text!templates/EditUserProductsCollectionViewTpl.tpl',
	'views/EditUserProductsView'
], function ($, _, Backbone, EditUserProductsCollectionViewTpl, EditUserProductsView) {
	'use strict';

	var EditUserProductsCollectionView = Backbone.View.extend({
		template: _.template(EditUserProductsCollectionViewTpl),

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
			//console.log(item,"ataching");
			var childView = new EditUserProductsView({model: item});
			childView.render();
		}
	});

	return EditUserProductsCollectionView;
});
