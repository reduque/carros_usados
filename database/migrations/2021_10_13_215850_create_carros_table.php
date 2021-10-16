<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carros', function (Blueprint $table) {
            $table->id();
            $table->foreignId('marca_id')->constrained()->onDelete('cascade');
            $table->foreignId('modelo_id')->constrained()->onDelete('cascade');
            $table->smallInteger('ano')->unsigned();
            $table->float('precio')->unsigned()->default(0);
            $table->mediumText('descripcion');

            $table->string('color',50);

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
        Schema::dropIfExists('carros');
    }
}
