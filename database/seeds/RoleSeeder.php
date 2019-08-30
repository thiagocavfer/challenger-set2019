<?php

use Illuminate\Database\Seeder;
use App\Roles;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Roles::create(['id' => 1, 'title' => 'Usuario']);
        Roles::create(['id' => 2, 'title' => 'Operador']);
        Roles::create(['id' => 3, 'title' => 'Admin']);

    }
}
