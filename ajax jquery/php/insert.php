<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $data_pelanggan = json_decode($data,true);

    $pelanggan = $datapelanggan['pelanggan'];
    $alamat = $datapelanggan['alamat'];
    $telp = $datapelanggan['telp'];

    if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {

        $sql ="INSERT INTO tblpelanggan VALUES('','$pelanggan','$alamat','$telp')";
        if ($result = mysqli_connect($con,$sql);) {
            echo "data sudah disimpan";
        }else {
            echo "data gagal disimpan";
        }

    }else {
        echo "data kosong";
    }

?>