
@extends('layouts.front')
@section('content')
<div class="internas">
    <h1>Confirme su contraseña antes de continuar</h1>
    <div class="espaciado">
        <div class="froms">
            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf
                <div class="row">
                    <div class="col-xs-12">
                        <label for="password">Clave</label>
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button type="submit" class="btn btn-primary">
                            Confirmar clave
                        </button>
                        @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                Olvidó clave
                            </a>
                        @endif
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
