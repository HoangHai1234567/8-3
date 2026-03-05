## ADDED Requirements

### Requirement: Loading screen animation
Hệ thống SHALL hiển thị một loading screen với animation hoa nở khi lần đầu truy cập website. Loading screen SHALL tự động ẩn sau khi tất cả assets đã load xong hoặc sau tối đa 3 giây.

#### Scenario: First visit loading
- **WHEN** người dùng truy cập website lần đầu
- **THEN** hiển thị loading screen với animation hoa hồng nở, background màu hồng phấn

#### Scenario: Loading complete
- **WHEN** tất cả assets đã load xong hoặc đã qua 3 giây
- **THEN** loading screen fade out mượt mà, hiển thị nội dung chính

### Requirement: Header with 8/3 title
Trang chủ SHALL hiển thị tiêu đề lớn "Chúc Mừng Ngày Quốc Tế Phụ Nữ 8/3" với font chữ nữ tính, animation xuất hiện từ từ. Bên dưới tiêu đề MUST có subtitle với lời chúc ngắn gọn.

#### Scenario: Title display
- **WHEN** loading screen hoàn tất
- **THEN** tiêu đề "Chúc Mừng Ngày Quốc Tế Phụ Nữ 8/3" xuất hiện với animation fade-in và scale-up

#### Scenario: Responsive title
- **WHEN** xem trên mobile (width < 768px)
- **THEN** tiêu đề SHALL tự động resize phù hợp màn hình, không bị tràn

### Requirement: Single page scroll layout
Trang chủ SHALL sử dụng layout single page scroll, các section nối tiếp nhau theo thứ tự: Header → Lời chúc → Gallery → Footer.

#### Scenario: Smooth scroll navigation
- **WHEN** người dùng scroll xuống
- **THEN** các section xuất hiện với animation fade-in khi vào viewport
