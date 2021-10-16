@extends('layouts.admin')

@section('css')
    <link href="css/slim.min.css" rel="stylesheet">
@endsection

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.marcas')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route("marcas.index") }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.marcas')</a></li>
            <li>@lang('administracion.crear')</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <p class="text-right"><a href="{{ route('marcas.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>

<form role="form" action="{{ route('marcas.store') }}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group{{ $errors->has('marca') ? ' has-error' : '' }}">
                <label>Marca</label>
                <input type="text" class="form-control" name="marca" value="{{ old('marca') }}" maxlength="50" required autofocus>
                @if ($errors->has('marca'))
                    <p class="help-block">{{ $errors->first('marca') }}</p>
                @endif
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('marcas.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a>
        </div>
    </div>
</form>

@endsection
