<?php

namespace App\Http\Controllers;

use App\Models\User\UserDetails;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class SystemController extends Controller
{
    public function initRolePermissions(Request $request)
    {
        // Creating Admin
        $admin = User::create([
            'username' => 'admin',
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'phone_number' => '03000000001',
            'password' => Hash::make('123456'),
            'role' => 'admin',
        ]);

        // Creating buyer
        $buyer = User::create([
            'username' => 'buyer',
            'name' => 'buyer',
            'email' => 'buyer@demo.com',
            'phone_number' => '03000000002',
            'password' => Hash::make('123456'),
            'role' => 'buyer',
        ]);

        // Creating seller
        $seller = User::create([
            'username' => 'seller',
            'name' => 'seller',
            'email' => 'seller@demo.com',
            'phone_number' => '03000000003',
            'password' => Hash::make('123456'),
            'role' => 'seller',
        ]);

        // creating demo user 1 (ahsan1)
        $ahsan1 = User::create([
            'username' => 'ahsan1',
            'name' => 'ahsan1',
            'email' => 'ahsan1@demo.com',
            'phone_number' => '03000000004',
            'password' => Hash::make('123456'),
            'role' => 'buyer',
        ]);

        // creating demo user 2 (ahsan2)
        $ahsan2 = User::create([
            'username' => 'ahsan2',
            'name' => 'ahsan2',
            'email' => 'ahsan2@demo.com',
            'phone_number' => '03000000005',
            'password' => Hash::make('123456'),
            'role' => 'seller',
        ]);

        // creating demo user 3 (ahsan3)
        $ahsan3 = User::create([
            'username' => 'ahsan3',
            'name' => 'ahsan3',
            'email' => 'ahsan3@demo.com',
            'phone_number' => '03000000006',
            'password' => Hash::make('123456'),
            'role' => 'seller',
        ]);

        // Roles
        $admin_role = Role::create(['name' => 'admin']);
        $customer_role = Role::create(['name' => 'customer']);

        // Permissions
        // admin panel permissions
        $view_adminPanel_p = Permission::create(['name' => 'view_adminPanel']);
        // simple app related permissions
        $add_user_p = Permission::create(['name' => 'add_user']);
        // AP App setting permissions
        $view_appSetting_p = Permission::create(['name' => 'view_appSetting']);
        $update_appSetting_p = Permission::create(['name' => 'update_appSetting']);

        // Giving Permissions to Roles
        // Admin Role
        $admin_role->givePermissionTo($view_adminPanel_p);
        $admin_role->givePermissionTo($add_user_p);
        $admin_role->givePermissionTo($view_appSetting_p);
        $admin_role->givePermissionTo($update_appSetting_p);

        // Assigning Roles To Users
        $admin->assignRole($admin_role);
        $buyer->assignRole($customer_role);
        $seller->assignRole($customer_role);
        $ahsan1->assignRole($customer_role);
        $ahsan2->assignRole($customer_role);
        $ahsan3->assignRole($customer_role);

        return "roles & permissions successfully initialized.";
    }
}
