/**
 * @author: jalaj
 * @since: 03/03/2015@12:21:15
 * @file: ProductsView.js
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
	'text!templates/ProductsTpl.tpl',
	'collections/DisplayAllProductsCollection',
	'views/DisplayAllProductsCollectionView',
	'views/DisplayAllProductsView'
], function ($, _, Backbone, ProductsTpl,DisplayAllProductsCollection,DisplayAllProductsCollectionView,DisplayAllProductsView) {
	'use strict';

	var ProductsView = Backbone.View.extend({
		template: _.template(ProductsTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','success_callback','error_callback','success_callbackForEditing');
		},
		error_callback:function(){
			console.log("error in fetching the products from the server...");
		},
		success_callback:function(){
			console.log("successfully fetched products from serer...");
			this.prodCollectionView.render();
		},
		render: function () {
			
			this.initializeCollections();
			this.prodCollectionView = this.prodCollectionView || new DisplayAllProductsCollectionView({
				collection: this.prodCollection
			});
			this.prodCollection.fetch({
				success:this.success_callback,
				error:this.error_callback
			});
		},
		success_callbackForEditing:function(){
			//console.log("successfully fetched the products",this.prodCollection,this.userProdCollection);
			this.prodCollection.filter(this.searchItem, this);
			//console.log(this.prodCollection,fil,"after removing...!!");
		},
		//here we eliminate those products in which user is invoved in from the total available products
		searchItem:function(item){
			console.log(item.get("productId"));
			var addModel = this.userProdCollection.find(function(model){ 
				if( model.get("productId")===item.get("productId")){
					console.log("found");
					return true;
				} 
				else{
					return false;}
			});
			/*var addModel = _.find(this.userProdCollection, function(model){ 
				return model.get("productId")===item.get("productId"); 
			});*/
			console.log("inside search.....",addModel);
			if(!addModel){
				console.log(item,"inside");
				var childView = new DisplayAllProductsView({model: item});
			
				childView.render();
				//this.prodCollection.remove(item);
			}

		},
		renderEdit: function(userProd){

			console.log(userProd,"inside render edit...");
			this.userProdCollection = userProd;
			this.initializeCollections();
			this.prodCollection.fetch({
				success:this.success_callbackForEditing,
				error:this.error_callback
			});

		},
		initializeCollections:function(){
			this.prodCollection = this.prodCollection || new DisplayAllProductsCollection();
			
		}
	});

	return ProductsView;
});
