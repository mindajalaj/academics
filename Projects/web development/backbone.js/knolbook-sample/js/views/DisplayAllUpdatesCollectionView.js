/**
 * @author: jalaj
 * @since: 05/03/2015@22:59:09
 * @file: DisplayAllUpdatesCollectionView.js
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
	'text!templates/DisplayAllUpdatesCollectionViewTpl.tpl',
	'views/DisplayAllUpdatesView'
], function ($, _, Backbone, DisplayAllUpdatesCollectionViewTpl, DisplayAllUpdatesView) {
	'use strict';

	var DisplayAllUpdatesCollectionView = Backbone.View.extend({
		template: _.template(DisplayAllUpdatesCollectionViewTpl),

		tagName: 'div',

		id: '',

		className: 'update-collection panel panel-primary',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render',
				'addItemView');

			this.listenTo(this.collection, 'reset', this.render);
		},

		render: function () {
			this.$el.html(this.template());
			console.log("rendering updates...!!");
			$('.userDetails').html(this.el);
			$('.updates-text').html("");
			this.collection.forEach(this.addItemView, this);
			//return this;
			
		},

		addItemView: function(item) {
			var childView = new DisplayAllUpdatesView({model: item});
			$('.updates-text').append(childView.render().el);
			console.log($('.updates-text'));
			//this.$el.append(childView.render().el);
		}
	});

	return DisplayAllUpdatesCollectionView;
});
