/**
 * @author: jalaj
 * @since: 25/02/2015@10:47:55
 * @file: DisplayUserPhnNumbersCollectionView.js
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
	'text!templates/DisplayUserPhnNumbersCollectionViewTpl.tpl',
	'views/DisplayUserPhnNumbersView'
], function ($, _, Backbone, DisplayUserPhnNumbersCollectionViewTpl, DisplayUserPhnNumbersView) {
	'use strict';

	var DisplayUserPhnNumbersCollectionView = Backbone.View.extend({
		template: _.template(DisplayUserPhnNumbersCollectionViewTpl),

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
			$('.display-user-phn').html("");
			console.log("inside render of phn collll");
			console.log(this.collection);
			this.collection.forEach(this.addItemView, this);
			

		},

		addItemView: function(item) {
			console.log("adding phn number to render...");
			var childView = new DisplayUserPhnNumbersView({model: item});
			childView.render();
		}
	});

	return DisplayUserPhnNumbersCollectionView;
});
