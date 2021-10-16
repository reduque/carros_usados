@extends('layouts.admin')

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">Modelos</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route('marcas.edit', codifica($marca->id)) }}"><i class="fa fa-fw fa-pencil"></i> {{ $marca->marca }}</a></li>
            <li class="active"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.carros')</li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-lg-8">
    @if($notificacion_error=Session::get('notificacion_error'))
        <div class="alert alert-danger">{{ $notificacion_error }}</div>
    @endif
    </div>
    <div class="col-lg-4">
        <p class="text-right"><a href="{{ route('modelos.create') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-plus-circle"></i> @lang('administracion.nuevo')</a></p>
    </div>
</div>

<div class="row">
    <div class="col-lg-12"><!-- class tr active success warning danger -->
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th width="60"></th>
                    </tr>
                </thead>
                <tbody>
                @foreach($modelos as $modelo)
                    <tr data-id='{{ codifica($modelo->id) }}'>
                        <td><a href="{{ route('modelos.edit', codifica($modelo->id) ) }}" title="@lang('administracion.editar')">{{ $modelo->modelo }}</a></td>
                        <td>
                            <a href="{{ route('modelos.edit', codifica($modelo->id) ) }}" title="@lang('administracion.editar')"><i class="fa fa-fw fa-edit"></i></a>
                            <a href="{{ route('modelos_eliminar', codifica($modelo->id) ) }}" title="@lang('administracion.eliminar')"><i class="fa fa-fw fa-ban bloquear"></i></a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
<!--
<div class="row">
    <div class="col-lg-12">
        $modelos->appends(Request::except('page'))->render()
    </div>
</div>
-->
@endsection

@section('javascript')
<script type="text/javascript">
$(document).ready(function(){
    $(".bloquear").click(function(event){
        event.preventDefault();
        if(confirm("@lang('administracion.confirmar_eliminar')")){
            document.location=$(this).parent().attr("href");
        }
    })
    setTimeout(function(){
        $(".alert").slideUp(500);
    },10000);
})
</script>
@endsection
