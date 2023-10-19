

let imgBox = document.getElementById('imgBox');
let qrimg = document.getElementById('qrimg');
let input = document.getElementById('input');
let cont = document.getElementById('cont');
let btn = document.getElementById('btn')

function a() {
    qrimg.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value
    imgBox.style.display = "block"
}
btn.onclick = ()=>{
    a()
    
}