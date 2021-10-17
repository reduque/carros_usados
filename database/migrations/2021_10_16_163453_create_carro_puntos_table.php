<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarroPuntosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carro_puntos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('carro_id')->constrained()->onDelete('cascade');
            $table->foreignId('punto_id')->constrained()->onDelete('cascade');
            $table->boolean('respuesta');
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
        Schema::dropIfExists('carro_puntos');
    }
}
