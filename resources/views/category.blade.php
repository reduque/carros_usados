@extends('layouts.front')

@section('css')

@endsection

@section('content')
    <div class="banners_home2">
        <div class="contenedor">
        @foreach ($banners as $banner)
            <div class="item">
            @if ($banner->link<>'')
                <a href="{{ $banner->link }}" target="_blank"><img src="uploads/banners/{{ $banner->img }}" alt="{{ $banner->title }}"></a>
            @else
                <img src="uploads/banners/{{ $banner->img }}" alt="{{ $banner->title }}">
            @endif
            </div>
        </div>
    @endforeach


@endsection
@section('javascript')

@endsection