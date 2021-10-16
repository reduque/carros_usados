@extends('layouts.admin')

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.usuarios')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route("usuarios.index") }}"><i class="fa fa-fw fa-user"></i> @lang('administracion.usuarios')</a></li>
            <li>Editar</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-lg-10">
    @if($notificacion=Session::get('notificacion'))
        <div class="alert alert-success">{{ $notificacion }}</div>
    @endif
    @if($notificacion_error=Session::get('notificacion_error'))
        <div class="alert alert-danger">{{ $notificacion_error }}</div>
    @endif
    </div>
    <div class="col-lg-2">
        <p class="text-right"><a href="{{ route('usuarios.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>
<form role="form" action="{{ route('usuarios.update', codifica($usuario->id)) }}" method="POST">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                <label>Name</label>
                <input type="text" class="form-control" name="name" value="{{ old('name', $usuario->name) }}" maxlength="60" required autofocus>
                @if ($errors->has('name'))
                    <p class="help-block">{{ $errors->first('name') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <label>Email</label>
                <input type="email" class="form-control" name="email" value="{{ old('email', $usuario->email) }}" maxlength="200" required readonly>
                @if ($errors->has('email'))
                    <p class="help-block">{{ $errors->first('email') }}</p>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('usuarios.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a> 
            <a href="{{ route('usuarios_eliminar', codifica($usuario->id) ) }}" class="btn btn-danger"><i class="fa fa-fw fa-ban"></i> @lang('administracion.eliminar')</a>
        </div>
    </div>
</form>


@endsection
@section('javascript')
<script type="text/javascript">
$(document).ready(function(){
    setTimeout(function(){
        $(".alert").slideUp(500);
    },10000)
})
</script>
@endsection
