/**
 * @author: jalaj
 * @since: 25/02/2015@23:59:11
 * @file: EditUserPhnNumbersCollectionView.js
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
	'text!templates/EditUserPhnNumbersCollectionViewTpl.tpl',
	'views/EditUserPhnNumbersView'
], function ($, _, Backbone, EditUserPhnNumbersCollectionViewTpl, EditUserPhnNumbersView) {
	'use strict';

	var EditUserPhnNumbersCollectionView = Backbone.View.extend({
		template: _.template(EditUserPhnNumbersCollectionViewTpl),

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

		render: function () {
			//this.$el.html(this.template());
			$('.edit-user-phn').html("");
			console.log(this.collection,$('.edit-user-phn'),"insided render of phn colllllll");
			this.collection.forEach(this.addItemView, this);
			return this;
		},

		addItemView: function(item) {
			var childView = new EditUserPhnNumbersView({model: item});
			this.$el.append(childView.render().el);
		}
	});

	return EditUserPhnNumbersCollectionView;
});
