<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StateController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\DoctorController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (\Illuminate\Http\Request $request) {
        return $request->user();
    });
});

Route::get('/states', [StateController::class, 'index']);

Route::get('/search', [SearchController::class, 'search']);

Route::get('/doctors/{stateId}', [DoctorController::class, 'index']);