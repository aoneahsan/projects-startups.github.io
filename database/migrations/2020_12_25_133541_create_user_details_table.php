<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique();
            $table->string('user_intro')->nullable();
            $table->longText('user_description')->nullable();
            $table->string('user_average_response_time')->nullable();
            $table->longText('user_languages')->nullable();
            $table->longText('user_skills')->nullable();
            $table->longText('user_education')->nullable();
            $table->string('cnic')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->string('cnic_front')->nullable();
            $table->string('cnic_back')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('linkedin_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('github_link')->nullable();
            $table->longText('extra_attributes')->nullable();


            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
