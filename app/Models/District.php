<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    protected $table = 'districts';

    protected $guarded = [];

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }
}