<?php

use Illuminate\Database\Seeder;
use App\Models\Pedidos\Carrinho;
use App\User;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
       $user= User::create([
            'id'=> 1,
            'email' => 'user@teste.com',
            'name' => 'Test-User',
            'role_id' => 1,
            'email_verified_at' => now(),
            'password' =>  bcrypt('123456'),
            'api_token' => Str::random(60)
        ]);
        $user->carrinho()->save((new Carrinho()));

        
        $user2 = User::create([
            'id' => 2,
            'email' => 'user2@teste.com',
            'name' => 'Test-User 2',
            'role_id' => 1,
            'email_verified_at' => now(),
            'password' =>  bcrypt('123456'),
            'api_token' => Str::random(60)
        ]);
        $user2->carrinho()->save((new Carrinho()));


        factory(App\User::class, 10)->create()->each(function ($user) {

            $user->carrinho()->save((new Carrinho()));
            $user->pedidos()->save(factory(App\Models\Pedidos\Pedido::class)->make());

        });

    }
}
