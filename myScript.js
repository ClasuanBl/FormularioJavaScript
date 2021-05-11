let form = document.getElementById('form');


form.addEventListener('submit',(event) => {
    event.preventDefault();
    runAjax();
})

function runAjax(){
    //iniciamos el objeto xhr
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //cargamos la petición
    xhr.open("POST","controller.php");

    const formData = new FormData(form);

    //enviar la petición
    xhr.send(formData);
//hasta aquí tengo la función ajax ahora tengo que configurar para que al dar submit envie
}
