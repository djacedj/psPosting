<?php

if ( !empty( $_FILES ) ) {

    // obtenemos los datos del archivo
    $tamano = $_FILES["file"]['size'];
    $tipo = $_FILES["file"]['type'];
    $archivo = $_FILES["file"]['name'];
    $prefijo = substr(md5(uniqid(rand())),0,6);

    if ($archivo != "") {
        // guardamos el archivo a la carpeta files
        $destino =  "uploads/".$prefijo."_".$archivo;
        if (copy($_FILES['file']['tmp_name'],$destino)) {
            $answer = array( 'answer' => 'File transfer completed' );
        } else {
            $answer = array( 'answer' => 'Error uploading file' );
        }
    } else {
        $answer = array( 'answer' => 'Error uploading file' );
    }

    $json = json_encode( $answer );

    echo $json;

} else {

    echo 'No files';

}

?>