function bai3() {
    let a = ['c', 's', '0', 'c', '2', '6', '1', 'c', '4', '9', '7', 'c'];

    let message = 'Mảng đã cho: ' + a + '<br>';


    // lặp để đếm số kí tự số
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(parseFloat(a[i]))) {
            count++;
        }
    }
    message += 'Số kí tự số: ' + count;

    document.getElementById('result-3').innerHTML = message;
}
