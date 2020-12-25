<?php

namespace App\Listeners\User;

use App\Events\User\UserCreatedEvent;
use App\Models\User\UserDetails;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Spatie\Permission\Models\Role;

class UserCreatedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(UserCreatedEvent $event)
    {
        // making a userdetails row on new user creation
        UserDetails::create([
            'user_id' => $event->user->id
        ]);

        $customer_role = Role::where('name', 'customer')->first();

        $event->user->assignRole($customer_role);
    }
}
