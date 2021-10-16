@extends('layouts.admin')

@section('content')

<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">
            @lang('administracion.inicio')
        </h1>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <p>@lang('administracion.bienvenida') <b>{{ config('app.name', 'Laravel') }}</b></p>
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
    </div>
</div>
@endsection
