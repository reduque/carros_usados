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
    <table></table>
    <p>
    <div class="contenedor" style="background: #330"></div>
    </p>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>


    <script>
        $(document).ready(function() {
            var idmarca = 0;
            var m;
            var tot, act = 0;
            var ids=0;
            function manda() {
                //el = m[act];
                el=$('.cont2 > div:nth-child(' + act + ')');
                if (el.hasClass('marca')) {
                    marca = el.find('a').html()
                    $('#quepasa').html('procesando marca:' + marca);
                    $.ajax({
                        url: '{{ route('borrar_procesar') }}',
                        data: {
                            marca: marca
                        },
                        type: "get",
                        datatype: "json"
                    }).done(function(data) {
                        idmarca = data.idmarca;
                        $('table').append('<tr><td>' + idmarca + '</td><td>' + marca + '</td></tr>');
                    });
                } else {
                    el.find('a').each(function() {
                        modelo = $(this).html()
                        ids++;
                        $('table').append('<tr id="tr' + ids + '" data-idmarca="' + idmarca + '" data-modelo="' + modelo + '"><td>' + idmarca + '</td><td class="acaelid"></td><td>' + modelo + '</td></tr>')
                    })
                }
                act++;
                if (act <= tot) {
                    setTimeout(() => {
                        manda();
                    }, 300);
                }else{
                    act=0;
                    setTimeout(() => {
                        manda2();
                    }, 300);

                }
            }
            function manda2(){
                act++;
                el=$('#tr' + act);
                $('#quepasa').html('procesando modelo:' + el.data('modelo'));
                $.ajax({
                    url: '{{ route('borrar_procesar') }}',
                    data: {
                        idmarca: el.data('idmarca'),
                        modelo: el.data('modelo')
                    },
                    type: "get",
                    datatype: "json"
                }).done(function(data) {
                    el.find('.acaelid').html(data.idmodelo);
                });
                if (act < ids) {
                    setTimeout(() => {
                        manda2();
                    }, 300);
                }else{
                    $('#quepasa').html('finalizó');
                }
            }
            $.ajax({
                url: 'marcas.html',
                type: "get",
                datatype: "html"
            }).done(function(data) {
                $('.contenedor').html(data);
                m = $('.cont2 > div');
                tot=m.length;
                setTimeout(() => {
                    manda();
                }, 300);

            });
            /*

            */
        });
    </script>
</body>

</html>
