@extends('layouts.front')

@section('css')

@endsection

@section('content')
    <section class="cu-single">
        <div class="cu-container cu-container--single">
            <figure class="cu-single__feature">
                <img src="img/content/car_main.png" alt="Modelo bla" />
            </figure>
            <div class="cu-single__content">
                <div id="cu-single-info" class="cu-single__info" aria-hidden="false">
                    <button class="cu-single__info__button" aria-controls="cu-single-info" aria-expanded="true">
                        <span class="close">Cerrar</span>
                        <span class="open">Abrir</span>
                    </button>
                    <h2 class="cu-single__info__model">Fusion SE</h2>
                    <div class="cu-single__info__meta">
                        <p><span class="cu-single__info__meta__brand">Ford</span>
                        <span class="cu-single__info__meta__year">2021</span></p>
                        <p>139.000 km</p>
                    </div>
                    <div class="cu-single__info__footer">
                        <span class="cu-single__info__footer__price">27.100</span>
                        <a href="" class="cu-button cu-button--filled reserve-btn">Me interesa</a>
                    </div>
                    <ul class="cu-single__info__extras">
                        <li>Asietos de cuero</li>
                        <li>Un solo dueño</li>
                        <li>Pintura en excelente estado</li>
                    </ul>
                    <ul class="cu-single__info__specs">
                        <li>
                            <h5>Tipo</h5>
                            <span>Sedan</span>
                        </li>
                        <li>
                            <h5>Marca</h5>
                            <span>Hyundai</span>
                        </li>
                        <li>
                            <h5>Sistema de Sonido</h5>
                            <span>Original</span>
                        </li>
                        <li>
                            <h5>Aire acondicionado</h5>
                            <span>Activo</span>
                        </li>
                        <li>
                            <h5>Llaves</h5>
                            <span>2 Copias</span>
                        </li>
                    </ul>
                    <ul class="cu-single__info__actions">
                        <li>
                            <h3>Agenda<br />una cita</h3>
                            <p>Parsley açai frosted gingerbread bites vine tomatoes avocado dressing drizzle grains.</p>
                        </li>
                        <li>
                            <h3>Nuestros carros<br />Tienen garantía</h3>
                            <p>Parsley açai frosted gingerbread bites vine tomatoes avocado dressing drizzle grains.</p>
                        </li>
                        <li>
                            <h3>Revisión de 150 puntos</h3>
                            <p>Revisa el resultado de la evaluación de este carro</p>
                            <button class="see-points">Haz clic aquí</button>
                        </li>
                    </ul>
                    <div class="cu-single__info__times">
                        <h3>Horario de antención</h3>
                        <p>Citas para revisar los carros en persona se llevan a cabo de:</p>
                        <h5>Lunes a Sábado de 9:00m - 6pm</h5>
                    </div>
                </div>
                <div class="cu-single__gallery">
                    <div class="cu-single__gallery__main">
                        @for ($i = 0; $i < 8; $i++)
                            <figure class="cu-single__gallery__main__item gallery-item">
                                <a href="img/content/car_main.png" data-fancybox="gallery">
                                    <img src="img/content/car_main.png" alt="Car model blabla" />
                                </a>
                            </figure>
                        @endfor
                    </div>
                    <div class="cu-single__gallery__thumbs">
                        @for ($i = 0; $i < 8; $i++)
                            <div class="cu-single__gallery__thumbs__thumb gallery-thumb">
                                <figure>
                                    <img src="img/content/car.png" alt="Car model blabla" />
                                </figure>
                            </div>
                        @endfor
                    </div>
                </div>
            </div>
            @include('partials._related')
        </div>
    </section>
    @include('partials._modal')
@endsection
@section('javascript')
   
@endsection