B1: tạo file i18n.json và copy

"locales": ["en-US", "vi-VN", "en"],
"defaultLocale": "vi-VN",
"pages": {
"\*": ["common"], Lưu ý: trước dấu \* không có \, format code tự thêm \ vào khi lưu
"/about": ["about"]
}

pages, locales và defaultLocale có thể đổi theo ý muốn

B2: Mở Terminal cài đặt next translate bằng npm install next-translate
B3: Mở next.config.js và copy

const nextTranslate = require("next-translate");

module.exports = {
...nextTranslate(),
};

B4: Tạo folder locales với các folder bé cùng ngôn ngữ mình muốn và file dịch theo ngôn ngữ mình chọn
B5: sử dụng function t để dịch

let { t } = useTranslation();
