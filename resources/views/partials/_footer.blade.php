</main>
    <footer class="cu-footer">
      <div class="cu-footer__top">
        <h3>Todo  nuestro stock</h3>
        <p>Llega rápido al carro que te interesa</p>
        <div class="cu-footer__top__search">
          @include('partials._search_form')
        </div>
        <ul>
        @foreach ($marcas as $marca)
          <li><a href="{{ route('category') }}?marca={{$marca->marca}}">{{ ucfirst(strtolower($marca->marca)) }}</a></li>
        @endforeach
        </ul>
      </div>
      <div class="cu-footer__bottom">
        <div class="cu-footer__bottom__copy">
          <h3><a href="">Carros Usados</a></h3>
          <p>Copyright &copy; 2021 Carros Usados. Todos los derechos reservados.</p>
        </div>
        <ul class="cu-footer__bottom__contact">
          <li>
            <a href="tel:2123453256">(0212) 345-3256</a>
          </li>
          <li>
            <a href="mailto:info@carrosusados.com">info@carrosusados.com</a>
          </li>
        </ul>
      </div>
</footer>