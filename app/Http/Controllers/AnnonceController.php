<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class AnnonceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            // $annonce = Annonce::all()->count()/2;
            $annonce = Annonce::all();
            // $halfAnnonce = Annonce::all()->take($annonce);
            return response()->json([
                'success' => true,
                'message' => 'Annonce renvoyé avec succes',
                // 'annonce' => $halfAnnonce,
                'annonce' => $annonce,
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                
                'success' => false,
                'message' => 'Annonce non renvoyé  ',
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
            
            'titre' => 'required',


            'description' => 'required',
            

        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->errors(),
                'message' => 'Erreur de validation des champs',
                'success' => false,
        ]);
        }
        try{
            $input = $request->all();
            $input['uuid'] = Str::uuid();

            if($request->hasFile('image')) {
                $file = $request->file('image');
                $name = $file->getClientOriginalName();
                $file->move(resource_path().'/images/', $name);
                $input['image'] = $name;
            }
            $annonce = Annonce::create($input);
            return response()->json([
                'success' => true,
                'message' => 'Annonce ajouté avec succes',
                'annonce' => $annonce,
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                
                'success' => false,
                'message' => 'Annonce non créé  ',
                'error' => $e->getMessage(),
            ]);
            
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function show(Annonce $annonce , $uuid)
    {
        try {
            $annonce = Annonce::where('uuid', $uuid)->first();
            return response()->json([
                'success' => true,
                'message' => 'Annonce renvoyé avec succes',
                'annonce' => $annonce,
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                
                'success' => false,
                'message' => 'Annonce non renvoyé  ',
                'error' => $e->getMessage(),
            ]);
            
        }
        

        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Annonce $annonce)
    {
        $validator = Validator::make($request->all(), [
                
                'titre' => 'required',
                'description' => 'required',
                'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    
            ]);
            if($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors(),
                    'message' => 'Erreur de validation des champs',
                    'success' => false,
            ]);
            }
            try{
                $input = $request->all();
                if($request->hasFile('image')) {
                    $file = $request->file('image');
                    $name = $file->getClientOriginalName();
                    $file->move(public_path().'/images/', $name);
                    $input['image'] = $name;
                }
                $annonce->update($input);
                return response()->json([
                    'success' => true,
                    'message' => 'Annonce modifié avec succes',
                    'annonce' => $annonce,
                ]);
            }
           
            catch(Exception $e) {
                return response()->json([
                    
                    'success' => false,
                    'message' => 'Annonce non modifié  ',
                    'error' => $e->getMessage(),
                ]);
                
            }
            
      
    
     
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Annonce  $annonce
     * @return \Illuminate\Http\Response
     */
    public function destroy(Annonce $annonce)
    {
        try{
            $annonce->delete();
            return response()->json([
                'success' => true,
                'message' => 'Annonce supprimé avec succes',
                
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                
                'success' => false,
                'message' => 'Annonce non supprimé  ',
                'error' => $e->getMessage(),
            ]);
            
        }
        
    }
  
    
    public function getHalfAnnonce()
    {
        try{
            $annonce = Annonce::all();
            $half = $annonce->count()/2;

            return response()->json([
                'success' => true,
               
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                
                'success' => false,
                'message' => 'Annonce non renvoyé  ',
                'error' => $e->getMessage(),
            ]);
            
        }
        
    }
}
