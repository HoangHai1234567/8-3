## Context

Dự án mới tạo website chúc mừng ngày Quốc tế Phụ nữ 8/3, tặng đồng nghiệp nữ. Tham khảo cấu trúc từ template GFBD - một birthday website React + Vite đã được build thành công. Website cần theme hồng phấn, cute, nữ tính và deploy trên GitHub Pages.

## Goals / Non-Goals

**Goals:**
- Tạo SPA React + Vite với theme hồng phấn đẹp mắt, nữ tính
- Hiệu ứng animation mượt mà: hoa rơi, confetti, particles
- Responsive trên cả mobile và desktop
- Dễ dàng customize nội dung (lời chúc, ảnh)
- Deploy tự động lên GitHub Pages qua GitHub Actions

**Non-Goals:**
- Không cần backend/database
- Không cần đăng nhập/xác thực
- Không cần guestbook hay tính năng tương tác 2 chiều
- Không cần dark mode (giữ theme hồng cố định)
- Không cần memory game hay các mini game

## Decisions

### 1. Tech Stack: React + Vite + Tailwind CSS
**Rationale**: Giống template GFBD đã hoạt động tốt. Vite cho build nhanh, Tailwind cho styling linh hoạt với theme hồng phấn.
**Alternative**: Next.js (quá nặng cho static site), vanilla HTML/CSS (khó maintain animations).

### 2. Animation Library: anime.js + react-confetti
**Rationale**: anime.js nhẹ, mạnh cho timeline animation. react-confetti cho hiệu ứng celebration.
**Alternative**: Framer Motion (nặng hơn), GSAP (license phức tạp hơn).

### 3. Component Architecture
```
src/
├── components/
│   ├── LoadingScreen.jsx      # Màn hình loading với animation hoa
│   ├── Header.jsx             # Tiêu đề "Chúc Mừng 8/3"
│   ├── WishMessage.jsx        # Section lời chúc
│   ├── PhotoGallery.jsx       # Gallery ảnh đồng nghiệp
│   ├── FlowerParticles.jsx    # Hiệu ứng hoa rơi
│   ├── Confetti.jsx           # Hiệu ứng confetti
│   ├── MusicPlayer.jsx        # Nút bật/tắt nhạc nền
│   └── Footer.jsx             # Footer
├── pages/
│   └── Home.jsx               # Trang chính tổng hợp components
├── assets/                    # Ảnh, nhạc, fonts
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### 4. Color Palette
**Rationale**: Tông hồng phấn pastel, cute, nữ tính.
- Primary: `#FFB6C1` (Light Pink)
- Secondary: `#FF69B4` (Hot Pink)
- Background: `#FFF0F5` (Lavender Blush)
- Accent: `#FFD700` (Gold - cho highlight)
- Text: `#4A4A4A` (Dark gray cho readability)

### 5. Hosting: GitHub Pages với GitHub Actions
**Rationale**: Miễn phí, dễ setup, phù hợp static site.
Sử dụng `gh-pages` branch hoặc GitHub Actions workflow với Vite build.

## Risks / Trade-offs

- **[Hiệu ứng nặng trên mobile cũ]** → Giới hạn số lượng particles, dùng `requestAnimationFrame` thay `setInterval`
- **[Ảnh chưa có sẵn]** → Dùng placeholder, người dùng tự thay ảnh sau
- **[Nhạc autoplay bị browser block]** → Chỉ play nhạc sau user interaction (click), hiển thị nút play/pause
- **[Base path GitHub Pages]** → Cấu hình `base` trong `vite.config.js` cho đúng repo name
