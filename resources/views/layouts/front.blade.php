<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">

    <title>@if(View::hasSection('title')) @yield('title') @else {{ config('app.name', 'Laravel') }} @endif </title>
    @if(View::hasSection('keywords'))
        <meta name="keywords" content="@yield('keywords')" />
    @endif
    @if(View::hasSection('description'))
        <meta name="description" content="@yield('description')" />
    @endif


    <meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="{{ asset('/') }}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="css/main.css?v?{{ rand() }}" rel="stylesheet">

    @yield('css')
    
    <!-- IE -->
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    <!-- other browsers -->
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>

<body>
    <header>
        <div class="cintillo">
            <div class="cuerpo">
                <div>
                    <a href="" class="b"><i class="far fa-clock"></i> <span>Lun - Vie: 9:00 am - 5:00 pm</span></a>
                    <a href="tel:+584241521144" class="b"><i class="fas fa-phone-alt"></i><span>0424-1521144</span></a> 
                    <a href="mailto:ventas.corporativas@charcuteriatovar.com.ve"><i class="fas fa-envelope"></i><span>ventas.corporativas@charcuteriatovar.com.ve</span></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/charcuteria.tovar/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/584241521144" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div class="cabecera">
            <div class="cuerpo">
                <div>
                    <a href="{{ route('home') }}" class="logo"></a>
                </div>
                <div class="buscador">
                    <form action="{{ route('productos') }}" method="GET">
                        <input type="text" name="q" placeholder="Buscar" value="{{ $q ?? '' }}">
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="opciones">
                    @guest
                        <a href="{{ route('login') }}" title="Ingresar" class="noenmobile"><i class="fas fa-sign-in-alt"></i></a>
                        <a href="{{ route('register') }}" title="Registrarse" class="noenmobile"><i class="fas fa-user-plus"></i></a>
                    @else
                        <a href="" title="Mi perfil" class="noenmobile"><i class="fas fa-user"></i></a>
                        <a href="{{ route('logout') }}" title="Salir" class="noenmobile"><i class="fas fa-sign-out-alt"></i></a>
                    @endguest
                    <a href="{{ route('shopping_cart') }}" title="Carrito de compras" class="noenmobile"><i class="fas fa-shopping-cart"></i></a>
                    <a href="#" class="hamburguesa" title="Menú"><i class="fas fa-bars"></i></a>
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="cuerpo">
                <div>
                    <h2>categorías</h2>
                </div>
                <div>
                    <h2>secciones</h2>
                    <a href="{{ route('home') }}">Inicio</a>
                    <a href="" class="buscar">Buscar</a>

                    <a href="{{ route('tyc') }}">Términos de servicio</a>
                    <a href="{{ route('shopping_cart') }}">Carrito de compras</a>
                    @guest
                        <a href="{{ route('login') }}">Ingresar</a>
                        <a href="{{ route('register') }}">Registrarse</a>
                    @else
                        <a href="{{ route('mis_compras') }}">Mi perfil</a>
                        <a href="{{ route('logout') }}">Salir</a>
                    @endguest
                </div>
            </div>
        </div>
    </header>
    <main>
        @yield('content')
    </main>
    <footer>
        <div class="cuerpo">
            <img src="img/logo_diapo.svg" alt="">
            <div>
                <a href="mailto:ventas.corporativas@charcuteriatovar.com.ve">contáctanos</a> |
                <a href="{{ route('tyc')}}">términos de servicio</a>
            </div>
        </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    @yield('javascript')
    <script>
        $(document).ready(function(){
            $.get("{{ route('carga_categorias_menu') }}", function(data){
                $('.menu .cuerpo div:first-child').append(data.salida);
            });
            $('.hamburguesa').click(function(e){
                e.preventDefault();
                if($(this).hasClass('abierto')){
                    $('.menu').slideUp(300);
                    $(this).removeClass('abierto');
                }else{
                    $('.menu').slideDown(300);
                    $(this).addClass('abierto');
                }
            })

        })

    </script>
</body>
</html>