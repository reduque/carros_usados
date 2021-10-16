@extends('layouts.front')

@section('content')

<div class="internas">
    <h1>Ingresar</h1>
    <div class="espaciado">
        <div class="froms">
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="row">
                    <div class="col-xs-12">
                        <label for="email">Email</label>
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
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
                        <label class="form-check-label" for="remember">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            Recuérdame
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button type="submit" class="btn btn-primary">
                            Ingresar
                        </button> 
                        
                        @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                Olvidó clave
                            </a>
                        @endif
                        <br><br>
                        <a href="{{ route('register') }}"><i class="fas fa-user-plus"></i>Registrarse</a> 
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection
