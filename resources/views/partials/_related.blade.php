<section class="cu-related">
    <h3 class="cu-related__title"><span>Vehiculos similares</span></h3>
    <div class="cu-related__grid">
        @for ($i = 0; $i < 4; $i++)
            @include('partials._car_card')
        @endfor
    </div>
</section>