// Array untuk menyimpan daftar produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];


// Fungsi untuk menambahkan produk
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);

    console.log("Produk berhasil ditambahkan!");
}


// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);

    if (index !== -1) {
        produkToko.splice(index, 1);
        console.log("Produk berhasil dihapus!");
    } else {
        console.log("Produk dengan ID " + id + " tidak ditemukan.");
    }
}


// Fungsi untuk menampilkan semua produk
function tampilkanProduk() {
    console.log("=== DAFTAR PRODUK TOKO ===");

    produkToko.forEach(function(produk) {
        console.log(
            "ID: " + produk.id +
            " | Nama: " + produk.nama +
            " | Harga: Rp" + produk.harga +
            " | Stok: " + produk.stok
        );
    });
}


// Menampilkan produk awal
tampilkanProduk();


// Menambahkan produk baru
tambahProduk("Headset", 500000, 8);

// Menampilkan produk setelah ditambahkan
tampilkanProduk();


// Menghapus produk dengan ID 2
hapusProduk(2);

// Menampilkan produk setelah dihapus
tampilkanProduk();