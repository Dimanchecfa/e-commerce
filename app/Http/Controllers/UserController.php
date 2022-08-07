<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $user = User::all();
            return response()->json([
                'success' => true,
                'message' => 'Utilisateur renvoyé avec succes',
                'user' => $user,
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                
                'success' => false,
                'message' => 'Utilisateur non renvoyé  ',
                'error' => $e->getMessage(),
            ]);
            
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            'role' => 'required|in:admin,',
            'uuid_admin' => 'required|exists:users,uuid',
            'password' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->errors(),
                'message' => 'Erreur de validation des champs',
                'success' => false,
        ]);
        }
        try{
            $admin = User::where('uuid', $request->uuid_admin)->first();
            if($admin->role != 'admin') {
                return response()->json([
                    'success' => false,
                    'message' => 'L\'utilisateur n\' n\'a pas le droit d\'effectuer cette action',
                ]);
            }
            $input = $request->all();
                $password = Str::random(8);
                $input['email_verified_at'] = now();
                $input['password'] = Hash::make($password);
                $input['uuid'] = Str::random(50);
                $user = User::create($input);

                return response()->json([
                    'success' => true,
                    'message' => 'Utilisateur créé avec succès',
                    'user' => $user,
                    'password' => $password,
                ]);

                
           
        }catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de création de l\'utilisateur',
                'error' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($uuid)
    {
        try {
            $user = User::where('uuid', $uuid)->first();
            return response()->json([
                'success' => true,
                'message' => 'Utilisateur renvoyé avec succes',
                'user' => $user,
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Utilisateur non renvoyé  ',
                'error' => $e->getMessage(),
            ]);
        }
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $uuid)
    {
        try {
            $validator = Validator::make($request->all(), [
                'lastname' => 'required',
                'firstname' => 'required',
                'email' => 'required|email,',
                'role' => 'required|in:admin,',
                'uuid_admin' => 'required|exists:users,uuid',
                
            ]);
            if($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors(),
                    'message' => 'Erreur de validation des champs',
                    'success' => false,
            ]);
            }
            $admin = User::where('uuid', $request->uuid_admin)->first();
            $user = User::where('uuid', $uuid)->first();
            if($admin->role != 'admin') {
                return response()->json([
                    'success' => false,
                    'message' => 'L\'utilisateur n\' n\'a pas le droit d\'effectuer cette action',
                ]);
            }
            $input = $request->all();
            if($input['email'] == $user->email) {
                $input['email_verified_at'] = $user->email_verified_at;
                $user->update($input);
                return response()->json([
                    'success' => true,
                    'message' => 'Utilisateur mis à jour avec succès',
                    'user' => $user,
                ]);
            }
            else {
                $input['email_verified_at'] = now();
                $user->update($input);
                return response()->json([
                    'success' => true,
                    'message' => 'Utilisateur mis à jour avec succès',
                    'user' => $user,
                ]);
            }

        }
        catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de mise à jour de l\'utilisateur',
                'error' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$uuid)

    {
        try {
            $admin = User::where('uuid', $request->uuid_admin)->first();
            
            if($admin->role != 'admin'  || !$admin) {
                return response()->json([
                    'success' => false,
                    'message' => 'L\'utilisateur n\' n\'a pas le droit d\'effectuer cette action',
                ]);
            }
            $user = User::where('uuid', $uuid)->first();
            $user->delete();
            return response()->json([
                'success' => true,
                'message' => 'Utilisateur supprimé avec succès',
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de suppression de l\'utilisateur',
                'error' => $e->getMessage(),
            ]);
        }
    
        
    }
}
