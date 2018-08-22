/**
 * @author: jalaj
 *
 * @since: 22/02/2015 @ 22:09:54
 * @file: main.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 * FILE DESCRIPTION
 *
 **/
'use strict';

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: [
				'jquery'
			],
			exports: 'Bootstrap'
		},
		'bootstrap-select': {
			deps: [
				'bootstrap',
				'jquery'
			],
			exports: 'bootstrap-select'
		}
	},
	paths: {
		jquery: '../com/vendor/jquery/dist/jquery',
		backbone: '../com/vendor/backbone/backbone',
		underscore: '../com/vendor/underscore/underscore',
		bootstrap: '../com/vendor/bootstrap/dist/js/bootstrap',
		json2: '../com/vendor/json2/json2',
		modernizr: '../com/vendor/modernizr/modernizr',
		requirejs: '../com/vendor/requirejs/require',
		text: '../com/vendor/text/text',
		'bootstrap-select': '../com/vendor/bootstrap-select/dist/js/bootstrap-select'
	},
	packages: [

	]
});

require([
	'jquery',
	'underscore',
	'backbone',
	'routers/KnolbookRouter',
	'bootstrap',
	'bootstrap-select'
], function ($, _, Backbone,KnolbookRouter,bootstrap,bootstrapSelect) {
	console.log("inside main.js");
	var knolbook = new KnolbookRouter();
	knolbook.startHistory();
// maintain height of the page...................
	/*$('.fullheight').css({ 
		height: $(window).innerHeight() 
	 });
	$(window).resize(function(){
	    $('.fullheight').css({ height: $(window).innerHeight() });
	});*/

// do not refresh on submit..............
	 $("#addAUser").submit(function(e) {
	    e.preventDefault();
	    console.log("prevent....click");
	});
			

});
