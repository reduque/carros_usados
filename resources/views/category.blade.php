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
                    <select>
                        <option>Recientes</option>
                        <option>Populares</option>
                        <option>Precio</option>
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
@section('javascript')

@endsection