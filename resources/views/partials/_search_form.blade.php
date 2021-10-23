<form method="GET" action="{{ route('category') }}" class="cu-search-form">
    <input type="search" placeholder="Buscar" name="q" value="{{ request()->has('q') ? request()->get('q') : '' }}" />
    <button type="submit" class="cu-button">Buscar</button>
</form>