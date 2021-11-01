@extends('layouts.admin')

@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">@lang('administracion.carros')</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
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
        <p class="text-right"><a href="{{ route('carros.create') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-plus-circle"></i> @lang('administracion.nuevo')</a></p>
    </div>
</div>

<div class="row">
    <div class="col-lg-12"><!-- class tr active success warning danger -->
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>@lang('administracion.carros')</th>
                        <th width="80"></th>
                    </tr>
                </thead>
                <tbody>
                @foreach($carros as $carro)
                    <tr data-id='{{ codifica($carro->id) }}'>
                        <td><a href="{{ route('carros.edit', codifica($carro->id) ) }}" title="@lang('administracion.editar')">{{ $carro->marca->marca . ' ' . $carro->modelo->modelo . ' ' . $carro->ano . ' ' . $carro->placa }}</a></td>
                        <td>
                            <a href="{{ route('carros.edit', codifica($carro->id) ) }}" title="@lang('administracion.editar')"><i class="fa fa-fw fa-edit"></i></a>
                            <a href="{{ route('carros_eliminar', codifica($carro->id) ) }}" title="@lang('administracion.eliminar')"><i class="fa fa-fw fa-ban bloquear"></i></a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        {{$carros->render()}}
    </div>
</div>

@endsection
@section('javascript')
<script type="text/javascript">
$(document).ready(function(){
    $(".bloquear").click(function(event){
        event.preventDefault();
        if(confirm("@lang('administracion.confirmar_eliminar')")){
            document.location=$(this).parent().attr("href");
        }
    });
    setTimeout(function(){
        $(".alert").slideUp(500);
    },10000);
})
</script>
@endsection
