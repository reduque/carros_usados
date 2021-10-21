<section class="cu-related">
    <h3 class="cu-related__title"><span>Vehiculos similares</span></h3>
    <div class="cu-related__grid">
        @foreach ($relacionados as $carro_p)
            @include('partials._car_card')
        @endforeach
    </div>
</section>