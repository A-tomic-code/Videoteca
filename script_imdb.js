const db = new Imdb();

function add(){

    let duracion_scroll = 1000;

    let pelicula = db.nuevoRegistro()

    jQuery(() => {
        $('html').animate({
            scrollTop: 0
        }, duracion_scroll);
    });

    setTimeout(() => {
        jQuery(() =>{
            $('.cards').append(pelicula).hide().fadeIn(duracion_scroll / 2)
            $('#collapseDirector').css('background-image', imagen_director)
        });
    }, duracion_scroll);


} 

function transicion(link){
    window.location = link
}

/// PROGRAMA PRINCPAL

jQuery(() => {

    $('document').ready(() => {
        $('body').css('display', 'none')
        $('body').fadeIn(200)
    });


    $('a.transicion').click((event) => {
        let link = event.target.href;

        $('body').fadeOut(1000, transicion(link));        
    })
});




//Funcion debug

function ver(obj){
    console.log(obj.files[0]);
}