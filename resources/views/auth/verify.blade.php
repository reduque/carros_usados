@extends('layouts.front')

@section('content')

<div class="internas">
    <h1>Validar usuairo</h1>
    <div class="espaciado">
        <div class="froms">
            <div class="card-body">
                @if (session('resent'))
                    <div class="alert alert-success" role="alert">
                        Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico.
                    </div>
                @endif
                Antes de continuar, consulte su correo electrónico para ver si hay un enlace de verificación.<br>
                Si no recibió el correo electrónico
                <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                    @csrf
                    <button type="submit" class="btn btn-link p-0 m-0 align-baseline">Haga clic aquí para solicitar otro</button>.
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
