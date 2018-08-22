<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/contacts/products','ContactsController@fetchByProducts');
Route::resource('/contacts', 'ContactsController');
//Route::put('/contacts/{id}/update','ContactsController@edit');
Route::get('/updates/{id}','ContactsController@fetchUserUpdates');
Route::get('/updates','ContactsController@fetchAllUpdates');
Route::get('/search/{id}','ContactsController@searchContacts');
Route::get('/departments','ContactsController@fetchAllDepts');
Route::get('/search','ContactsController@searchNumberContacts');
Route::get('/products','ContactsController@getAllProducts');