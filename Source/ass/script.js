$(document).ready(function(){
    var dataIDs = {
        "async": true,
        "crossDomain": true,
        "url": "https://indonesia-covid-19.mathdro.id/api",
        "method": "GET",
    }
    $.ajax(dataIDs).done(function (response) {
        $('#positifid').html(response.jumlahKasus);
        $('#sembuhid').html(response.sembuh);
        $('#meninggalid').html(response.meninggal);
    });
    var dataHarianIDs = {
        "async": true,
        "crossDomain": true,
        "url": "https://indonesia-covid-19.mathdro.id/api/harian",
        "method": "GET",
    }
    $.ajax(dataHarianIDs).done(function (response) {
        var date = new Date (response.data[response.data.length-1].tanggal)
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = ("0" + date.getHours()).slice(-2);
        var menit = ("0" + date.getMinutes()).slice(-2);
        var detik = ("0" + date.getSeconds()).slice(-2);
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum'at"; break;
            case 6: hari = "Sabtu"; break;
        }
        switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
        var tanggal = hari + ", " + tanggal + " " + bulan + " " + tahun ;
        $('#terakhirupdate').html(tanggal);
        $('#positifharianid').html('+'+response.data[response.data.length-1].jumlahKasusBaruperHari);
        $('#sembuhharianid').html('+'+response.data[response.data.length-1].jumlahKasusSembuhperHari);
        $('#meninggalharianid').html('+'+response.data[response.data.length-1].jumlahKasusMeninggalperHari);
    });
});
