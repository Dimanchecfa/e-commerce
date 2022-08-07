<?php

namespace App\Http\Controllers;

use App\Models\PasswordReset;
use App\Models\User;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->errors(),
                'message' => 'Erreur de validation des champs',
                'success' => false
        ], 401);
        }
        try {
          if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = Str::random(50);
            $userData = [
                'uuid' => $user->uuid,                   
                'first_name' => $user->firstname,
                'last_name' => $user->lastname,
                'email' => $user->email,
                'role' => $user->role,
                'premium' => $user->premium,
                
            ];
            return response()->json([
                'token' => $token,
                'user' => $userData,
                'success' => true,
                'message' => 'success',
            ], 200);
          } else {

            return response()->json([
                'message' => 'Mot de passe ou email incorrect',
                'success' => false,
            ], 401);
          }
        }
        catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de connexion',
                'error' => $e->getMessage(),
            ]);
        }

        
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'ConfirmPassword' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->errors(),
                'message' => 'Erreur de validation des champs',
                'success' => false
        ], 401);
        }
        try {
          $input = $request->all();
          $input['password'] = Hash::make($input['password']);
          $input['uuid'] = Str::uuid();
          $user = User::create($input);
          

          return response()->json([
              
              'success' => true,
              'message' => 'Utilisateur créé avec succès',
                'user' => $user
              
          ]);


          


        }
        catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de création de l\'utilisateur',
                'error' => $e->getMessage()
            ]);
        }
       
    }

    public function resetPassword(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if($validator->fails()) {
            return response()->json([
                'error' => $validator->errors(),
                'message' => 'Erreur de validation des champs',
                'success' => false
        ], 401);
        }
        try 
        {
            $user = User::where('email', $request->email)->first();
           if(!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email inconnu',
                
            ]);
              }
           $input = $request->all();
           $input['token'] = Str::uuid();
           PasswordReset::create($input);

           return response()->json([
            
            'success' => true,
            'message' => 'Mot de passe réinitialisé avec succès',
            'token' => $input['token'],


            ], );
        }
        catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur de réinitialisation du mot de passe',
                'error' => $e->getMessage(),
            ]);
        
        }
    }



    
}
