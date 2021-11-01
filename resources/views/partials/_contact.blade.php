<div class="cu-contact">
    <div class="cu-contact__image">
        <img src="img/content/car.png" alt="modelo bla" /> 
    </div>
    <div class="cu-contact__info">
        <h2>¿Quieres revisar el vehículo en persona?</h2>
        <p>Envía tus datos y nos pondremos en contacto contigo</p>
        <form class="cu-form" method="POST" action="{{ route('enviar_formulario') }}">
            @csrf
            <input type="hidden" name="modelo" value="{{ $carro->marca->marca . ' ' . $carro->modelo->modelo . ' ' . $carro->ano . ' ' . $carro->placa }}">
            <input type="hidden" name="id" value="{{ codifica($carro->id) }}">
            <div class="cu-form__field">
                <input type="text" name="nombre" placeholder="Nombre y apellido" required />
            </div>
            <div class="cu-form__field">
                <input type="email" name="email" placeholder="Correo electrónico" required />
            </div>
            <div class="cu-form__field">
                <input type="tel" name="telefono" placeholder="Teléfono" />
            </div>
            <button class="cu-button submit-btn">Enviar</button>
        </form>
        <div class="cu-contact__info__whatsapp">
            <h3>Contáctanos por Whatsapp</h3>
            @if (isMobile())
                <a href="whatsapp:/send?phone=+584128352628&text={{ urlencode('Quiero revisar este vehículo en persona: ' . $carro->marca->marca . ' ' . $carro->modelo->modelo . ' ' . $carro->ano . ' ' . $carro->placa) }}" target="_blank">Iniciar chat</a><!-- modelo info escapado para url -->
            @else
                <a href="https://web.whatsapp.com/send?phone=+584128352628&text={{ urlencode('Quiero revisar este vehículo en persona: ' . $carro->marca->marca . ' ' . $carro->modelo->modelo . ' ' . $carro->ano . ' ' . $carro->placa) }}" target="_blank">Iniciar chat</a>
            @endif
        </div>
    </div>
</div>