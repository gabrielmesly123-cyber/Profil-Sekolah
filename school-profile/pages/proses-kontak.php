<?php
// pages/proses-kontak.php

// Panggil file koneksi dari folder php
require_once '../php/process.php';

// Cek apakah tombol submit ditekan
if (isset($_POST['submit_pesan'])) {
    
    // 1. Ambil dan sanitasi data input (Security FR: Sanitasi Data)
    $nama   = htmlspecialchars(mysqli_real_escape_string($koneksi, $_POST['nama']));
    $email  = htmlspecialchars(mysqli_real_escape_string($koneksi, $_POST['email']));
    $subjek = htmlspecialchars(mysqli_real_escape_string($koneksi, $_POST['subjek']));
    $pesan  = htmlspecialchars(mysqli_real_escape_string($koneksi, $_POST['pesan']));
    
    // 2. Query Insert ke tabel contacts
    $query = "INSERT INTO contacts (nama, email, subjek, pesan) 
              VALUES ('$nama', '$email', '$subjek', '$pesan')";
              
    $eksekusi = mysqli_query($koneksi, $query);
    
    // 3. Cek hasil dan berikan feedback
    if ($eksekusi) {
        // Jika berhasil, redirect kembali ke kontak.php dengan pesan sukses
        echo "<script>
                alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
                window.location.href = 'kontak.php';
              </script>";
    } else {
        // Jika gagal
        echo "<script>
                alert('Gagal mengirim pesan. Silakan coba lagi.');
                window.location.href = 'kontak.php';
              </script>";
    }
} else {
    // Jika file diakses langsung tanpa submit form
    header("Location: kontak.php");
    exit();
}
?>