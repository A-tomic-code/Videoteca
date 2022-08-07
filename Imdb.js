class Imdb {
    constructor() {
        this.movies = [];
    }

    getDirector() {
        let name = document.querySelector('#nombre_director').value;
        let age = document.querySelector('#edad_director').value;
        let genre = document.querySelector('#genero_director').value;
        let weight = document.querySelector('#peso_director').value;
        let height = document.querySelector('#altura_director').value;
        let eyeColor = document.querySelector('#color_ojos_director').value;
        let race = document.querySelector('#raza_director').value;

        let isRetired = false;
        if (document.querySelector('#retirado_director').checked) {
            isRetired = true;
        }

        let nationality = document.querySelector('#nacionalidad_director').value;

        return new Professional(name, age, genre, weight, height, eyeColor, race, isRetired, nationality, 55, 'Director')
    }

    getProtagonista() {
        let name = document.querySelector('#nombre_protagonista').value;
        let age = document.querySelector('#edad_protagonista').value;
        let genre = document.querySelector('#genero_protagonista').value;
        let weight = document.querySelector('#peso_protagonista').value;
        let height = document.querySelector('#altura_protagonista').value;
        let eyeColor = document.querySelector('#color_ojos_protagonista').value;
        let race = document.querySelector('#raza_protagonista').value;

        let isRetired = false;
        if (document.querySelector('#retirado_protagonista').checked) {
            isRetired = true;
        }

        let nationality = document.querySelector('#nacionalidad_protagonista').value;

        return new Professional(name, age, genre, weight, height, eyeColor, race, isRetired, nationality, 55, 'Actor')
    }

    nuevoRegistro() {
        let genero = document.querySelector('#genero').value
        let imagen_director = 'img/man.png'
        let imagen_pelicula = 'img/cine.png'

        let imagen_pelicula_input = document.querySelector('#imagen_pelicula');
        let imagen_director_input = document.querySelector('#imagen_director');

        if (imagen_pelicula_input.files && imagen_pelicula_input.files[0]) {
            imagen_pelicula = URL.createObjectURL(imagen_pelicula_input.files[0])
        }

        if (imagen_director_input.files && imagen_director_input.files[0]) {
            imagen_director = URL.createObjectURL(imagen_director_input.files[0])
        }

        let titulo = document.querySelector('#titulo').value;
        let productor = document.querySelector('#productor').value;
        let idioma = document.querySelector('#idioma').value;
        let nacionalidad = document.querySelector('#nacionalidad').value;
        let anyo = document.querySelector('#anyo').value;
        let guionista = document.querySelector('#guionista').value;

        // PLANTILLA HTML //

        let director = this.getDirector();
        let director_info =
            `Género: ${director.genre} \n` +
            `Peso: ${director.weight} \n` +
            `Altura: ${director.height} \n` +
            `Color de ojos: ${director.eyeColor} \n` +
            `Raza: ${director.race} \n` +
            `Esta retirado: ${director.isRetired} \n` +
            `Nacionalidad: ${director.nationality} \n`

        let protagonista = this.getProtagonista();
        let protagonista_info =
            `Género: ${protagonista.genre} \n` +
            `Peso: ${protagonista.weight} \n` +
            `Altura: ${protagonista.height} \n` +
            `Color de ojos: ${protagonista.eyeColor} \n` +
            `Raza: ${protagonista.race} \n` +
            `Esta retirado: ${protagonista.isRetired} \n` +
            `Nacionalidad: ${protagonista.nationality} \n`

        const plantilla =
            `<article>
                <div class="card text-white bg-dark border-light mb-3 " style="max-width: 18rem;">
                    <div class="card-header border-light">${titulo}</div>
                    <img class="card-img-top p-2" id="img_pelicula" src="${imagen_pelicula}">
                    <div class="card-body d-flex flex-column align-items-start justify-content-center">

                        <h5 class="card-title">${genero}</h5>

                        <p class="card-text">
                            estrenada en ${anyo},
                            protagonizada por ${protagonista.name},
                            producida por ${productor},
                            idioma principal ${idioma},
                            nacionalidad ${nacionalidad},
                            guionista ${guionista},
                            <span style="display:none">marvel</span>


                        </p>

                        <h5 class="card-title">Director</h5>
                        <img class="card-img m-2" id="img_director" src="${imagen_director}" 
                            style="width:50%; align-self: center;">
                        <p class="card-text">


                            <!-- TOOLTIP DIRECTOR-->

                            <button type="button" class="btn btn-outline-light w-100 mb-3" data-bs-toggle="tooltip" 
                                data-bs-placement="left" title="${director_info}">
                            Informacion del director
                            </button>

                            <!-- TOOLTIP PROTAGONISTA-->

                            <button type="button" class="btn btn-outline-light w-100" data-bs-toggle="tooltip"
                                 data-bs-placement="left" title="${protagonista_info}">
                                Informacion del protagonista
                            </button>

                        </p>
                        
                    </div>
                </div>
            </article>`

        //Guardo la pelicula

        let movie = new Movie(titulo, anyo, nacionalidad, genero);
        movie.genre = genero;
        movie.actor = protagonista;
        movie.director = director;
        movie.writer = guionista;
        movie.language = idioma;
        movie.producer = productor;

        this.movies.push(movie);

        return plantilla;
    }
}