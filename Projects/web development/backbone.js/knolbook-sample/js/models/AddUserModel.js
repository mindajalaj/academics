/**
 * @author: jalaj
 * @since: 24/02/2015@12:43:01
 * @file: AddUserModel.js
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
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var AddUserModel = Backbone.Model.extend({
		urlRoot: 'api/public/contacts',

		initialize: function() {
		},

		defaults: {
			
			usersFName: "",
			usersLName:"",
			usersCity:"",
			usersState:"",
			usersCountry:"",
			usersDob:"",
			usersDesignation:"",
			usersEmail:"",
			usersRoleId:"",
			usersModeId:"",
			usersDeptId:"",
			usersManagedBy:"",
			usersGender:"",
			usersPic:"",
			usersDoj:"",
			usersSocialLinks:[
			                   {socialFb:"",
			                   socialTwitter:"",
			                   socialGoogle:"",
			                   socialLinkedin:""}
			                   ],
			usersPhoneNumbers:"",
			products:""
		},

		validate: function(attrs, options) {
			
			/*if(attrs.usersPhoneNumbers[0]["phoneNumber"] ){ 
				if(	isNaN(attrs.usersPhoneNumbers[0]["phoneNumber"])){
					return "enter valid home number";
				}
				else if(attrs.usersPhoneNumbers[0]["phoneNumber"].length>10 || attrs.usersPhoneNumbers[0]["phoneNumber"]<8){
					return "enter home number with 8-10 digits only";
				}
			}
			
			if(attrs.usersPhoneNumbers[2]["phoneNumber"] ){ 
				if(	isNaN(attrs.usersPhoneNumbers[2]["phoneNumber"])){
					return "enter valid personal number";
				}
				else if(attrs.usersPhoneNumbers[2]["phoneNumber"].length>10 || attrs.usersPhoneNumbers[2]["phoneNumber"]<8){
					return "enter personal number with 8-10 digits only";
				}
			}
			if(	isNaN(attrs.usersPhoneNumbers[1]["phoneNumber"])){
					return "enter valid work number";
				
			}
			else if(attrs.usersPhoneNumbers[1]["phoneNumber"].length>10 || attrs.usersPhoneNumbers[1]["phoneNumber"]<8){
					return "enter work number with 8-10 digits only";
			}*/
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
			if(!attrs.usersEmail.match(mailformat))  
			{  
				return "enter valid email";
			}  
			var letters = /^[A-Za-z]+ ?[A-Za-z]+$/;
      		if(!attrs.usersFName.match(letters))
      		{
      			return "enter valid first name";
      		} 
      		if(!attrs.usersLName.match(letters))
      		{
      			return "enter valid last name";
      		} 
      		if(!attrs.usersManagedBy.match(letters))
      		{
      			return "enter valid managers name";
      		}
      		if(!attrs.usersDesignation.match(letters))
      		{
      			return "enter valid designation";
      		}
      		if(!attrs.usersState.match(letters))
      		{
      			return "enter valid state name";
      		}
      		if(!attrs.usersCity.match(letters))
      		{
      			return "enter valid city name";
      		}
      		if(!attrs.usersCountry.match(letters))
      		{
      			return "enter valid usersCountry name";
      		}
      		return false;

		},

		parse: function(response, options)  {
			return response;
		}
	});

	return AddUserModel;
});
