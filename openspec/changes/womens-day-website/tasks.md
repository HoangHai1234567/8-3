## 1. Project Setup

- [x] 1.1 Khởi tạo dự án React + Vite với template react
- [x] 1.2 Cài đặt dependencies: tailwindcss, postcss, autoprefixer, animejs, react-confetti, react-icons, react-bootstrap, bootstrap
- [x] 1.3 Cấu hình Tailwind CSS với color palette hồng phấn custom
- [x] 1.4 Tạo cấu trúc thư mục: components/, pages/, assets/photos/, assets/music/, data/
- [x] 1.5 Setup file index.css với global styles và font chữ nữ tính (Google Fonts)

## 2. Loading Screen & Header

- [x] 2.1 Tạo component LoadingScreen.jsx với animation hoa nở, tự động ẩn sau 3 giây
- [x] 2.2 Tạo component Header.jsx với tiêu đề "Chúc Mừng Ngày Quốc Tế Phụ Nữ 8/3", animation fade-in scale-up
- [x] 2.3 Responsive tiêu đề cho mobile

## 3. Visual Effects

- [x] 3.1 Tạo component FlowerParticles.jsx - hiệu ứng cánh hoa rơi liên tục, giảm particles trên mobile
- [x] 3.2 Tạo component Confetti.jsx - hiệu ứng confetti 5 giây khi load xong, tông hồng/đỏ/vàng
- [x] 3.3 Implement scroll-triggered animations với Intersection Observer cho các section

## 4. Wish Messages

- [x] 4.1 Tạo file data/wishes.js chứa nội dung lời chúc 8/3
- [x] 4.2 Tạo component WishMessage.jsx hiển thị wish cards với icon hoa, border hồng, animation stagger

## 5. Photo Gallery

- [x] 5.1 Tạo ảnh placeholder trong assets/photos/
- [x] 5.2 Tạo component PhotoGallery.jsx với grid responsive (3 cột desktop, 2 tablet, 1 mobile)
- [x] 5.3 Thêm hover effect scale + shadow cho ảnh

## 6. Music Player

- [x] 6.1 Tạo component MusicPlayer.jsx với nút bật/tắt nhạc nền ở góc trên phải
- [x] 6.2 Đảm bảo nhạc không autoplay, chỉ phát khi user click

## 7. Page Assembly

- [x] 7.1 Tạo page Home.jsx tổng hợp tất cả components theo thứ tự: Loading → Header → Wishes → Gallery → Footer
- [x] 7.2 Cập nhật App.jsx và App.css với layout chính, background hồng phấn
- [x] 7.3 Tạo component Footer.jsx đơn giản

## 8. GitHub Pages Deploy

- [x] 8.1 Cấu hình vite.config.js với base path cho GitHub Pages
- [x] 8.2 Tạo file .github/workflows/deploy.yml cho auto deploy
- [x] 8.3 Cập nhật package.json với scripts build và preview
