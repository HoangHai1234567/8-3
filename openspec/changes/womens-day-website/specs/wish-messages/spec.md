## ADDED Requirements

### Requirement: Display wish messages
Hệ thống SHALL hiển thị các lời chúc mừng ngày 8/3 dành cho đồng nghiệp nữ. Mỗi lời chúc MUST được trình bày trong một card với border hồng phấn, icon hoa, và animation xuất hiện.

#### Scenario: Wish cards display
- **WHEN** người dùng scroll đến section lời chúc
- **THEN** các wish cards xuất hiện lần lượt với animation stagger (card sau xuất hiện chậm hơn card trước)

#### Scenario: Wish card content
- **WHEN** wish card hiển thị
- **THEN** mỗi card MUST chứa: icon hoa/trái tim, nội dung lời chúc, và background gradient hồng nhẹ

### Requirement: Customizable wish content
Nội dung lời chúc SHALL được lưu trong một file data riêng biệt (ví dụ: `data/wishes.js`) để dễ dàng thay đổi mà không cần sửa component.

#### Scenario: Edit wish content
- **WHEN** người dùng muốn thay đổi lời chúc
- **THEN** chỉ cần sửa file data, không cần sửa code component
