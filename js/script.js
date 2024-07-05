api()

function api() {
    var urlApi = `https://api.themoviedb.org/3/`
    var categoriaUrlApi = `movie/`
    var apiKey = `?api_key=e6ef1b214016948f0eebf9defef52b8b`

    const url = `${urlApi}${categoriaUrlApi}top_rated${apiKey}`

    console.log(url)
    console.log("iae")
}

testeApi()

function testeApi() {
    useEffect(() => {
        urlMovies = `https://api.themoviedb.org/3/movie/`
        var apiKey = `api_key=e6ef1b214016948f0eebf9defef52b8b`

        const topRatedUrl = `${urlMovies}top_rated?${apiKey}`

        

    }, [])
    console.log(topRatedUrl)
    
}

function testeTestado(){
    teste = document.getElementById("testeTestado1").value
 
    console.log(teste)

}

