const Btn = document.getElementById('button');
const block = document.getElementById('showHideSec');

function callBack(e){
    block.hidden = !block.hidden
}

Btn.addEventListener("click", callBack);