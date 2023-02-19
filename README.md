From TipsJavascript

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
