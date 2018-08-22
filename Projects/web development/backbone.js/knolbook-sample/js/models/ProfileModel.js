/**
 * @author: jalaj
 * @since: 05/03/2015@10:37:08
 * @file: ProfileModel.js
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

	var ProfileModel = Backbone.Model.extend({
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
		},

		parse: function(response, options)  {
			return response;
		}
	});

	return new ProfileModel();
});
