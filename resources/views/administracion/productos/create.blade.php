@extends('layouts.admin')

@section('css')
    <link href="css/slim.min.css" rel="stylesheet">
@endsection

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.products')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route('categories.edit', codifica($category->id)) }}"><i class="fa fa-fw fa-pencil"></i> {{ $category->nombre }}</a></li>
            <li><a href="{{ route("productos.index") }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.products')</a></li>
            <li>@lang('administracion.crear')</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <p class="text-right"><a href="{{ route('productos.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>

<form role="form" action="{{ route('productos.store') }}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    <input type="hidden" name="category_id" value="{{ $category->id }}">
    <div class="row">
        <div class="col-lg-4">
            <div class="form-group">
                <label>Código administrativo</label>
                <input type="text" class="form-control" name="idadministrativo" value="{{ old('idadministrativo') }}" maxlength="50">
            </div>
        </div>
        <div class="col-lg-8">
            <div class="form-group{{ $errors->has('nombre') ? ' has-error' : '' }}">
                <label>Nombre</label>
                <input type="text" class="form-control" name="nombre" value="{{ old('nombre') }}" maxlength="100" required autofocus>
                @if ($errors->has('nombre'))
                    <p class="help-block">{{ $errors->first('nombre') }}</p>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group">
                <label>Tipo de precio</label>
                <select name="tipo" class="form-control tipo">
                    <option value="Precio fijo" @if(old('tipo') == 'Precio fijo') selected @endif >Precio fijo</option>
                    <option value="Por gramos" @if(old('tipo') == 'Por gramos') selected @endif >Por gramos</option>
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('precio_base') ? ' has-error' : '' }}">
                <label>Precio base en $</label>
                <input type="number" step="0.01" min="0" class="form-control" name="precio_base" value="{{ old('precio_base') }}" required>
                @if ($errors->has('precio_base'))
                    <p class="help-block">{{ $errors->first('precio_base') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('precio') ? ' has-error' : '' }}">
                <label>Precio final en $</label>
                <input type="number" step="0.01" min="0" class="form-control" name="precio" value="{{ old('precio') }}" required>
                @if ($errors->has('precio'))
                    <p class="help-block">{{ $errors->first('precio') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group rango_gramos">
                <label>Rango de gramos</label>
                <input type="text" class="form-control" name="gramos" value="{{ old('gramos') }}" maxlength="50" placeholder="Ej: Entre 400gr y 500gr">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-2">
            <div class="form-group">
                <br>
                <input type="checkbox" class="" name="activo" id="activo" value="1" @if( old('activo',1) == 1 ) checked @endif >&nbsp;&nbsp;<label for="activo">Activo</label>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="form-group">
                <br>
                <input type="checkbox" class="" name="destacado" id="destacado" value="1" @if( old('destacado',1) == 1 ) checked @endif >&nbsp;&nbsp;<label for="destacado">Destacado</label>
            </div>
        </div>        
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group">
                <label>Descripción</label>
                <textarea class="form-control" rows="5" name="descripcion">{{ old('descripcion') }}</textarea>
            </div>
        </div>
    </div>
    <div class="row">
        @for ($i = 1; $i <= 4; $i++)
        <div class="col-lg-3">
            <div class="form-group">
                <label>Imagen {{ $i }}</label>
                <div class="slim">
                    <input name="foto{{ $i }}" type="file" accept="image/jpeg, image/png" />
                </div>
                <label><span>Tamaño mímino 640 x 640 px | JPG o PNG</span></label>
            </div>
        </div>
        @endfor
    </div>

    <h3>Metadata</h3>
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" name="meta_title" value="{{ old('meta_title') }}" maxlength="200">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label>Keywords</label>
                <input type="text" class="form-control" name="meta_keywords" value="{{ old('meta_keywords') }}" maxlength="200">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" name="meta_description" value="{{ old('meta_description') }}" maxlength="200">
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-lg-12">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('productos.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a>
        </div>
    </div>
</form>

@endsection

@section('javascript')
<script src="js/slim.jquery.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    function valida_campos(){
        if($(".tipo option:selected").text()=='Precio fijo'){
            $('.rango_gramos').hide(0);
        }else{
            $('.rango_gramos').show(0);
        }
    }
    valida_campos();
    $('.tipo').change(function(){
        valida_campos();
    })

   $('.slim').slim({
      label: 'Arrastra tu imagen ó haz click aquí',
      ratio: '1:1',
      forceType: 'jpg',
      minSize: {
        width: 640,
        height: 640
      },
      size: {
        width: 640,
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
