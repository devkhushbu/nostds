<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\DiagnosticCentre;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $request->validate([
            'category' => 'required',
            'state' => 'required'
        ]);

        switch ($request->category) {

            case 'doctors':

                $data = Doctor::where(
                    'state_id',
                    $request->state
                )->paginate(10);

                break;

            case 'centers':

                $data = DiagnosticCentre::where(
                    'state_id',
                    $request->state
                )->paginate(10);

                break;

            case 'venerologist':

                $data = Doctor::where('state_id', $request->state)
                    ->where('specialization', 'LIKE', '%VENEREOLOGIST%')
                    ->paginate(10);

                break;

            case 'dermatologist':

                $data = Doctor::where('state_id', $request->state)
                    ->where('specialization', 'LIKE', '%DERMATOLOGIST%')
                    ->paginate(10);

                break;

            default:

                return response()->json([
                    'success' => false,
                    'message' => 'Invalid category'
                ], 400);
        }

        return response()->json([
            'success' => true,
            'category' => $request->category,
            'data' => $data
        ]);
    }
}
