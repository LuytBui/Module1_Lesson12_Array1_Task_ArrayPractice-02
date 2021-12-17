function bai1(){
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    let html ='';
    for (let row = 0; row < a.length; row ++){
        html +="Row " + row +  ':<br>';
        for (let col = 0; col < a[row].length; col++){
            html +=a[row][col] + '<br>';
        }
    }

    document.getElementById('result-1').innerHTML = html;
}
function anKQBai1(){
    document.getElementById('result-1').innerHTML = '';
}