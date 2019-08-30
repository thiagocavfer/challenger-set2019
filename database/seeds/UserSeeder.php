<?php

use Illuminate\Database\Seeder;
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
        User::create([
            'id'=> 1,
            'email' => 'user@teste.com',
            'name' => 'Test-User',
            'role_id' => 1,
            'email_verified_at' => now(),
            'password' =>  bcrypt('test@user')
        ]);

        factory(App\User::class, 10)->create()->each(function ($user) {

           
            $user->pedidos()->save(factory(App\Models\Pedidos\Pedido::class)->make());

        });

    }
}
