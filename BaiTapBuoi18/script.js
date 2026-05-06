// Bai 1

// const student = {
//   name: "hoang",
//   parent: {
//     name: "bo hoang",
//   },
// };

// const mentor = { ...student };

// mentor.name = "bang";
// mentor.parent.name = "bo bang";

// console.log(student);
// console.log(mentor);

// ! 1. student.name ko bị thay đổi thành do mentor.name đã sao chép nó vào 1 biến khác -> lúc này  nó đã lưu trữ trong 1 định dạng tham chiếu
// ! 2. student.parent.name bị thay đổi do cả 2 đều cùng trỏ về 1 tham chiếu do mentor là sao chép nông và cần phải sao chép sâu

// Bai 2

// console.log("----------------------");

// const student = {
//   name: "hoang",
//   parent: {
//     name: "bo hoang",
//   },
// };

// const mentor = JSON.parse(JSON.stringify(student));

// mentor.parent.name = "bo bang";

// console.log(student);
// console.log(mentor);

// ! student.parent.name ko bị ảnh hưởng do mentor đã dc sao chép sâu
// ! cách này khác với const mentor = { ...student } do mentor nó sẽ chuyển student thành string -> rồi từ string sẽ chuyển lại thành object từ đó nó sẽ sao chép được dữ liệu parent vào 1 tham chiếu của mentor, còn const mentor = { ...student } chỉ sao chép  được dữ liệu name vào 1 tham chiếu riêng còn parent vẫn dữ nguyên vào tham chiễu cũ

//  Bai 3

console.log("----------------------");

const students = [{ name: "a" }, { name: "b" }];

const newStudents = [...students];

newStudents[0].name = "z";

console.log(students);
console.log(newStudents);

// ! mảng ko bị thay đổi
// ! Phần tử bên có bị thay đổi do cùng 1 kiểu tham chiếu nên students và newStudents có phần tử đầu tiên là a bị thay đổi thành z

console.log("----------------------");

//  Bai 4
const user = {
  name: "hoang",
  address: {
    city: "HN",
    location: {
      lat: 123,
    },
  },
};

const newUser = { ...user };

newUser.address.location.lat = 999;

console.log(user.address.location.lat);

// ! kết quả là 999 do newUser.address.location.lat nó là kiểu sao chép nông nên tham chiếu của nó vẫn trỏ vào user -> user.address.location.lat bị thay thành 999
