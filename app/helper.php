<?php
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

function volteafecha($cualfecha){
	list($cualfecha,)=explode(' ', $cualfecha);
	if(strpos($cualfecha,"-")){
		$mfecha=explode("-", $cualfecha);
		return $mfecha[2] . "/" . $mfecha[0] . "/" . $mfecha[1];
	}else if(strpos($cualfecha,"/")){
		$mfecha=explode("/", $cualfecha);
		return $mfecha[2] . "/" . $mfecha[0] . "/" . $mfecha[1];
	}else{
		return $cualfecha;
	}
}

function codifica($valor){
	$valor+=1000;
	$mrcd=array( 0 =>'A', 1 =>'B', 2 =>'C', 3 =>'D', 4 =>'E', 5 =>'F', 6 =>'G', 7 =>'H', 8 =>'I', 9 =>'J',10 =>'K',11 =>'L',12 =>'M',13 =>'N',14 =>'O',15 =>'P',16 =>'Q',17 =>'R',18 =>'S',19 =>'T',20 =>'U',21 =>'V',22 =>'W',23 =>'X',24 =>'Y',25 =>'Z',26 =>'1',27 =>'2',28 =>'3',29 =>'4',30 =>'5',31 =>'6',32 =>'7',33 =>'8',34 =>'9',35 =>'0',36 =>'a',37 =>'b',38 =>'c',39 =>'d',40 =>'e',41 =>'f',42 =>'g',43 =>'h',44 =>'i',45 =>'j',46 =>'k',47 =>'l',48 =>'m',49 =>'n',50 =>'o',51 =>'p',52 =>'q',53 =>'r',54 =>'s',55 =>'t',56 =>'u',57 =>'v',58 =>'w',59 =>'x',60 =>'y',61 =>'z');
	$separador=rand(0,6);
	//$separador=0;
	$salida="";
    while($valor>55){
		@$division    = $valor/55;
		@$resultINT   = floor($valor/55);
		@$remnant     = $valor%55;
		$salida  = $mrcd[$remnant+$separador].
		$mrcd[61-($remnant+$separador)].$salida;
		$valor=$resultINT;
	}
	$salida  = $mrcd[$separador*5] . $mrcd[$valor+$separador]. $mrcd[61-($valor+$separador)].$salida;
	return $salida;
}
function decodifica($valor){
	$mrcd=array( 0 =>'A', 1 =>'B', 2 =>'C', 3 =>'D', 4 =>'E', 5 =>'F', 6 =>'G', 7 =>'H', 8 =>'I', 9 =>'J',10 =>'K',11 =>'L',12 =>'M',13 =>'N',14 =>'O',15 =>'P',16 =>'Q',17 =>'R',18 =>'S',19 =>'T',20 =>'U',21 =>'V',22 =>'W',23 =>'X',24 =>'Y',25 =>'Z',26 =>'1',27 =>'2',28 =>'3',29 =>'4',30 =>'5',31 =>'6',32 =>'7',33 =>'8',34 =>'9',35 =>'0',36 =>'a',37 =>'b',38 =>'c',39 =>'d',40 =>'e',41 =>'f',42 =>'g',43 =>'h',44 =>'i',45 =>'j',46 =>'k',47 =>'l',48 =>'m',49 =>'n',50 =>'o',51 =>'p',52 =>'q',53 =>'r',54 =>'s',55 =>'t',56 =>'u',57 =>'v',58 =>'w',59 =>'x',60 =>'y',61 =>'z');
	$separador=0;
	$mvalor=str_split($valor);
	$resultado1=0;
	$resultado2=0;
	for($i=0;$i<=61;$i++)
		if($mvalor[0]==$mrcd[$i])
			$separador=$i/5;
			
	$contexp=((count($mvalor)-1)/2)-1;
	for($l=1;$l<count($mvalor);$l+=2){
		for($i=0;$i<=61;$i++){
			if($mvalor[$l]==$mrcd[$i]){
				$resultado1+=($i-$separador)*pow(55,$contexp);
			}
			if($mvalor[$l+1]==$mrcd[$i]){
				$resultado2+=(61-($i+$separador))*pow(55,$contexp);
			}
		}
		$contexp--;
	}
	if($resultado1==$resultado2 and is_int($separador)){
		return $resultado1 - 1000;
	}else{
		return "";
	}
}

function meses($mes){
	if(app()->getLocale()=='es')
		$meses_array = array("","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	if(app()->getLocale()=='en')
		$meses_array = array("","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	return $meses_array[$mes];
}
function creafiltro($txtBuscar){
	$salida='';
	$u='';
	if($txtBuscar<>""){
		$txtBuscar = ' ' . str_replace([',','.',';','?'], [' ',' ',' ',' '], strtolower($txtBuscar)) . ' ';

		$virus = array(" a "," el "," la "," las "," los "," un "," una "," unas "," de "," del "," y "," the "," and "," al ");
		$cambios  = array(" "," "," "," "," "," "," "," "," "," "," "," "," ");
		$txtBuscar = str_replace($virus, $cambios, $txtBuscar);
		$mpalabras = explode(" ", $txtBuscar);
		$mpalabras = array_unique($mpalabras);
		foreach($mpalabras as $mpalabra){
			$mpalabra=trim($mpalabra);
			if($mpalabra<>''){
				$salida.=$u . $mpalabra;
				$u='|';
			}
		}
	}
	return $salida;
}
function nl2p($string)
{
    $paragraphs = '';

    foreach (explode("\n", $string) as $line) {
        if (trim($line)) {
            $paragraphs .= '<p>' . $line . '</p>';
        }
    }
    return $paragraphs;

}
function nl2li($string)
{
    $paragraphs = '';

    foreach (explode("\n", $string) as $line) {
        if (trim($line)) {
            $paragraphs .= '<li>' . $line . '</li>';
        }
    }
    return $paragraphs;

}

function array_estatus(){
	return [
		'nuevo',
		'vendido'
	];
}
function array_transmision(){
	return['Automatica','Mecanica'];
}
function array_traccion(){
	return['4x2','4x4'];
}
function array_combustible(){
	return['Gasolina','Diesel','Gas'];
}

function array_asientos(){
	return['Tela','Cuero'];
}


// Crear miniaturas
const IMAGE_HANDLERS = [
	IMAGETYPE_JPEG => [
		'load' => 'imagecreatefromjpeg',
		'save' => 'imagejpeg',
		'quality' => 100
	],
	IMAGETYPE_PNG => [
		'load' => 'imagecreatefrompng',
		'save' => 'imagepng',
		'quality' => 0
	],
	IMAGETYPE_GIF => [
		'load' => 'imagecreatefromgif',
		'save' => 'imagegif'
	]
];
function createThumbnail($src, $dest, $targetWidth, $targetHeight = null) {
	$type = exif_imagetype($src);
	if (!$type || !IMAGE_HANDLERS[$type]) {
		return null;
	}
	$image = call_user_func(IMAGE_HANDLERS[$type]['load'], $src);
	if (!$image) {
		return null;
	}
	$width = imagesx($image);
	$height = imagesy($image);
	if ($targetHeight == null) {
		$ratio = $width / $height;
		if ($width > $height) {
			$targetHeight = floor($targetWidth / $ratio);
		}
		else {
			$targetHeight = $targetWidth;
			$targetWidth = floor($targetWidth * $ratio);
		}
	}
	$thumbnail = imagecreatetruecolor($targetWidth, $targetHeight);
	if ($type == IMAGETYPE_GIF || $type == IMAGETYPE_PNG) {
		imagecolortransparent(
			$thumbnail,
			imagecolorallocate($thumbnail, 0, 0, 0)
		);
		if ($type == IMAGETYPE_PNG) {
			imagealphablending($thumbnail, false);
			imagesavealpha($thumbnail, true);
		}
	}
	imagecopyresampled(
		$thumbnail,
		$image,
		0, 0, 0, 0,
		$targetWidth, $targetHeight,
		$width, $height
	);
	return call_user_func(
		IMAGE_HANDLERS[$type]['save'],
		$thumbnail,
		$dest,
		IMAGE_HANDLERS[$type]['quality']
	);
}
function nombre_wepb($nombre){
	return explode(".", trim($nombre))[0] . "." . 'webp';
}

?>