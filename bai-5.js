function bai4() {
    let s = prompt('Nhập một chuỗi: ')

    let message = 'Chuỗi đã nhập: ' + s + '<br>';

    // biến chuỗi thành mảng, phân cách bằng các khoảng trắng (' ')
    let arr = s.split(' ');


    // nếu để nhiều hơn 2 khoảng trắng kề nhau thì split() trả về các chuỗi trống
    // lặp để trừ đi các chuỗi trống
    let count = arr.length;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === ''){
            count--;
        }
    }

   // message += 'Mảng ' + arr + '<br>';
   // message += 'Dài ' + arr.length + '<br>';
   message += 'Số từ ' + count + '<br>';

    document.getElementById('result-4').innerHTML = message;
}
