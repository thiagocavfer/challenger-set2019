<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;


class Medicamento extends Model
{
	public $timestamps = false;

	protected $appends = ['avatar'];

	protected $fillable = ['ggrem','principio_ativo','nome','laboratorio','apresentacao','valor_unitario','estoque_inicial'];

	public function scopeSearch($query, $search)
	{
        $search = trim($search);
        $query->where(function($q) use ($search)
        {
        	$q->where('principio_ativo', 'LIKE', "%$search%");
        	$q->orWhere('nome', 'LIKE', "%$search%");
        	$q->orWhere('laboratorio', 'LIKE', "%$search%");
        });
        return $query;
    }

    public function getAvatarAttribute()
    {
        $matchingFile = searchImage(public_path('storage'), $this->ggrem);
        return url('storage') . '/' . $matchingFile;
    }

}
