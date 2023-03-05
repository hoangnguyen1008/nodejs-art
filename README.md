From TipsJavascript

--
COMMIT RULES

FEAT : Sử dụng từ khóa này để cho biết rằng bạn đang làm việc trên một tính năng mới.
Thì commit -m
"FEAT: Add new login functionality."
keyword sẽ là: FEAT

Ví dụ sửa lỗi thì như sau
FIX: Sử dụng từ khóa này để cho biết rằng bạn đang tiến hành khắc phục sự cố hoặc vấn đề cụ thể.

"FIX: Fix bug causing crashes on certain devices."

REFACTOR : Sử dụng từ khóa này để cho biết rằng bạn đang thực hiện các thay đổi đối với mã, cải thiện cấu trúc hoặc tổ chức của mã nhưng không thêm tính năng mới hoặc sửa lỗi.
Thì như sau: 

"REFACTOR: Refactor the code to improve readability."

--

Section 2:
- File server.js: chỉ khởi động nodejs
- File app.js: khai báo middleware
- process.on('SIGINT', () => {}) thông báo khi server crash
- Lib:
    - express
    - morgan: show log từ request
    - helmet: che header
    https://www.youtube.com/watch?v=oaTYX01pk-M
    - compression: giảm băng thông response

Section 3:
- Sử dụng Singleton để tạo mongo,
- utils: viết function (vd đổi kiểu dữ liệu, convert...)
- helper:
- check.connect.js: đếm số kết nối mongodb
- check connect quá tải: OS, process
(check clip Làm sao để tăng tốc request trong nodejs)
- Không cần đóng kết nối liên tục trong mongodb. vì mongo tự động mở/đóng. Tuy nhiên có thể tắt manual (SIGINT)
- PoolSize: tập hợp nhóm kết nối có thể tái sử dụng (tương tự với mysql, oracle). VD khi có kết nối thì mongo sẽ kiểm tra nhóm kết nối, nếu có thì sẽ sử dụng kết nối cho yêu cầu mới, nếu không sẽ tạo kết nối mới. -> cải thiện hiệu suất
    - Nếu quá poolsize thì sao: những kết nối quá giới hạn sẽ vào hàng đợi. nhóm kết nối tối đa dựa vào sức mạnh server.
- 1 core kết nối được bao nhiêu: N/A

Section 4: .env và cách kết hợp env và configs 
https://www.youtube.com/watch?v=jnxsMU5hjqs

Section 5:
- Package: mongo snipet for nodejs
    - Auto gen Schema by !dmbg or !dmbgum

