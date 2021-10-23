@extends('layouts.admin')

@section('css')
    <style>
        .galeria{
            display: flex;
            flex-wrap: wrap; 
        }
        .galeria article{
            position: relative;
            width: 200px;
            padding: 5px;
            border: 1px solid #ccc;
            margin: 2px;
        }
        .galeria article img{
            max-width: 100%;
        }
        .galeria article i{
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #3097d1;
            display: none;
        }
        .galeria article:hover i{
            display: block;
        }
    </style>
@endsection
@section('content')

<div class="row">
     <div class="col-lg-6">
        <h1 class="page-header">Fotos</h1>
    </div>
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li><a href="{{ route('administracion_home') }}"><i class="fa fa-dashboard"></i> @lang('administracion.inicio')</a></li>
            <li><a href="{{ route('carros.edit', codifica($carro->id)) }}"><i class="fa fa-fw fa-pencil"></i> {{ $carro->placa }}</a></li>
            <li class="active"><i class="fa fa-fw fa-pencil"></i> @lang('administracion.fotos')</li>
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
        <p class="text-right"><a href="{{ route('fotos.create') }}" class="btn btn-sm btn-primary"><i class="fa fa-fw fa-plus-circle"></i> @lang('administracion.nuevo')</a></p>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="galeria">
            @foreach($fotos as $foto)
            <article data-id='{{ codifica($foto->id) }}'>
                <a href="{{ route('fotos.edit', codifica($foto->id) ) }}" title="@lang('administracion.editar')"><img src="uploads/carros/galeria/{{ $foto->img }}"></a>
                <i class="fa fa-arrows-alt"></i>
            </article>
            @endforeach
        </div>
    </div>
</div>
<!--
<div class="row">
    <div class="col-lg-12">
        $fotos->appends(Request::except('page'))->render()
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
    },10000)
    $('.galeria').sortable({
        stop: function( event, ui ) {
            ids=new Array();
            $('.galeria article').each(function(){
                ids.push($(this).data('id'));
            });
            $.ajax({
                'url' : "{{route('ordena_fotos')}}?ids=" + ids
            });
        }
    });
})
</script>
@endsection
