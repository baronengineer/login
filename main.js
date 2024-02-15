document.addEventListener('DOMContentLoaded', function() {
    // Mengaktifkan tombol masuk secara default
    var remove = document.querySelector('.inner-column1');
    var remove1 = document.querySelector('.inner-column');
    var buttonLogin = document.querySelector('.button-login');
    buttonLogin.classList.add('active');
    remove.style.display = 'none';

    // Menambahkan event listener untuk mengubah status tombol
    buttonLogin.addEventListener('click', function() {
        this.classList.add('active');
        document.querySelector('.button-register').classList.remove('active');
        if(remove1){
            remove1.style.display = 'block'; // Mengganti remove() dengan menyembunyikan elemen
            remove.style.display = 'none'; // Mengganti remove() dengan menyembunyikan elemen
        }
    });

    document.querySelector('.button-register').addEventListener('click', function() {
        this.classList.add('active');
        document.querySelector('.button-login').classList.remove('active');
        // Menambahkan kembali elemen yang dihapus
        if (remove) {
            remove.style.display = 'block'; // Menampilkan kembali elemen
            remove1.style.display = 'none';
        }
    });
});
