/**
 * @author: jalaj
 * @since: 22/02/2015@23:01:30
 * @file: KnolbookRouter.js
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
	'views/BasicView',
	'models/ProfileModel'
], function ($, _, Backbone,BasicView, ProfileModel) {
	'use strict';

	var KnolbookRouter = Backbone.Router.extend({
		routes: {
			"" : 'index',
			"*path" : 'loadBasicView'

		},
		//will set loadedBasicView to true , so that our app loads initial content only once. 
		initialize:function(){
			_.bindAll(this, 'index','startHistory');
			this.loadedBasicView = true;
		},
		//navigate the url to #Knollies....
		index : function(){
			 var userid = prompt('Please enter user id to login', '1');
            
            if(userid ){
                 ProfileModel.set({id: +userid});
                 console.log("user id ",ProfileModel.get('id'));
                 ProfileModel.fetch({
                     success:function(){
                        Backbone.history.navigate('#Knollies',{trigger:true});
                     }
                 });
            }
			
			
		},
		//begin the execution of app...
		startHistory:function(){
			console.log("inside router");
			Backbone.history.start();
		},
		//calls render function of basic view to attach it to dom
		loadBasicView:function(path){
			if(this.loadedBasicView){
				this.basicView = this.basicView||new BasicView();
				this.loadedBasicView=false;
			}
			this.basicView.render($('.front-end'),path);
		}

	});

	return KnolbookRouter;
});
