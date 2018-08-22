/**
 * @author: jalaj
 * @since: 23/02/2015@02:25:07
 * @file: UsersListCollection.js
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
	'models/UsersListModel'
], function ($, _, Backbone, UsersListModel) {
	'use strict';

	var UsersListCollection = Backbone.Collection.extend({
		
		model: UsersListModel,

		url: 'api/public/contacts',

		strategies: {
	        firstName : function (item) { return item.get("userFName"); }, 
	    	lastName :  function (item) { return item.get("userLName"); },
	    	dept : function(item){ return [item.get("userDepartment"), item.get("userFName")]}
    	},
   		changeSort: function (sortProperty) {
     		this.comparator = this.strategies[sortProperty];
    	},
    	/*byText: function(textQuery) {
		    filtered = this.filter(function(model) {
		      	return model.get("userId").toLowerCase().indexOf(textQuery.toLowerCase()) ===0;
      		}
      		return  new UsersListCollection(filtered);
      	}*/
	});

	return UsersListCollection;
});
