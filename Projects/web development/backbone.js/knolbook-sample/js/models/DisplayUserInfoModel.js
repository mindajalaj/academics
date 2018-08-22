/**
 * @author: jalaj
 * @since: 24/02/2015@08:17:39
 * @file: DisplayUserInfoModel.js
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
	'collections/DisplayUserPhnNumbersCollection',
	'collections/DisplayUserProductsCollection',
	'models/DisplayUserSocialLinksModel'
], function ($, _, Backbone,DisplayUserPhnNumbersCollection,DisplayUserProductsCollection,DisplayUserSocialLinksModel) {
	'use strict';

	var DisplayUserInfoModel = Backbone.Model.extend({
		urlRoot: 'api/public/contacts',

		initialize: function() {
		},

		defaults: {
			userFName: "",
			userLName:"",
			userCity:"",
			userState:"",
			userCountry:"",
			userDob:"",
			userDesignation:"",
			userEmail:"",
			userRoleId:"",
			userModeId:"",
			userDeptId:"",
			userManagedBy:"",
			userGender:"",
			userPic:"",
			userDoj:"",
			userRole:"",
			socialLinks:[
			                   {socialFb:"",
			                   socialTwitter:"",
			                   socialGoogle:"",
			                   socialLinkedin:""}
			                   ],
			phoneNumbers:"",
			products:""
		},
		
		validate: function(attrs, options) {

			/*if(attrs.phoneNumbers[0]["phoneNumber"] ){ 
				if(	isNaN(attrs.phoneNumbers[0]["phoneNumber"])){
					return "enter valid home number";
				}
				else if(attrs.phoneNumbers[0]["phoneNumber"].length>10 || attrs.phoneNumbers[0]["phoneNumber"]<8){
					return "enter home number with 8-10 digits only";
				}
			}
			
			if(attrs.phoneNumbers[2]["phoneNumber"] ){ 
				if(	isNaN(attrs.phoneNumbers[2]["phoneNumber"])){
					return "enter valid personal number";
				}
				else if(attrs.phoneNumbers[2]["phoneNumber"].length>10 || attrs.phoneNumbers[2]["phoneNumber"]<8){
					return "enter personal number with 8-10 digits only";
				}
			}
			if(	isNaN(attrs.phoneNumbers[1]["phoneNumber"])){
					return "enter valid work number";
				
			}
			else if(attrs.phoneNumbers[1]["phoneNumber"].length>10 || attrs.phoneNumbers[1]["phoneNumber"]<8){
					return "enter work number with 8-10 digits only";
			}*/
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
			if(!attrs.userEmail.match(mailformat))  
			{  
				return "enter valid email";
			}  
			var letters = /^[A-Za-z]+ ?[A-Za-z]+$/;
      		if(!attrs.userFName.match(letters))
      		{
      			return "enter valid first name";
      		} 
      		if(!attrs.userLName.match(letters))
      		{
      			return "enter valid last name";
      		} 
      		if(!attrs.userManagedBy.match(letters))
      		{
      			return "enter valid managers name";
      		}
      		if(!attrs.userDesignation.match(letters))
      		{
      			return "enter valid designation";
      		}
      		if(!attrs.userState.match(letters))
      		{
      			return "enter valid state name";
      		}
      		if(!attrs.userCity.match(letters))
      		{
      			return "enter valid city name";
      		}
      		if(!attrs.userCountry.match(letters))
      		{
      			return "enter valid usersCountry name";
      		}
      		return false;

		},

		parse: function(response, options)  {
			
			response.phoneNumbers = new DisplayUserPhnNumbersCollection(response.phoneNumbers);
			response.products = new DisplayUserProductsCollection(response.products);
			
			response.socialLinks = new DisplayUserSocialLinksModel(response.socialLinks);
			
			return response;
		}
	});

	return DisplayUserInfoModel;
});
