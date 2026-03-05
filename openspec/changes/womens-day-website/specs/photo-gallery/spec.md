## ADDED Requirements

### Requirement: Photo gallery grid
Hệ thống SHALL hiển thị gallery ảnh dưới dạng grid responsive. Trên desktop hiển thị 3 cột, tablet 2 cột, mobile 1 cột. Mỗi ảnh MUST có border-radius bo tròn và shadow nhẹ.

#### Scenario: Desktop grid layout
- **WHEN** xem trên màn hình desktop (width >= 1024px)
- **THEN** gallery hiển thị 3 cột ảnh với gap đều nhau

#### Scenario: Mobile grid layout
- **WHEN** xem trên mobile (width < 768px)
- **THEN** gallery hiển thị 1 cột ảnh full width

### Requirement: Photo hover effect
Mỗi ảnh trong gallery SHALL có hiệu ứng hover: scale up nhẹ và tăng shadow.

#### Scenario: Hover on photo
- **WHEN** người dùng hover chuột lên ảnh
- **THEN** ảnh scale lên 1.05 với transition mượt mà và shadow tăng

### Requirement: Placeholder images
Gallery SHALL sử dụng ảnh placeholder mặc định. Người dùng có thể thay thế bằng ảnh thật trong thư mục `src/assets/photos/`.

#### Scenario: Default placeholder
- **WHEN** chưa có ảnh thật
- **THEN** hiển thị ảnh placeholder với text hướng dẫn thay ảnh
