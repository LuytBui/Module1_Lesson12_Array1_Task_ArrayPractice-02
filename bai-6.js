function bai5() {
    let s1 = prompt('Nhập chuỗi thứ nhất: ')
    let s2 = prompt('Nhập chuỗi thứ hai: ')

    let message = 'Chuỗi thứ nhất: ' + s1 + '<br>';
    message += 'Chuỗi thứ hai: ' + s2 + '<br>';

    let isIdentical;
    if (s1.length == s2.length){
        isIdentical = true;
        for (let i = 0; i<s1.length; i++){
            if (s1[i] !== s2[i]){
                isIdentical = false;
                return
            }
        }

    } else {
        isIdentical = false;
    }
    message += isIdentical ? 'Hai chuỗi trên là giống nhau':
                'Hai chuỗi trên là khác nhau';


    document.getElementById('result-5').innerHTML = message;
    document.getElementById('result-5').scrollIntoView();

}
