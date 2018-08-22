/**
 * @author: jalaj
 * @since: 24/02/2015@12:43:37
 * @file: AddUserView.js
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
	'text!templates/AddUserTpl.tpl',
	'views/DeptsView',
	'models/AddUserModel',
	'views/AddUserSuccessfulView',
	'views/AddPhoneNumberView',
	'views/ProductsView'
], function ($, _, Backbone, AddUserTpl, DeptsView, AddUserModel, AddUserSuccessfulView,AddPhoneNumberView,ProductsView) {
	'use strict';

	var AddUserView = Backbone.View.extend({
		template: _.template(AddUserTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .add-user' : 'addUser',
			'click .add-phn':'addPhnNumber'
			
		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','success_callback','error_callback');
			this.listenTo(this.model,'invalid',this.invalidInput);
			
		},
		//display the form to add new user
		render: function () {
			this.$el.html(this.template());
			var windowsize = $(window).width();
			if (windowsize <767) {
				
				$('.users-mobile').html(this.el) ;
				$('.users-mobile').css('display','block');	
				$('.users').css('display','none');
			}
			else{
			$('.userDetails').html(this.el);
			}
			this.dept = this.dept || new DeptsView();
			$('.depts').html("");console.log("inside add user render view..");
			this.dept.render();
			this.prods = this.prods || new ProductsView();
			$('.my-prods').html("");
			this.prods.render();
			console.log($('input[name=usersFName]').val(),"input value..");
		},
		//add a new phone number to ui 
		addPhnNumber: function(e){
			e.preventDefault();
			console.log("adding a number....");console.log($('input[name=newphoneNumber]').val(),$('input[name=newphoneNumber]').val().length,"valid");
			if(!isNaN($('input[name=newphoneNumber]').val()) && ($('input[name=newphoneNumber]').val().length>=8 && $('input[name=newphoneNumber]').val().length<=10)){
					$('.error-phn').html('');	
					this.addPhnNumberView = new AddPhoneNumberView();
					$('.my-phnNumbers').append(this.addPhnNumberView.render($('.phn-phn').val(),$('input[name=newphoneNumber]').val()).el);
					$('input[name=newphoneNumber]').val('');
			}
			else{
				$('.error-phn').html("enter a valid 8-10 digit");
			}

			

		},
		//get all the values from input field , do some basic validation apart from that in model,
		//now get all the phone numbers and put it into array
		//create response of the data available 
		addUser:function(){

			var usersFName = $('input[name=usersFName]').val().toLowerCase();
			var usersLName = $('input[name=usersLName]').val().toLowerCase();
			//var usersPhonenumberH = $('input[name=phoneNumberH]').val();
			var usersPhonenumberW = $('input[name=phoneNumberW]').val();
			var usersPhonenumberP = $('input[name=phoneNumberP]').val();
			var usersGoogle = $('input[name=google]').val();
			var usersTwitter = $('input[name=twitter]').val();
			var usersFb = $('input[name=fb]').val();
			var usersLinkedin = $('input[name=linked-in]').val();
			var usersDesignation = $('input[name=designation]').val().toLowerCase();
			var usersEmail = $('input[name=email]').val();
			var usersManagedBy = $('input[name=manager]').val().toLowerCase();
			var usersDept = $('.dept-value').val().toLowerCase();
			var usersGender = $('input[name=usersGender]').val();
			var usersDob = $('input[name=usersDob]').val();
			var usersDoj = $('input[name=usersDoj]').val();
			var usersState = $('input[name=state]').val().toLowerCase();
			var usersCity = $('input[name=usersCity]').val().toLowerCase();
			var usersCountry = $('input[name=usersCountry]').val().toLowerCase();
			 this.userProd = []; 
					$('.my-prods :selected').each(_.bind(function(i, selected){ 
					  this.userProd[i] = {
					  	"prodMemProductId": +($(selected).val())
					  }; 
					},this));
					console.log(this.userProd,"multiple value...products...");
			console.log(usersFName,usersLName,usersPhonenumberW,"data fo the form...");
			

			if(usersFName == ''|| usersLName== ''|| usersDesignation== '' || usersEmail == '' || usersPhonenumberW == '' || +
				usersManagedBy == '' || usersDept == '' || usersGender == '' || usersDoj == '' ){

				//$('.error').html("");
				$('.error').html("PLz fill in required fields..");


			}
			else if(isNaN(usersPhonenumberW)){
				$('.error').html("enter valid number");
			}
			else if(usersPhonenumberW.length<8 || usersPhonenumberW.length>10){
				$('.error').html("enter work number of 8-10 digit");


			}
			else{
					$('.error').html("");
					console.log($('.addedNumber').length);
					var checkArr = [+usersPhonenumberW];
					var newnumber=[
					                   {"phoneNumber":+usersPhonenumberW,
					                   "phoneType":"work"}
				                   ];
				     var count=1;var recount=1;
				     if( usersPhonenumberP ){

						     if( (checkArr.indexOf(+usersPhonenumberP)<0) && !isNaN(usersPhonenumberP) &&
						     	(usersPhonenumberP.length>=8 && usersPhonenumberP.length<=10) )
						     {
						     	newnumber[count]= {"phoneNumber":+usersPhonenumberP,
							                   "phoneType":"personal"};
							    
							    checkArr[count]=+usersPhonenumberP;         
							    count++;recount++;

						     }else{
						     	recount--;
						     }
				    }
					
					$('.addedNumber').each(function(i,obj){

						console.log($(this),+obj.value,"assa",obj.name,obj,checkArr);
						if((checkArr.indexOf(+obj.value)<0) && obj.value ){	
							  newnumber[count]={
								"phoneNumber":+obj.value,
								"phoneType":obj.name
							};
							checkArr[count]=+obj.value;
							count++;recount++;
						}
						else{
							recount -- ;
						}
					});

					if (count!=recount) {
							$('.error').html("enter phone number of 8-10 digits! Avoid duplication ");
					}
					else{
						var	response = {
										"usersFName":usersFName,
										"usersLName":usersLName,
										"usersCity":usersCity,
										"usersState":usersState,
										"usersCountry":usersCountry,
										"usersDob":usersDob,
										"usersDesignation":usersDesignation,
										"usersEmail":usersEmail,
										"usersRoleId":"1",
										"usersModeId":"1",
										"usersDeptId":usersDept,
										"usersManagedBy":usersManagedBy,
										"usersGender":usersGender,
										"usersPic":"assets/images/user3.jpg",
										"usersDoj":usersDoj,
										"usersSocialLinks":[
										                   {"socialFb":usersFb,
										                   "socialTwitter":usersTwitter,
										                   "socialGoogle":usersGoogle,
										                   "socialLinkedin":usersLinkedin}
										                   ],
										"usersPhoneNumbers":newnumber,
										"products":this.userProd
										
										};
						//end of responese.....................................					
						console.log(response);
						//$('.error').html(this.myVali(response));//testing validation...below...!!!
						console.log(response.usersPhoneNumbers[0]["phoneNumber"].length);
						this.sendUserData(response);
					}

			}
			
		},
		success_callback:function(){
			console.log("sent to server successfully....!!");
			this.successView = this.successView || new AddUserSuccessfulView();
			$('.userDetails').html(this.successView.render().el);
		},
		error_callback:function(){
			console.log("cant send send to server ....!!");
			$('.error').html("Server error..try after some time..!!!");
		},
		//do a post request to add new user to database
		sendUserData: function(response){
			console.log("inside sending data function....");
			//this.addUserModel = new AddUserModel();
			
			this.model.save(response,{
				success:this.success_callback,
				error : this.error_callback
			});
			
		},
		//triggered when a user enters invalid input and model validator throws an error
		invalidInput:function(model,errorQuery){
			console.log("invalid hbj",errorQuery);
			$('.error').html(errorQuery);
		}
		/*myVali: function(attrs){
			console.log("inside vandja");
			if(attrs.usersPhoneNumbers[0]["phoneNumber"] ){ 
				if(	isNaN(attrs.usersPhoneNumbers[0]["phoneNumber"])){
					return "enter valid home number"
				}
				else if(attrs.usersPhoneNumbers[0]["phoneNumber"].length>=10 || attrs.usersPhoneNumbers[0]["phoneNumber"]<=8){
					return "enter home number with 8-10 digits only";
				}
			}
			
			if(attrs.usersPhoneNumbers[2]["phoneNumber"] ){ 
				if(	isNaN(attrs.usersPhoneNumbers[2]["phoneNumber"])){
					return "enter valid personal number"
				}
				else if(attrs.usersPhoneNumbers[2]["phoneNumber"].length>10 || attrs.usersPhoneNumbers[2]["phoneNumber"]<8){
					return "enter personal number with 8-10 digits only";
				}
			}
			if(	isNaN(attrs.usersPhoneNumbers[1]["phoneNumber"])){
					return "enter valid work number"
				
			}
			else if(attrs.usersPhoneNumbers[1]["phoneNumber"].length>10 || attrs.usersPhoneNumbers[1]["phoneNumber"]<8){
					return "enter work number with 8-10 digits only";
			}
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
		}
*/
	});

	return AddUserView;
});
