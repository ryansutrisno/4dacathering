# 🍗 4DA Cathering

**Aroma Bakar Otentik, Warisan Tradisi**

Proyek ini dibangun menggunakan [Astro](https://astro.build) dan [TailwindCSS](https://tailwindcss.com), untuk menampilkan katalog produk dan layanan 4DA Cathering.

## ✨ Fitur

- 🚀 **Astro Framework** - Static site generation yang cepat dan ringan
- 🎨 **TailwindCSS** - Styling framework yang mudah dan konsisten
- 🔄 **CI/CD Ready** - GitHub workflows untuk auto release & changelog (menggunakan Semantic Release)

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)

## 📁 Project Structure

```
4da-cathering/
├── .github/
│   └── workflows/
│       └── release.yml      # Auto create release dari tag
├── src/                     # Source code (komponen, halaman Astro)
├── public/                  # Static assets
├── .releaserc.json          # Konfigurasi semantic-release
├── astro.config.mjs         # Astro config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
# Development server dengan hot reload
npm run dev

# Open browser
open http://localhost:4321
```

## 📦 Deployment & Release Workflow

Proyek ini menggunakan `semantic-release` untuk manajemen versi secara otomatis.

Auto-release akan dipicu saat Anda melakukan *push* ke branch `main`. Pastikan *commit message* menggunakan format **Conventional Commits**:
- `feat: ...` -> Update versi minor (misal: 1.0.0 -> 1.1.0)
- `fix: ...` -> Update versi patch (misal: 1.0.0 -> 1.0.1)

Silakan lihat file [RELEASE.md](RELEASE.md) untuk informasi lebih rinci terkait alur rilis.
