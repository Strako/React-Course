interface genresI {
    [key: string]: any
}


const getGenreByID = (genresID: [], genres:[]) => {
    let result: string = ""

    genresID.map((g, o, array) => {
            genres.map((genre: genresI) => {
                if (genre.id === g) {
                    if (o + 1 === array.length) {
                        result = result + genre.name;
                    } else {
                        result = result + genre.name + " / ";
                    }
                }
            })
        })
    return result;
}

export default getGenreByID;