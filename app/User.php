<?php

namespace App;

use App\Models\Pedidos\Pedido;
use App\Models\Pedidos\Carrinho;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;



class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];




    public function pedidos(){
         return $this->hasMany(Pedido::class);
    }


    public function carrinho(){
        return $this->hasOne(Carrinho::class);
    }


    public function roles()
    {
        return $this->belongsToMany(Roles::class);
    }


}
