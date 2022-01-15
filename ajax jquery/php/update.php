<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $data_pelanggan = json_decode($data,true);

    $pelanggan = $datapelanggan['pelanggan'];
    $alamat = $datapelanggan['alamat'];
    $telp = $datapelanggan['telp'];

    if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {

        $sql ="UPDATE tblpelanggan
        SET pelanggan = '$pelanggan',
        alamat = '$alamat', 
        telp = '$telp', 
        WHERE idpelanggan=$idpelanggan";

        if ($result = mysqli_connect($con,$sql);) {
            echo "data sudah diubah";
        }else {
            echo "data gagal diubah";
        }

    }else {
        echo "data kosong";
    }

?>