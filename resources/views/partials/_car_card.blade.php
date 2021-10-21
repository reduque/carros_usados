<div class="cu-card cu-card--full">
    <div class="cu-card__wrapper">
        <figure class="cu-card__image">
            <a href="{{ route('single',codifica($carro_p->id)) }}">
                <img src="uploads/carros/{{ $carro_p->img }}" alt="Car" />
            </a>
        </figure>
        <div class="cu-card__info">
            <h3 class="cu-card__info__model">{{ $carro_p->modelo->modelo }}</h3>
            <div class="cu-card__info__meta">
                <p><span class="cu-card__info__meta__brand">{{ ucfirst(strtolower($carro_p->marca->marca)) }}</span>
                <span class="cu-card__info__meta__year">&nbsp;{{ $carro_p->ano }}</span></p>
                <p>{{ number_format($carro_p->kilometraje,0,'.','.') }} km</p>
            </div>
            <div class="cu-card__info__footer">
                <span class="cu-card__info__footer__price">{{ number_format($carro_p->precio,0,'.','.') }}</span>
                <a href="{{ route('single',codifica($carro_p->id)) }}" class="cu-button cu-button--filled">Ver más</a>
            </div>
            <ul class="cu-card__info__extras">
                {!! nl2li($carro_p->descripcion) !!}
            </ul>
        </div>
    </div>
</div>