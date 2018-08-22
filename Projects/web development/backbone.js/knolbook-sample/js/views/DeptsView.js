/**
 * @author: jalaj
 * @since: 24/02/2015@23:26:51
 * @file: DeptsView.js
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
	'text!templates/DeptsTpl.tpl',
	'models/DeptsModel',
	'collections/DepartmentsCollection',
	'views/DepartmentsCollectionView'
], function ($, _, Backbone, DeptsTpl, DeptModel, DepartmentsCollection,DepartmentsCollectionView) {
	'use strict';

	var DeptsView = Backbone.View.extend({
		template: _.template(DeptsTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','success_callback');
		},
		success_callback:function(){
			this.collectionView.render();
		},
		//create a department collection instance and fetches all dept avalable
		render: function () {
			
			this.collection =this.collection || new DepartmentsCollection();
			this.collectionView =this.collectionView || new DepartmentsCollectionView({collection:this.collection});

			this.collection.fetch({
				reset:true,
				success: this.success_callback

			});
			//this.$el.html(this.template(this.model.toJSON()));
			
		}
	});

	return DeptsView;
});
