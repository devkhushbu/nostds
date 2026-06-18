<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $table = 'states';

    protected $guarded = [];

        public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }

    public function centers()
    {
        return $this->hasMany(DiagnosticCentre::class);
    }

    public function districts()
    {
        return $this->hasMany(District::class);
    }
}