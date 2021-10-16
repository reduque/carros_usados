@extends('layouts.admin')
@section('css')
    <link href="css/slim.min.css" rel="stylesheet">
@endsection

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.carros')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route('marcas.edit', codifica($marca->id)) }}"><i class="fa fa-fw fa-pencil"></i> {{ $marca->marca }}</a></li>
            <li><a href="{{ route('modelos.index') }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.carros')</a></li>
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
        <p class="text-right"><a href="{{ route('modelos.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>
<form role="form" action="{{ route('modelos.update', codifica($modelo->id)) }}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group{{ $errors->has('modelo') ? ' has-error' : '' }}">
                <label>Modelo</label>
                <input type="text" class="form-control" name="modelo" value="{{ old('modelo',$modelo->modelo) }}" maxlength="50" required autofocus>
                @if ($errors->has('modelo'))
                    <p class="help-block">{{ $errors->first('modelo') }}</p>
                @endif
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-6">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('modelos.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a> 
            <a href="{{ route('modelos.create') }}" class="btn btn-primary"><i class="fa fa-fw fa-plus-circle"></i> @lang('administracion.nuevo')</a> 
            <a href="{{ route('modelos_eliminar', codifica($modelo->id) ) }}" class="btn btn-danger"><i class="fa fa-fw fa-ban"></i> @lang('administracion.eliminar')</a>
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
    $(".btn-danger").click(function(event){
        event.preventDefault();
        if(confirm("@lang('administracion.confirmar_eliminar')")){
            document.location=$(this).attr("href");
        }
    })
})
</script>
@endsection
