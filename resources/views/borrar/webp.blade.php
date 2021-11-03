<!DOCTYPE html>
<html lang="en">

<head>
    <base href="{{ asset('/') }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="quepasa"></div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>


    <script>
        $(document).ready(function() {
            var tot={{count($archivos)}}, act = 1;
            var archivos=[''<?php
                foreach($archivos as $archivo){
                    echo ',"' . $archivo . '"';
                }
            ?>];
            function manda() {
                $.ajax({
                    url: '{{ route('borrar_webp') }}',
                    data: {
                        archivo: archivos[act]
                    },
                    type: "get",
                    //datatype: "json"
                }).done(function(data) {
                    $('#quepasa').html(act + ' de ' + tot);
                });
                act++;
                if (act <= tot) {
                    setTimeout(() => {
                        manda();
                    }, 300);
                }else{
                    alert('listo');
                }
            }
            setTimeout(() => {
                manda();
            }, 300);
        });
    </script>
</body>

</html>
