function modal() {
    document.getElementById('modal').style.display = 'block'
    let a = document.getElementsByClassName('modal-main')[0]
    a.style.animation = "modalTop";
    a.style.animationDuration =  "0.2s";
    a.style.animationFillMode =  "forwards";
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none'

    
}
