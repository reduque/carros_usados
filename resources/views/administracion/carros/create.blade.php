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
            <li><a href="{{ route("carros.index") }}"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.carros')</a></li>
            <li>@lang('administracion.crear')</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <p class="text-right"><a href="{{ route('carros.index') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a></p>
    </div>
</div>

<form role="form" action="{{ route('carros.store') }}" method="POST" enctype="multipart/form-data">
    {{ csrf_field() }}
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group">
                <label>Marca</label>
                <select name="marca_id" class="form-control" required>
                    @foreach ($marcas as $marca)
                        <option value="{{ $marca->id }}" @if(old('marca_id') == $marca->id) selected @endif >{{ $marca->marca }}</option>
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
                    @for ($l=date('Y')-20; $l<=date('Y'); $l++)
                        <option value="{{ $l }}" @if(old('ano') == $l) selected @endif >{{ $l }}</option>
                    @endfor
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('placa') ? ' has-error' : '' }}">
                <label>Placa</label>
                <input type="text" class="form-control" name="placa" value="{{ old('placa') }}" maxlength="15" required>
                @if ($errors->has('placa'))
                    <p class="help-block">{{ $errors->first('placa') }}</p>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="form-group">
                <label>Descripción (colocar cada item en una línea diferente)</label>
                <textarea class="form-control" rows="5" name="descripcion" required>{{ old('descripcion') }}</textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('precio') ? ' has-error' : '' }}">
                <label>Precio (USD)</label>
                <input type="number" class="form-control" name="precio" value="{{ old('precio') }}" min="0" step="1" required>
                @if ($errors->has('precio'))
                    <p class="help-block">{{ $errors->first('precio') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('color') ? ' has-error' : '' }}">
                <label>Color</label>
                <input type="text" class="form-control" name="color" value="{{ old('color') }}" maxlength="50" required>
                @if ($errors->has('color'))
                    <p class="help-block">{{ $errors->first('color') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('kilometraje') ? ' has-error' : '' }}">
                <label>Kilometraje</label>
                <input type="number" class="form-control" name="kilometraje" value="{{ old('kilometraje') }}" min="0" max="16777215" step="1" required>
                @if ($errors->has('kilometraje'))
                    <p class="help-block">{{ $errors->first('kilometraje') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <label>Transmisión</label>
                <select name="transmision" class="form-control" required>
                    @foreach (array_transmision() as $transmision)
                        <option value="{{ $transmision }}" @if(old('transmision') == $transmision) selected @endif >{{ $transmision }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group">
                <label>Tracción</label>
                <select name="traccion" class="form-control" required>
                    @foreach (array_traccion() as $traccion)
                        <option value="{{ $traccion }}" @if(old('traccion') == $traccion) selected @endif >{{ $traccion }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <label>Combustible</label>
                <select name="combustible" class="form-control" required>
                    @foreach (array_combustible() as $combustible)
                        <option value="{{ $combustible }}" @if(old('combustible') == $combustible) selected @endif >{{ $combustible }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('tanque_de_combustible') ? ' has-error' : '' }}">
                <label>Tanque de combustible: # lts</label>
                <input type="number" class="form-control" name="tanque_de_combustible" value="{{ old('tanque_de_combustible') }}" min="0" max="255" step="1" required>
                @if ($errors->has('tanque_de_combustible'))
                    <p class="help-block">{{ $errors->first('tanque_de_combustible') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('puertas') ? ' has-error' : '' }}">
                <label>Puertas</label>
                <input type="number" class="form-control" name="puertas" value="{{ old('puertas') }}" min="0" max="5" step="1" required>
                @if ($errors->has('puertas'))
                    <p class="help-block">{{ $errors->first('puertas') }}</p>
                @endif
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="form-group">
                <label>Asientos</label>
                <select name="asientos" class="form-control" required>
                    @foreach (array_asientos() as $asientos)
                        <option value="{{ $asientos }}" @if(old('asientos') == $asientos) selected @endif >{{ $asientos }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <br>
                <input type="checkbox" class="" name="aire_acondicionado" id="aire_acondicionado" value="1" @if(old('aire_acondicionado')==1) checked @endif >&nbsp;&nbsp;<label for="aire_acondicionado">Aire acondicionado</label>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group{{ $errors->has('juegos_de_llaves') ? ' has-error' : '' }}">
                <label>Juegos de llaves</label>
                <input type="number" class="form-control" name="juegos_de_llaves" value="{{ old('juegos_de_llaves') }}" min="0" max="5" step="1" required>
                @if ($errors->has('juegos_de_llaves'))
                    <p class="help-block">{{ $errors->first('juegos_de_llaves') }}</p>
                @endif
            </div>
        </div>
        <div class="col-lg-3">
            <div class="form-group">
                <br>
                <input type="checkbox" class="" name="sistema_de_seguroda" id="sistema_de_seguroda" value="1" @if(old('sistema_de_seguroda')==1) checked @endif >&nbsp;&nbsp;<label for="sistema_de_seguroda">Sistema de seguroda</label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <label>Imagen pincipal</label>
                <div class="slim">
                    <input name="img" type="file" accept="image/jpeg, image/png" />
                </div>
                <label><span>Tamaño mímino 2500 x 1400 px | JPG o PNG</span></label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <button type="submit" class="btn btn-success"><i class="fa fa-fw fa-check"></i> @lang('administracion.guardar')</button>  
            <a href="{{ route('carros.index') }}" class="btn btn-primary"><i class="fa fa-fw fa-list"></i> @lang('administracion.volver_lista')</a>
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
            ratio: '2500:1400',
            forceType: 'jpg',
            minSize: {
                width: 2500,
                height: 1400
            },
            size: {
                width: 2500,
                height: 1400
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

        function carros_modelos(){
            $.ajax({
                url: '{{ route('carros_modelos') }}',
                data: {
                    idmarca: $('select[name="marca_id"]').val(),
                    modeloid: '{{old('modelo_id')}}'
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
