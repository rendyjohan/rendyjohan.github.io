//  var sesi = 0;
var mulai = new Date();
var waktu = document.querySelector(".hitungwaktu");

function rentang() {
    sisa = new Date() - mulai;
    var pembulatanWaktu = Math.round(sisa / 100);
    var detik = (pembulatanWaktu / 10).toFixed(1);
    waktu.innerHTML = detik;
};

setInterval(rentang, 100);