<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::fallback(function (Request $request) {
//
//
//    return view('welcome', [
//        'shop' => $request->shop,
//        'host' => $request->host,
//        'apiKey' => env('APP_API_KEY'),
//
//    ]);
////    return view('welcome');
//})->middleware(['verify.shopify','billable']);




Route::get('/', function (Request $request) {


    return view('welcome', [
        'shop' => \Illuminate\Support\Facades\Auth::user()->name,
        'host' => $request->host,
        'apiKey' => env('APP_API_KEY'),

    ]);

})->middleware(['verify.shopify','billable'])->name('home');
Route::get('/templates', function (Request $request) {


    return view('welcome', [
        'shop' => $request->shop,
        'host' => $request->host,
        'apiKey' => env('APP_API_KEY'),

    ]);

//})->middleware(['verify.shopify','billable'])->name('home');
})->middleware(['verify.shopify','billable']);


Route::get('/billing/manual/process/{plan?}', [\App\Http\Controllers\ProductController::class,'billing_manual_process']);

Route::get('/test', [\App\Http\Controllers\ProductController::class,'MonthlyCharge']);
Route::get('/testing', function() {


    $shop=\App\Models\User::where('name','tlx-abdullah.myshopify.com')->first();

    $response = $shop->api()->rest('GET', '/admin/webhooks.json');

    dd($response);
})->name('getwebbhook');

Route::get('/webhooks/product-update', function() {


  return true;
});

Route::get('/update-count',[App\Http\Controllers\ProductController::class,'UpdateCount']);
