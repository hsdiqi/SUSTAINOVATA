<template>
  <div>
    <!-- Header Section -->
    <section class="header-section py-5">
      <div class="container py-4 text-center">
        <h1 class="display-4 fw-bold text-success mb-3">Berita Tentang Kami</h1>
        <p class="lead mx-auto" style="max-width: 700px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam vehicula, facilisis urna non, egestas ipsum. Mauris ultricies viverra.
        </p>
      </div>
    </section>
    
    <!-- News Articles Section -->
    <section class="py-5">
      <div class="container">
        <!-- News Article 1 -->
        <div class="card mb-4 border-0 shadow-sm">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="../assets/image/pertanian-pintar.png" class="img-fluid rounded-start h-100 w-100 object-fit-cover" alt="Smart Farming">
            </div>
            <div class="col-md-9">
              <div class="card-body p-4">
                <h3 class="card-title text-success fw-bold">Program Pertanian Pintar Mulai Dijalankan di Wilayah Malang</h3>
                <p class="text-muted mb-1">Sustainovata.news</p>
                <p class="text-muted small mb-3">
                  <i class="bi bi-calendar me-1"></i> 12 Desember 2024
                </p>
                <p class="card-text">
                  Pemerintah daerah bersama sejumlah mitra riset dan komunitas lokal resmi meluncurkan Program Pertanian Pintar di beberapa kecamatan di wilayah Malang sebagai bagian dari upaya mendorong transformasi pertanian berkelanjutan berbasis teknologi.
                </p>
                <router-link to="/news/1" class="text-decoration-none text-success">
                  Baca selengkapnya <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- News Article 2 -->
        <div class="card mb-4 border-0 shadow-sm">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="../assets/image/dokuemntasi-1.png" class="img-fluid rounded-start h-100 w-100 object-fit-cover" alt="Community">
            </div>
            <div class="col-md-9">
              <div class="card-body p-4">
                <h3 class="card-title text-success fw-bold">News Title</h3>
                <p class="text-muted mb-1">Publisher</p>
                <p class="text-muted small mb-3">
                  <i class="bi bi-calendar me-1"></i> 12 Desember 2024
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sollicitudin turpis. Etiam fringilla ultricies tincidunt. Proin et eleifend felis, vel scelerisque nibh. Suspendisse porttitor, lacus ut fringilla rutrum, magna velit pellentesque ipsum, sit amet tempor nunc nisi at leo. In pulvinar eget nulla in feugiat. Donec ullamcorper posuere enim.
                </p>
                <router-link to="/news/2" class="text-decoration-none text-success">
                  Baca selengkapnya <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- News Article 3 -->
        <div class="card mb-4 border-0 shadow-sm">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="../assets/image/dokumentasi-2.png" class="img-fluid rounded-start h-100 w-100 object-fit-cover" alt="Team">
            </div>
            <div class="col-md-9">
              <div class="card-body p-4">
                <h3 class="card-title text-success fw-bold">News Title</h3>
                <p class="text-muted mb-1">Publisher</p>
                <p class="text-muted small mb-3">
                  <i class="bi bi-calendar me-1"></i> 12 Desember 2024
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sollicitudin turpis. Etiam fringilla ultricies tincidunt. Proin et eleifend felis, vel scelerisque nibh. Suspendisse porttitor, lacus ut fringilla rutrum, magna velit pellentesque ipsum, sit amet tempor nunc nisi at leo. In pulvinar eget nulla in feugiat. Donec ullamcorper posuere enim.
                </p>
                <router-link to="/news/3" class="text-decoration-none text-success">
                  Baca selengkapnya <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- News Article 4 -->
        <div class="card mb-4 border-0 shadow-sm">
          <div class="row g-0">
            <div class="col-md-3">
              <img src="@/assets/image/dokumentasi-3.png" class="img-fluid rounded-start h-100 w-100 object-fit-cover" alt="Education">
            </div>
            <div class="col-md-9">
              <div class="card-body p-4">
                <h3 class="card-title text-success fw-bold">News Title</h3>
                <p class="text-muted mb-1">Publisher</p>
                <p class="text-muted small mb-3">
                  <i class="bi bi-calendar me-1"></i> 12 Desember 2024
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sollicitudin turpis. Etiam fringilla ultricies tincidunt. Proin et eleifend felis, vel scelerisque nibh. Suspendisse porttitor, lacus ut fringilla rutrum, magna velit pellentesque ipsum, sit amet tempor nunc nisi at leo. In pulvinar eget nulla in feugiat. Donec ullamcorper posuere enim.
                </p>
                <router-link to="/news/4" class="text-decoration-none text-success">
                  Baca selengkapnya <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <nav aria-label="News pagination" class="mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.header-section {
  background-color: #f9e94e;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.object-fit-cover {
  object-fit: cover;
}

.page-link {
  color: #198754;
}

.page-item.active .page-link {
  background-color: #198754;
  border-color: #198754;
}
</style>