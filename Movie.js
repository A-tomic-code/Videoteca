class Movie {


    constructor(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actor = undefined;
        this.director = undefined;
        this.writer = undefined;
        this.language = undefined;
        this.producer = undefined;
    }


    print() {
        for (let prop in this) {
            if (prop != "print") {
                console.log(`${prop} - ${eval("this." + prop)}`);
            }
        }
        console.log('');
    }

}