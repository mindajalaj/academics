/**
 * @author: jalaj
 * @since: 25/02/2015@19:44:30
 * @file: EditUserInfoView.js
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
	'text!templates/EditUserInfoTpl.tpl',
	'views/DeptsView',
	'collections/EditUserPhnNumbersCollection',
	'views/EditUserPhnNumbersCollectionView',
	'views/EditUserProductsCollectionView',
	'views/EdituserSocialLinksView',
	'views/ShowEditUserSuccessfulView',
	'views/AddPhoneNumberView',
	'views/ProductsView'
], function ($, _, Backbone, EditUserInfoTpl, DeptsView, EditUserPhnNumbersCollection,EditUserPhnNumbersCollectionView,EditUserProductsCollectionView,EdituserSocialLinksView, ShowEditUserSuccessfulView, AddPhoneNumberView, ProductsView) {
	'use strict';

	var EditUserInfoView = Backbone.View.extend({
		template: _.template(EditUserInfoTpl),

		tagName: 'div',

		id: '',

		className: '',

		events: {
			'click .edit-user' : 'editUserInfo',
			'click .cancel-edit' : 'cancelEdit',
			'click .add-phon':'addPhnNumber'

		},

		initialize: function (options) {
			this.vars = options;
			_.bindAll(this, 'render','success_callback','error_callback');
			this.listenTo(this.model,'invalid',this.invalidInput);

		},

		render: function () {
			/*this.$el.empty();
		    this.subView.delegateEvents();
		    this.$el.append( this.subView.render().el );*/
		    this.$el.html(this.template(this.model.toJSON()));
				console.log(this.model);
			
			//$('.userDetails').append(this.template(this.model.toJSON()));
			this.dept = this.dept || new DeptsView();
			//$('.depts').html("");console.log("inside add user render view..");
			// showing div at different places based on width of screen...................
			var windowsize = $(window).width();
			
			console.log("here is the widht of wondow...",windowsize);
			if (windowsize <767) {
				
				//$('.users').html(this.el) ;	
				$('.users-mobile').html(this.el) ;
				$('.users-mobile').css('display','block');	
				$('.users').css('display','none');
			}
			else{
				$('.userDetails').html(this.el) ;
			
			}
			//$('.userDetails').html(this.el) ;  
			
			//.............................................................................
			//console.log(this.model.get('userDepartment'),"this belongs to user dude");
			this.dept.render();
			this.attachPhnNumber();
			this.attachProducts();
			this.attachSocialLinks();
		},
		attachPhnNumber: function(){
			console.log("creating obj for phn collll.......");
			this.phnCollectionView = this.phnCollectionView || new EditUserPhnNumbersCollectionView({
				collection:this.model.get("phoneNumbers")
			});
			$('.edit-user-phn').html(this.phnCollectionView.render().el);
		},
		attachProducts : function(){

			this.prods = this.prods || new ProductsView();
			$('.my-prods').html("");
			
			this.prodCollectionView = this.prodCollectionView || new EditUserProductsCollectionView({
				collection:this.model.get("products")
			}); 
			this.prodCollectionView.render();
			this.prods.renderEdit(this.model.get("products"));

		},
		attachSocialLinks : function(){
			this.socialLinksView = this.socialLinksView || new EdituserSocialLinksView({
				model : this.model.get("socialLinks")
			});
			this.socialLinksView.render();
		},
		cancelEdit:function(){
			console.log("inside  cancel...");
			Backbone.history.navigate('#Knollies/'+this.model.get("userId"),{trigger:true});
			
		},
		addPhnNumber:function(e){
			e.preventDefault();
			console.log("adding a number....");
			console.log($('input[name=newphoneNumber]').val(),$('input[name=newphoneNumber]').val().length,"valid");
			if(!isNaN($('input[name=newphoneNumber]').val()) && ($('input[name=newphoneNumber]').val().length>=8 && $('input[name=newphoneNumber]').val().length<=10)){
					$('.error-phn').html('');	
					this.addPhnNumberView = new AddPhoneNumberView();
					$('.edit-user-phn').append(this.addPhnNumberView.render($('.phn-phn').val(),$('input[name=newphoneNumber]').val()).el);
					$('input[name=newphoneNumber]').val('');
			}
			else{
				$('.error-phn').html("enter a valid 8-10 digit");
			}
		},
		editUserInfo:function(){
			console.log("inside edit..")
			
			this.usersFName = $('input[name=usersFName]').val();
			this.usersLName = $('input[name=usersLName]').val();
			/*var usersPhonenumberH = $('input[name=phoneNumberH]').val();
			var usersPhonenumberW = $('input[name=phoneNumberW]').val();
			var usersPhonenumberP = $('input[name=phoneNumberP]').val();
			*/this.usersGoogle = $('input[name=google]').val();
			this.usersTwitter = $('input[name=twitter]').val();
			this.usersFb = $('input[name=fb]').val();
			this.usersLinkedin = $('input[name=linked-in]').val();
			this.usersDesignation = $('input[name=designation]').val();
			this.usersEmail = $('input[name=email]').val();
			this.usersManagedBy = $('input[name=manager]').val();
			this.usersDept = $('.dept-value').val();
			this.usersGender = $('input[name=usersGender]').val();
			this.usersDob = $('input[name=usersDob]').val();
			this.usersDoj = $('input[name=usersDoj]').val();
			this.usersState = $('input[name=state]').val();
			this.usersCity = $('input[name=usersCity]').val();
			this.usersCountry = $('input[name=usersCountry]').val();
			this.userProd = []; 
					$('.my-prods :selected').each(_.bind(function(i, selected){ 
					  this.userProd[i] = {
					  	"prodMemProductId": +($(selected).val())
					  }; 
					},this));
			console.log(this.userProd,"multiple value...products...");
			console.log($('.edit-user-phn div').length);
			//console.log($('.edit-user-phn input').val());
			
			if(this.usersFName == ''|| this.usersLName== ''|| this.usersDesignation== '' || this.usersEmail == '' || +
				 this.usersDept == '' || this.usersGender == '' || this.usersDoj == '' ){
				
				$('.error').html("PLz fill in required fields..");
			}
			else if(this.usersDept != this.model.get('userDepartment')){
				console.log(this.usersDept,"bla-bla-",this.model.get('userDepartment'),"let us c what this bring upon us..!!!");
				if(confirm("Do you Wish to change your Department?")){
					this.checkPhnNumbers();
				}
				else{
					$('.error').html("PLz select your correct Department.Thank You!");
				}

			}
			else{
						this.checkPhnNumbers();
			}
		},
		checkPhnNumbers:function(){

			var count =0;var recount=0;
			var newnumber=[]; var checkArr=[];
			console.log($('.edit-user-phn input').length);
			$('.edit-user-phn input').each(function(i,obj){
					console.log($(this),obj.value,"assa",obj.name,obj,newnumber);
					//if((newnumber.indexOf(+obj.value)<0) && obj.value ){	  
					console.log((checkArr.indexOf(+obj.value)) ,+obj.value);
					if(!isNaN(+obj.value)  &&  ((checkArr.indexOf(+obj.value)<0) && obj.value) ){	  
					
						  newnumber[count]={
							"phoneNumber":+obj.value,
							"phoneType":obj.name
						};
						checkArr[count]=+obj.value;
						count++;
						recount++;
					}
					else{
						
						recount--;
						//break;
					}
			});
			/*var usersPhonenumber=["","",""];
			//var phnCount = $('.edit-user-phn div').length;
			$(":input.user-phone").each(function(index){
				
				//console.log($(this).val(),usersPhonenumber[index]);
				if($(this).val()!=""){
					usersPhonenumber[index] = $(this).val()||"";
					count=1;
					console.log(usersPhonenumber[index],$(this).val());
				}
			});*/
			console.log(recount,count);
			if(count==0){
				$('.error').html("plz enter atleast one valid number...");
			}
			else if(count != recount){
				$('.error').html("enter 8-10 digit phnoe number. Avoid duplication or empty fields");
			}
			else{
				this.updateInfo(newnumber);
			
			}

		},
		updateInfo: function(newnumber){
			$('.error').html("");
			var	response = {
										"userFName":this.usersFName,
										"userLName":this.usersLName,
										"userCity":this.usersCity,
										"userState":"karnataka",
										"userCountry":this.usersCountry,
										"userDob":this.usersDob,
										"userDesignation":this.usersDesignation,
										"userEmail":this.usersEmail,
										"userRoleId":"1",
										"userModeId":"1",
										"userDeptId":this.usersDept,
										"userManagedBy":this.usersManagedBy,
										"userGender":this.usersGender,
										"userPic":this.model.get('userPic'),
										"userDoj":this.usersDoj,
										"socialLinks":[
										                   {"socialFb":this.usersFb,
										                   "socialTwitter":this.usersTwitter,
										                   "socialGoogle":this.usersGoogle,
										                   "socialLinkedin":this.usersLinkedin}
										                   ],
										"phoneNumbers":newnumber,
										"products":this.userProd
										
										};

					// end of response................
					console.log(response);
					this.sendUserData(response);
		},
		success_callback:function(){
			console.log("sent to server successfully....!!");
			//this.showEditUserSuccessfulView =  new ShowEditUserSuccessfulView();
			//$('.userDetails').html(this.showEditUserSuccessfulView.render().el);
			Backbone.history.navigate('#Knollies/'+this.model.get("userId"),{trigger:true});
			
		},
		error_callback:function(){
			console.log("cant send send to server ....!!");
			$('.error').html("sorry!! server error ! plz try after some time...!!");
		},
		sendUserData:function(response){
			this.model.save(response,{
				success:this.success_callback,
				error : this.error_callback
			});
		},

		invalidInput:function(model,errorQuery){
			console.log("invalid hbj",errorQuery);
			$('.error').html(errorQuery);
		}
		
	});

	return EditUserInfoView;
});
