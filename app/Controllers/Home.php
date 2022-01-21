<?php

namespace App\Controllers;

use App\Models\WartegModel;

class Home extends BaseController
{
    public function index()
    { 
        return view('frontend/index');       
    }
}
