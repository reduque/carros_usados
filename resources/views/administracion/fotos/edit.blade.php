@extends('layouts.admin')
@section('css')
    <link href="css/slim.min.css" rel="stylesheet">
@endsection

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.fotos')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route('carros.edit', codifica($carro->id)) }}"><i class="fa fa-fw fa-pencil"></i> {{ $carro->placa }}</a></li>
            <li><a href="{{ route('fotos.index') }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.fotos')</a></li>
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
        <p class="text-right"><a href="{{ route('fotos.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>
<form role="form" action="{{ route('fotos.update', codifica($foto->id)) }}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="row">
        <div class="col-lg-7">
            <div class="form-group">
                <label>Imagen pincipal</label>
                <div class="slim1 webp">
                    <input name="img" type="file" accept="image/jpeg, image/png" />
                    @if($carro->img<>'')
                        <img src="uploads/carros/galeria/{{ $foto->img }}">
                    @endif
                </div>
                <label><span>Tamaño mímino 1280 x 717 px | JPG o PNG</span></label>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-group">
                <label>Miniatura</label>
                <div class="slim webp">
                    <input name="miniatura" type="file" accept="image/jpeg, image/png" />
                    @if($carro->miniatura<>'')
                        <img src="uploads/carros/galeria/{{ $foto->miniatura }}">
                    @endif
                </div>
                <label><span>Tamaño mímino 640 x 640 px | JPG o PNG</span></label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('fotos.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a> 
            <a href="{{ route('fotos.create') }}" class="btn btn-primary"><i class="fa fa-fw fa-plus-circle"></i> @lang('administracion.nuevo')</a> 
            <a href="{{ route('fotos_eliminar', codifica($foto->id) ) }}" class="btn btn-danger"><i class="fa fa-fw fa-ban"></i> @lang('administracion.eliminar')</a>
        </div>
    </div>
</form>


@endsection
@section('javascript')

<script type="text/javascript">
$(document).ready(function(){
    setTimeout(function(){
        $(".alert").slideUp(640);
    },10000)
    $(".btn-danger").click(function(event){
        event.preventDefault();
        if(confirm("@lang('administracion.confirmar_eliminar')")){
            document.location=$(this).attr("href");
        }
    })
})
</script>

<script src="js/slim.jquery.js"></script>
<script src="js/creawebp.js"></script>
<script type="text/javascript">
  $(document).ready(function(){

    $('.slim1').slim({
        label: 'Arrastra tu imagen ó haz click aquí',
        ratio: '1280:717',
        forceType: 'jpg',
        minSize: {
            width: 1280,
            height: 717
        },
        size: {
            width: 1280,
            height: 717
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
    $('.slim').slim({
        label: 'Arrastra tu imagen ó haz click aquí',
        ratio: '1:1',
        forceType: 'jpg',
        minSize: {
            width: 640,
            height: 640,
        },
        size: {
            width: 640,
            height: 640,
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
