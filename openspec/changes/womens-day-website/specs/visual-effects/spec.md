## ADDED Requirements

### Requirement: Flower falling particles
Hệ thống SHALL hiển thị hiệu ứng hoa hồng/cánh hoa rơi liên tục trên toàn trang. Các cánh hoa MUST rơi từ trên xuống với tốc độ và vị trí ngẫu nhiên.

#### Scenario: Flower particles on load
- **WHEN** trang web đã load xong
- **THEN** các cánh hoa bắt đầu rơi từ trên xuống, mỗi cánh hoa có kích thước, tốc độ rơi, và độ xoay ngẫu nhiên

#### Scenario: Performance on mobile
- **WHEN** xem trên thiết bị mobile
- **THEN** số lượng particles SHALL giảm xuống (tối đa 15 particles) để đảm bảo hiệu năng

### Requirement: Confetti celebration effect
Hệ thống SHALL hiển thị hiệu ứng confetti khi trang vừa load xong (sau loading screen). Confetti MUST sử dụng tông màu hồng, đỏ, vàng.

#### Scenario: Confetti on page load
- **WHEN** loading screen kết thúc
- **THEN** confetti bắn ra trong 5 giây với màu hồng, đỏ, vàng gold

### Requirement: Scroll-triggered animations
Các section MUST có animation xuất hiện khi scroll vào viewport. Sử dụng Intersection Observer API.

#### Scenario: Section enters viewport
- **WHEN** một section scroll vào viewport
- **THEN** section đó fade-in và slide-up nhẹ nhàng
