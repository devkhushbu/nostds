<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiagnosticCentre extends Model
{
    protected $table = 'diagnostic_centres';

    protected $guarded = [];

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }
}