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
            <li><a href="{{ route('carros.index') }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.carros')</a></li>
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
        <p class="text-right"><a href="{{ route('carros.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>
<form role="form" action="{{ route('carros.update', codifica($carro->id)) }}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    {{ method_field('PUT') }}
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group">
                <label>Marca</label>
                <select name="marca_id" class="form-control" required>
                    @foreach ($marcas as $marca)
                        <option value="{{ $marca->id }}" @if(old('marca_id', $carro->marca_id) == $marca->id) selected @endif >{{ $marca->marca }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <label>Modelo</label>
                <select name="modelo_id" class="form-control" required></select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <label>Año</label>
                <select name="ano" class="form-control">
                    @for ($l=date('Y')-10; $l<=date('Y'); $l++)
                        <option value="{{ $l }}" @if(old('ano', $carro->ano) == $l) selected @endif >{{ $l }}</option>
                    @endfor
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('precio') ? ' has-error' : '' }}">
                <label>Precio</label>
                <input type="number" class="form-control" name="precio" value="{{ old('precio', $carro->precio) }}" min="0" step="0.01" required>
                @if ($errors->has('precio'))
                    <p class="help-block">{{ $errors->first('precio') }}</p>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group">
                <label>Descripción</label>
                <textarea class="form-control" rows="5" name="descripcion" required>{{ old('descripcion', $carro->descripcion) }}</textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('color') ? ' has-error' : '' }}">
                <label>Color</label>
                <input type="text" class="form-control" name="color" value="{{ old('color', $carro->color) }}" maxlength="50" required>
                @if ($errors->has('color'))
                    <p class="help-block">{{ $errors->first('color') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <label>Estatus</label>
                <select name="estatus" class="form-control" required>
                    @foreach (array_estatus() as $estatus)
                        <option value="{{ $estatus }}" @if(old('estatus', $carro->estatus) == $estatus) selected @endif >{{ $estatus }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </div>

    
    <div class="row">
        <div class="col-lg-12">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('carros.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a> 
            <a href="{{ route('carros.create') }}" class="btn btn-primary"><i class="fa fa-fw fa-plus-circle"></i> @lang('administracion.nuevo')</a> 
            <a href="{{ route('fotos.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.fotos')</a> 
            <a href="{{ route('carros_eliminar', codifica($carro->id) ) }}" class="btn btn-danger"><i class="fa fa-fw fa-ban"></i> @lang('administracion.eliminar')</a>
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
    function carros_modelos(){
            $.ajax({
                url: '{{ route('carros_modelos') }}',
                data: {
                    idmarca: $('select[name="marca_id"]').val(),
                    modeloid: '{{old('modelo_id', $carro->modelo_id)}}'
                },
                type: "get",
                datatype: "html"
            }).done(function(data) {
                $('select[name="modelo_id"]').html(data);
            });
        }
        carros_modelos();
        $('select[name="marca_id"]').change(function(){
            carros_modelos();
        })

})
</script>
@endsection
