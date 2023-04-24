
  var attr = $("selector").attr('name');
if (typeof attr !== typeof undefined && attr !== false) {
  console.log('co thuoc tinh') // Có thuộc tính name
}
else {
    console.log('khong thuoc tinh') // không có thuộc tính name
}

// if ($("selector")[0].hasAttribute('name')) {
//     // có thuộc tính name
// }
// else {
//   // không có thuộc tính name
// }