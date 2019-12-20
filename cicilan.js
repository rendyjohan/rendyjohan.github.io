function promoCicilan() {
    var jumlahOrder = document.getElementById("jumlahorder").value;
    var jangkaCicilan = document.getElementById("jangkacicil").value;
    var metodeBayar = document.getElementById("metodebayar").value;

    if (jumlahOrder === "" || metodeBayar == 0) {
        alert("Input terlebih dahulu jumlah pesanan Anda");
        return;
    }
    if (jangkaCicilan === "" || jangkaCicilan <= 1 || jangkaCicilan > 12) {
        jangkaCicilan = 1;
        document.getElementById("tiap").style.display = "none";
    } else {
        document.getElementById("tiap").style.display = "block";
    }

    var total = (jumlahOrder - (metodeBayar * jumlahOrder)) / jangkaCicilan;
    total = Math.round(total);
    total = total.toFixed(0);
    document.getElementById("jumlahbayar").style.display = "block";
    document.getElementById("bayar").innerHTML = total;
}

document.getElementById("jumlahbayar").style.display = "none";
document.getElementById("tiap").style.display = "none";
document.getElementById("hitung").onclick = function () {
    promoCicilan();
};