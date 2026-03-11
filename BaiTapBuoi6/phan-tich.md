câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?

- inline css có độ ưu tiên cao nhất.

câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?

- #main sẽ thắng vì id nó có độ ưu tiên cao hơn class và thẻ tag

câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?

- kết quả sẽ là phần tử có màu chữ là màu hồng bởi inline css có độ ưu tiên cao nhất

câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?

- vì khi chúng ta khai báo thẻ link html sẽ đọc từ trên xuống tức là để theme.css có thể override style từ base.css thì cúng ta phải cho base.css trước theme.css

Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.

- vì class .title bị override từ 1 file css khác có cùng tên class

Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.

- phần tử h1 trong file dashboard có độ phức tạp cao nhất
- có internal css \*{} có màu #ccc
- có inline style có màu springgreen
- có class title (từ file theme và base)
- có id special (từ file theme và base)
  --> inline style thắng bởi nó có độ ưu tiên cao nhất
