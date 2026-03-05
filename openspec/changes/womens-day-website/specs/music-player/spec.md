## ADDED Requirements

### Requirement: Background music toggle
Hệ thống SHALL có nút bật/tắt nhạc nền ở góc trên bên phải. Nút MUST hiển thị icon nhạc và trạng thái hiện tại (đang phát hoặc tắt).

#### Scenario: First visit - music off
- **WHEN** người dùng truy cập lần đầu
- **THEN** nhạc MUST không tự động phát (để tuân thủ browser autoplay policy), hiển thị nút play

#### Scenario: Toggle music on
- **WHEN** người dùng click nút play
- **THEN** nhạc nền bắt đầu phát, icon chuyển sang trạng thái "đang phát" với animation

#### Scenario: Toggle music off
- **WHEN** người dùng click nút pause khi nhạc đang phát
- **THEN** nhạc dừng lại, icon chuyển sang trạng thái "tắt"

### Requirement: Music file configuration
File nhạc nền SHALL được đặt trong `src/assets/music/` và import trong component. Hỗ trợ định dạng mp3.

#### Scenario: Custom music file
- **WHEN** người dùng thay file nhạc trong thư mục assets/music
- **THEN** website phát bài nhạc mới mà không cần sửa code
