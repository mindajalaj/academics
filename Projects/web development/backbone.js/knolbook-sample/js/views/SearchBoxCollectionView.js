/**
 * @author: jalaj
 * @since: 26/02/2015@11:14:36
 * @file: SearchBoxCollectionView.js
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
	'text!templates/SearchBoxCollectionViewTpl.tpl',
	'views/SearchBoxView'
], function ($, _, Backbone, SearchBoxCollectionViewTpl, SearchBoxView) {
	'use strict';

	var SearchBoxCollectionView = Backbone.View.extend({
		template: _.template(SearchBoxCollectionViewTpl),

		tagName: 'div',

		id: '',

		className: 'list-group no-margin',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render',
				'addItemView');

		//this.listenTo(this.collection, 'add', this.render);
		//this.listenTo(this.collection,'remove',this.render);
		},

		render: function () {
			console.log(this.el,"el for search collection...");
			console.log(this.collection,"inside");
			this.$el.html(this.template());
			this.collection.forEach(this.addItemView, this);
			return this;
		},

		addItemView: function(item) {
			var childView = new SearchBoxView({model: item});
			this.$el.append(childView.render().el);
			console.log(this.el);
			//console.log("sds");
		}
	});

	return SearchBoxCollectionView;
});
