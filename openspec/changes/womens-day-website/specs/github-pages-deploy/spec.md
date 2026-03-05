## ADDED Requirements

### Requirement: Vite config for GitHub Pages
File `vite.config.js` SHALL cấu hình `base` path phù hợp với tên repository trên GitHub để assets load đúng trên GitHub Pages.

#### Scenario: Correct base path
- **WHEN** build production cho GitHub Pages
- **THEN** tất cả assets (CSS, JS, images) MUST load đúng đường dẫn trên github.io

### Requirement: GitHub Actions deploy workflow
Dự án SHALL có file `.github/workflows/deploy.yml` cấu hình tự động build và deploy lên GitHub Pages khi push code lên branch `main`.

#### Scenario: Auto deploy on push
- **WHEN** developer push code lên branch main
- **THEN** GitHub Actions tự động chạy `npm run build` và deploy thư mục `dist/` lên GitHub Pages

#### Scenario: Build failure
- **WHEN** build bị lỗi
- **THEN** workflow MUST báo lỗi và không deploy phiên bản lỗi

### Requirement: Production build script
File `package.json` SHALL có script `build` chạy `vite build` để tạo production build tĩnh trong thư mục `dist/`.

#### Scenario: Successful build
- **WHEN** chạy `npm run build`
- **THEN** tạo ra thư mục `dist/` chứa HTML, CSS, JS tối ưu sẵn sàng deploy
