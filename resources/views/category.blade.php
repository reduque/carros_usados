@extends('layouts.front')

@section('css')

@endsection

@section('content')
<section class="cu-category">
    <div class="cu-container cu-container--category">
        <div class="cu-category__header">
            <div class="cu-category__header__left">
                <h4>Ordenar por</h4>
                <div class="cu-select">
                    <select name="ordenamiento" class="ordenamiento">
                        <option value="recientes" @if(session('ordenamiento')=='recientes') selected @endif >Recientes</option>
                        <option value="precio" @if(session('ordenamiento')=='precio') selected @endif >Precio</option>
                    </select>
                </div>
            </div>
            <div class="cu-category__header__search">
                @include('partials._search_form')
            </div>
            <p class="cu-category__header__counter">Mostrando <span>{{$carros->firstItem() . ' - ' . $carros->lastItem()}}</span> de <span>{{ $carros->total() }}</span></p>
        </div>
        <div class="cu-category__content">
            <div class="cu-category__content__grid">
            @foreach($carros as $carro_p)
                @include('partials._car_card')
            @endforeach
            </div>
            <div>
                {{$carros->withQueryString()->links() }}
            </div>
            {{--
           <button class="cu-more">Cargar más</button>
           --}}
        </div>
    </div>
</section>
@endsection
@section('scripts')
<?php
    $url=route('category');
    $u='?';
    foreach(request()->except('page','ordenamiento') as $key => $item){
        $url .= $u . $key . '=' . $item;
        $u='&';
    }
?>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script>
    $(document).ready(function(){
        $('.ordenamiento').change(function(){
            document.location='{!! $url . $u !!}ordenamiento=' + $(this).val();
        })
    })
</script>


@endsection