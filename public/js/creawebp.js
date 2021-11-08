$(document).ready(function () {
    $('body').append('<img src="" alt="" id="temporal" style="display: none;">');
    var formulario = document.getElementsByTagName('form')[0];
    var crearwebp = true;

    var tot=0;
    $('.webp').each(function(){
        $(this).addClass('webp_' + tot);
        tot++;
    })
    var act=0;
    function crear_webp(){
        el=$('.webp_' + act + ' input[type="hidden"]');
        if(el.val() != ''){
            var output = JSON.parse(el.val()).output;
            var file = JSON.parse(el.val()).output.image;
            $('#temporal').attr('src', file);
            new Promise(function (resolve, reject) {
                let rawImage = new Image();
                rawImage.addEventListener("load", function () {
                    resolve(rawImage);
                });
                rawImage.src = (file);
            }).then(function (rawImage) {
                return new Promise(function (resolve, reject) {
                    let oCanvas = document.createElement('canvas');
                    let oCtx = oCanvas.getContext('2d');
                    let oColorImg = document.getElementById('temporal');
                    oCanvas.width = output.width;
                    oCanvas.height = output.height;
                    oCtx.drawImage(oColorImg, 0, 0);
                    oCanvas.toBlob(function (blob) {
                        resolve(URL.createObjectURL(blob));
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = function () {
                            var base64data = reader.result;
                            var input = document.createElement("input");
                            input.type = "hidden";
                            input.name = el.prop('name') + "_webp";
                            input.value = base64data;
                            formulario.appendChild(input);
                            act++;
                            if(act<tot){
                                crear_webp();
                            }else{
                                crearwebp = false;
                                $('form').submit();
                            }
                        }
                    }, "image/webp");
                });
            });
        }else{
            act++;
            if(act<tot){
                crear_webp();
            }else{
                crearwebp = false;
                $('form').submit();
            }
        }
    }


    $('form').submit(function (e) {
        if (crearwebp) {
            e.preventDefault();
            crear_webp();
        }
    });

})