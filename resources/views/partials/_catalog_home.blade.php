<section class="cu-catalog">
    <div class="cu-container">
        <div class="cu-catalog__intro">
            <h2>Parte del nuestro catálogo</h2>
            <p>Spring comforting pumpkin spice latte strawberry spinach salad kale caesar salad </p>
        </div>
        <div class="cu-catalog__slider">
           <div class="cu-catalog__slider__wrapper">
                @for ($i = 0; $i < 8; $i++)
                    @include('partials._car_card')
                @endfor
           </div>
           <a class="cu-button cu-button--filled">Ver más</a>
        </div>
    </div>
</section>