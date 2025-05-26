-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Bulan Mei 2025 pada 17.20
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sustainovata-db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `jurnal`
--

CREATE TABLE `jurnal` (
  `ID_jurnal` int(25) NOT NULL,
  `title` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `keyword` varchar(255) NOT NULL,
  `abstract` text NOT NULL,
  `doi` varchar(255) NOT NULL,
  `file` text NOT NULL,
  `cover_image` text DEFAULT NULL,
  `date_published` date NOT NULL,
  `date_upload` date NOT NULL DEFAULT current_timestamp(),
  `FK_ID_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `jurnal`
--

INSERT INTO `jurnal` (`ID_jurnal`, `title`, `writer`, `keyword`, `abstract`, `doi`, `file`, `cover_image`, `date_published`, `date_upload`, `FK_ID_user`) VALUES
(16, 'testing', 'tes', 'tes', 'tes', 'tes', '1748125077111-dplt1.pdf', '1748124937964-code.png', '2025-04-30', '2025-05-25', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `ID_news` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `kategori` text NOT NULL,
  `ringkasan` text NOT NULL,
  `text` text NOT NULL,
  `cover` varchar(255) NOT NULL,
  `date_published` date NOT NULL,
  `date_upload` date NOT NULL DEFAULT current_timestamp(),
  `FK_ID_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`ID_news`, `title`, `kategori`, `ringkasan`, `text`, `cover`, `date_published`, `date_upload`, `FK_ID_user`) VALUES
(4, 'testing anjing', 'tes asuii', 'tes anjing', 'tes bangkek', '1748127785498-terra_brain_logo.png', '2025-05-24', '2025-05-25', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `peserta_programs`
--

CREATE TABLE `peserta_programs` (
  `ID_user` int(11) NOT NULL,
  `ID_Porogram` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `programs`
--

CREATE TABLE `programs` (
  `ID_program` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `peserta` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `poster` text NOT NULL,
  `add_date` date NOT NULL DEFAULT current_timestamp(),
  `Jenis_program` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `programs`
--

INSERT INTO `programs` (`ID_program`, `name`, `status`, `description`, `peserta`, `start_date`, `end_date`, `poster`, `add_date`, `Jenis_program`) VALUES
(8, 'berburu tikus di kantor dpr', 'Pendaftaran', 'berburu tikus di kantor dpr ri yang paling banyak bakal mendapatkan hadiah dengan total hadiah Rp100.000.000\r\ndi bagi ', 6, '2025-05-09', '2025-05-15', '1748129166170-novelku logo.png', '2025-05-25', 'perburuan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `ID_user` int(25) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`ID_user`, `name`, `username`, `email`, `telephone`, `password`, `address`, `role`) VALUES
(8, 'bee dev', NULL, 'bee@dev.com', NULL, '$2b$10$9KCA/qtpMygoYDJKF.RHku7uZokkfrQFgHMcL0gjpjdgwIdvrCvyy', NULL, 'dev'),
(10, 'Hasbi', NULL, 'has@gamil.com', '09828828221212', '$2b$10$2KEOUPkYXx8QhUc92T9A9OgDOHbAgPIoC7NlSwWaWTJByGb9oed6K', 'jalan skywalker no 949\nkakakalala', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `jurnal`
--
ALTER TABLE `jurnal`
  ADD PRIMARY KEY (`ID_jurnal`);

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`ID_news`);

--
-- Indeks untuk tabel `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`ID_program`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `jurnal`
--
ALTER TABLE `jurnal`
  MODIFY `ID_jurnal` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `ID_news` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `programs`
--
ALTER TABLE `programs`
  MODIFY `ID_program` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `ID_user` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
