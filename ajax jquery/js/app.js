$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();
        id =$('#id').val();
        pelanggan = $("#pelanggan").val();
        pelanggan = $("#alamat").val();
        pelanggan = $("#telp").val();

        if (id == "") {
            insertdata();
        }else {
            updatedata();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

        });

        $("tbody").on("click",".btn-del", function () {
            let id = $(this).attr("data-id");
            deleteData(id);

    });

        $("tbody").on("click",".btn-ubah", function () {
            let id = $(this).attr("data-id");
            $("#titel").html("<p>Ubah Data</p>");
            SelectUpdate(id);

    });

    function selectupdate(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "pos",
            url: "php/selectupdate.php",
            cache:false,
            data: JSON.stringify(datapelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);
        
            }
        });
    }

    function selectdata() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache:false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let No =1;
                $.each(collection, function (key, val) { 
                    out +=`<tr>
                    <td>No</td>
                    <td>${no++}</td>                    
                    <td>${val.pelanggan}</td>                    
                    <td>${val.alamat}</td>                    
                    <td>${val.telp}</td>                    
                    <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan}>DEL</button></td>
                    <td><button type="button" class="btn btn-warning btn-ubah" data-id=${val.idpelanggan}>UBAH</button></td>                    
                    </tr>`;
                });

                $("selector").html(out);

            }
        });
    }

    function insertdata() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            cache:false,
            data: JSON.stringify(datapelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(htmlString);
            }
        });

        selectdata();

    }

    function deletedata(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "pos",
            url: "php/delete.php",
            cache:false,
            data: JSON.stringify(datapelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(htmlString);
            }
        });

        selectdata();
    }

    function updatedata() {
        let dataPelanggan = {
            idpelanggan : idpelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/update.php",
            cache:false,
            data: JSON.stringify(datapelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(htmlString);
            }
        });

        selectdata();

    }

    selectdata();

});