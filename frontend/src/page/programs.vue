<template>
  <div>
    <!-- Header Section -->
    <section class="header-section py-1">
      <div class="container py-2 text-center">
        <h1 class="display-4 fw-bold mb-3">
          Program & <span class="text-success">Inovasi</span>
        </h1>
        <p class="lead mx-auto" style="max-width: 700px">
          Berbagai program penelitian dan pemberdayaan masyarakat yang kami
          kembangkan sebagai bentuk aplikasi ilmu pengetahuan untuk solusi
          berkelanjutan.
        </p>
      </div>
    </section>

    <!-- Research Programs Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-success fw-bold mb-4">Program Riset</h2>

        <div class="row g-3">
          <!-- Program Card 1 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Aktif</span
              >
              <img
                src="../assets/image/pertanian-pintar.png"
                class="card-img-top"
                alt="Sistem Pertanian Pintar"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Sistem Pertanian Pintar</h4>
                <h6 class="text-success mb-3">Ketahanan Pangan</h6>
                <p class="card-text">
                  Pengembangan sistem pertanian vertikal terintegrasi IoT untuk
                  optimalisasi produksi pangan di lahan terbatas perkotaan.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/smart-farming"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>

          <!-- Program Card 2 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Tahap Penelitian</span
              >
              <img
                src="../assets/image/limbah.png"
                class="card-img-top"
                alt="Biokonversi Limbah Organik"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Biokonversi Limbah Organik</h4>
                <h6 class="text-success mb-3">Ekonomi Hijau</h6>
                <p class="card-text">
                  Riset teknologi biokonversi untuk mengubah limbah organik
                  menjadi pupuk dan energi terbarukan.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/waste-conversion"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>

          <!-- Program Card 3 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Tahap Pengujian</span
              >
              <img
                src="../assets/image/iklim.png"
                class="card-img-top"
                alt="Perkiraan Iklim untuk Pertanian"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  Perkiraan Iklim untuk Pertanian
                </h4>
                <h6 class="text-success mb-3">Teknologi Pertanian</h6>
                <p class="card-text">
                  Pengembangan model AI untuk analisis dan prediksi pola iklim
                  mikro untuk optimalisasi praktik pertanian.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/climate-prediction"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>
          <!-- Program Card 4 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Aktif</span
              >
              <img
                src="../assets/image/pertanian-pintar.png"
                class="card-img-top"
                alt="Sistem Pertanian Pintar"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Sistem Pertanian Pintar</h4>
                <h6 class="text-success mb-3">Ketahanan Pangan</h6>
                <p class="card-text">
                  Pengembangan sistem pertanian vertikal terintegrasi IoT untuk
                  optimalisasi produksi pangan di lahan terbatas perkotaan.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/smart-farming"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link to="/programs/research" class="btn btn-success px-4">
            Lihat Lainnya
          </router-link>
        </div>
      </div>
    </section>

    <!-- Community Empowerment Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-success fw-bold mb-4">Pemberdayaan Masyarakat</h2>

        <div class="row g-4">
          <!-- Program Card 1 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Tahap Penelitian</span
              >
              <img
                src="../assets/image/pertanian-pintar.png"
                class="card-img-top"
                alt="Sistem Pertanian Pintar"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Sistem Pertanian Pintar</h4>
                <h6 class="text-success mb-3">Ketahanan Pangan</h6>
                <p class="card-text">
                  Pengembangan sistem pertanian vertikal terintegrasi IoT untuk
                  optimalisasi produksi pangan di lahan terbatas perkotaan.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/smart-farming-community"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>

          <!-- Program Card 2 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Aktif</span
              >
              <img
                src="../assets/image/limbah.png"
                class="card-img-top"
                alt="Biokonversi Limbah Organik"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Biokonversi Limbah Organik</h4>
                <h6 class="text-success mb-3">Ekonomi Hijau</h6>
                <p class="card-text">
                  Riset teknologi biokonversi untuk mengubah limbah organik
                  menjadi pupuk dan energi terbarukan.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/waste-conversion-community"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>

          <!-- Program Card 3 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Tahap Pengujian</span
              >
              <img
                src="../assets/image/iklim.png"
                class="card-img-top"
                alt="Perkiraan Iklim untuk Pertanian"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">
                  Perkiraan Iklim untuk Pertanian
                </h4>
                <h6 class="text-success mb-3">Teknologi Pertanian</h6>
                <p class="card-text">
                  Pengembangan model AI untuk analisis dan prediksi pola iklim
                  mikro untuk optimalisasi praktik pertanian.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/climate-prediction-community"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>
          <!-- Program Card 4 -->
          <div class="col-md-3">
            <div
              class="card h-100 border-0 shadow-sm position-relative"
              style="background-color: #f8ffe7"
            >
              <span
                class="badge bg-success position-absolute end-0 m-3 px-3 py-2"
                >Aktif</span
              >
              <img
                src="../assets/image/pertanian-pintar.png"
                class="card-img-top"
                alt="Sistem Pertanian Pintar"
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Sistem Pertanian Pintar</h4>
                <h6 class="text-success mb-3">Ketahanan Pangan</h6>
                <p class="card-text">
                  Pengembangan sistem pertanian vertikal terintegrasi IoT untuk
                  optimalisasi produksi pangan di lahan terbatas perkotaan.
                </p>
              </div>
              <div
                class="card-footer border-0 pb-3"
                style="background-color: #f8ffe7"
              >
                <router-link
                  to="/programs/smart-farming"
                  class="btn btn-outline-success"
                >
                  Pelajari Selanjutnya
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link to="/programs/community" class="btn btn-success px-4">
            Lihat Lainnya
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.header-section {
  background-color: #f9e94e;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.badge {
  z-index: 2;
  font-weight: 500;
}
</style>
