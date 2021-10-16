@extends('layouts.admin')

@section('css')
    <link href="css/slim.min.css" rel="stylesheet">
@endsection

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.banners')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route("banners.index") }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.banners')</a></li>
            <li>@lang('administracion.crear')</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <p class="text-right"><a href="{{ route('banners.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>

<form role="form" action="{{ route('banners.store') }}" method="POST">
    {{ csrf_field() }}

    <div class="row">
        <div class="col-lg-6">
            <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                <label>Título</label>
                <input type="text" class="form-control" name="title" value="{{ old('title') }}" maxlength="200" required autofocus>
                @if ($errors->has('title'))
                    <p class="help-block">{{ $errors->first('title') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group{{ $errors->has('link') ? ' has-error' : '' }}">
                <label>Link</label>
                <input type="text" class="form-control" name="link" value="{{ old('link') }}" maxlength="200">
                @if ($errors->has('link'))
                    <p class="help-block">{{ $errors->first('link') }}</p>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <label>Imagen</label>
                <div class="slim">
                    <input name="img" type="file" accept="image/jpeg, image/png" />
                </div>
                <label><span>Tamaño mímino 1600 x 640 px | JPG o PNG</span></label>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <input type="checkbox" class="" name="active" id="a_a" value="1" @if( old('active',1) == 1 ) checked @endif >&nbsp;&nbsp;<label for="a_a">Activo</label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('banners.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a>
        </div>
    </div>
</form>

@endsection

@section('javascript')
<script src="js/slim.jquery.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $('.slim').slim({
            label: 'Arrastra tu imagen ó haz click aquí',
            ratio: '1600:640',
            forceType: 'jpg',
            minSize: {
                width: 1600,
                height: 640
            },
            size: {
                width: 1600,
                height: 640
            },
            download: false,
            labelLoading: 'Cargando imagen...',
            statusImageTooSmall: 'La imagen es muy pequeña. El tamaño mínimo es $0 píxeles.',
            statusUnknownResponse: 'Ha ocurrido un error inesperado.',
            statusUploadSuccess: 'Imagen guardada',
            statusFileSize: 'El tamaño máximo de imagen es 1MB.',
            statusFileType: 'El formato de imagen no es permitido. Solamente: $0.',
            buttonConfirmLabel: 'Aceptar',
            buttonConfirmTitle: 'Aceptar',
            buttonCancelLabel: 'Cancelar',
            buttonCancelLabel: "Cancelar",
            buttonCancelTitle: "Cancelar",
            buttonEditTitle: "Editar",
            buttonRemoveTitle: "Eliminar",
            buttonRotateTitle: "Rotar",
            buttonUploadTitle: "Guardar"
        });
    })
</script>
@endsection
