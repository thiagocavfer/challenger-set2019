<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Medicine extends Model
{
    /**
     * Procura por imagens de avatar na storage.
     *
     * @return string
     */
    public function getAvatarAttribute() : string
    {
        $fileFormats = ['.jpg', '.png'];
        foreach ($fileFormats as $fileFormat) {
            if (Storage::disk('public')->exists($this->ggrem . $fileFormat)) {
                return $this->ggrem . $fileFormat;
            }
        }
        
        return '';
    }
}
