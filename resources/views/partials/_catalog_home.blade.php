<section class="cu-catalog">
    <div class="cu-container">
        <div class="cu-catalog__intro">
            <h2>Parte del nuestro catálogo</h2>
            <p>Spring comforting pumpkin spice latte strawberry spinach salad kale caesar salad </p>
        </div>
        <div class="cu-catalog__slider">
           <div class="cu-catalog__slider__wrapper">
                @foreach ($carros as $carro_p)
                    @include('partials._car_minicard')
                @endforeach
           </div>
           <a href="{{ route('category') }}" class="cu-button cu-button--filled">Ver más</a>
        </div>
    </div>
</section>