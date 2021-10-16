@extends('layouts.front')

@section('content')
<div class="internas">
    <h1>Ha ocurrido un error</h1>
    <p>Pasó mucho tiempo y su información se ha perdido</p>
    <p>
        <a href="{{ route('home') }}" class="amarillo">Ir a la página de incio</a>
    </p>
</div>
@endsection
