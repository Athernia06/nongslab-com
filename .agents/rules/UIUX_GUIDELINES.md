# UI/UX & Design System Guidelines (nongslab.com)

## Design Philosophy
- **Modern & Direct:** Visual bersih, kontras tegas, tanpa ornamentasi tanpa fungsi.
- **Performance First:** Hindari library animasi berat/CSS bloat. Manfaatkan Tailwind utility classes.
- **Mobile-First Responsive:** Semua section wajib optimal di tampilan seluler (360px+) hingga desktop 4K.

## Layout & Components (`src/component/` & `src/component/section/`)
- Gunakan skema layout grid/flexbox yang sudah ada di proyek.
- **Spacing:** Konsisten menggunakan Tailwind spacing scale (misal `py-16 md:py-24` untuk vertical padding antar section).
- **Typography:** Gunakan hierarki heading yang jelas (`h1`, `h2`, `h3`). Jangan meloncat level heading.
- **Buttons & Call-to-Actions:** 
  - Primary CTA: Warna kontras, padding tegas, jelas tujuan tindakan (`href`/`onClick`).
  - Secondary CTA: Outline/ghost button.

## Mobile & Accessibility (a11y)
- Semua elemen interaktif wajib memiliki touch target minimal 44x44px.
- Gambar wajib memiliki atribut `alt` deskriptif (tanpa dekorasi kata berlebihan).
- Kontras warna teks dan latar belakang wajib memenuhi standar WCAG AA.