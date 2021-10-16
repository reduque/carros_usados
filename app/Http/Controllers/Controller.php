<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;



    public function saveFile($file, $path, $fileName = "", $extension="")
    {
        if ($file) {
            $foto = json_decode($file);
            if($extension=="") list(,$extension) = explode('/', $foto->output->type);
            $picture = $foto->output->image;
            $fileName= $fileName . "." . $extension;
            $filepath = $path . $fileName;
            $Base64Img=$picture;
            list(, $Base64Img) = explode(';', $Base64Img);
            list(, $Base64Img) = explode(',', $Base64Img);
            $image = base64_decode($Base64Img);
            $filepath = 'uploads/' . $filepath;
            file_put_contents($filepath, $image);
        }
        return $fileName;
    }

    public function saveFile2($file, $path, $fileName = "", $extension="")
    {
        if ($file) {
            if($extension=="") $extension=$file->getClientOriginalExtension();
            $fileName= $fileName . "." . $extension;
            $file->storeAs($path, $fileName ,'public_html');
        }
        return $fileName;
    }

    public function deleteFile($file)
    {
        try {
            if($file<>'') if(file_exists('uploads/' . $file)){
                unlink('uploads/' . $file);
            }
        } catch (\Exception $e) {
            \Log::info('Error creating item: ' . $e);
        }
    }


}
