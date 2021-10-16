@extends('layouts.front')

@section('content')
    <div class="banners_home2">
        <div class="contenedor">
        @foreach ($banners as $banner)
            <div class="item">
            @if ($banner->link<>'')
                <a href="{{ $banner->link }}" target="_blank"><img src="uploads/banners/{{ $banner->img }}" alt="{{ $banner->title }}"></a>
            @else
                <img src="uploads/banners/{{ $banner->img }}" alt="{{ $banner->title }}">
            @endif
            </div>
        </div>
    @endforeach
    </div>
    <div class="cuerpo">
        <div class="info_home">
            <article>
                <img src="img/gluten.svg" alt="Libre de gluten">
                <h2>Libre de gluten</h2>
            </article>
            <article>
                <img src="img/alemania_diapo.svg" alt="EL verdadero sabor alemán">
                <h2>EL verdadero sabor alemán</h2>
            </article>
            <article>
                <img src="img/carne.svg" alt="Libre de gluten">
                <h2>Producto alto en proteinas</h2>
            </article>
        </div>
        <h2 class="h2home">
            Productos destacados
        </h2>
        <section class="productos_grid productos_grid_home">
            @foreach($productos as $producto)
                @include('partials._card')
            @endforeach
        </section>
    </div>
    <div class="cathomecont">
        <div class="cuerpo">
            <h2 class="h2home">
                Categorías
            </h2>
            <section class="cathome">
            @foreach($categorias as $categoria)
                <div>
                    <a href="{{ route('categoria', $categoria->slug) }}">
                        <h2>{{ $categoria->nombre }}</h2>
                        <img src="uploads/categorias/{{ $categoria->foto }}" alt="">
                        <a href="{{ route('categoria', $categoria->slug) }}" class="vermas">Ver productos</a>
                    </a>
                </div>
            @endforeach
            </section>
        </div>
    </div>

@endsection
@section('javascript')
    <script>
    @if($banners->count()>1)
        var t;
        var act=0;
        const tot={{ $banners->count() }};
        mostrar_banner=function(){
            clearTimeout(t);
            if(act != 0){
                $('.banners_home2 .item:nth-child(' + act + ')').fadeOut(500);
            }
            act++;
            if(act>tot) act=1;
            setTimeout(function(){
                $('.banners_home2 .item:nth-child(' + act + ')').fadeIn(500);
            },500);
            t=setTimeout(mostrar_banner, 5000);
        }
        $(window).load(function(){
            mostrar_banner();
        })
    @else
        $(window).load(function(){
            $('.banners_home2 .item').fadeIn(500);
        });
    @endif
    </script>
@endsection