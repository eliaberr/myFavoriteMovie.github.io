consutarFilmes("movie","now_playing","filmesEmCartazParte1","filmesEmCartazParte2")
consutarFilmes("movie","top_rated", "top10FilmesParte1", "top10FilmesParte2" )
consutarFilmes("tv","airing_today","seriesHojeParte1","seriesHojeParte2")
consutarFilmes("tv","top_rated","seriesTop10Parte1","seriesTop10Parte2")

function consutarFilmes(movieOrTv,categoria, idPrimeiraDiv, idSegundaDiv){
    var urlPadroa = `https://api.themoviedb.org/3/`
    var apiKey = `api_key=e6ef1b214016948f0eebf9defef52b8b`
    

    const url = `${urlPadroa}${movieOrTv}/${categoria}?${apiKey}&language=pt-BR`
    const urlImg = `https://image.tmdb.org/t/p/w500`

    $.getJSON(url, (response) =>
    {
        for(let i = 0;i<6;i++){
            movies = response.results[i].poster_path
            document.getElementById(idPrimeiraDiv).innerHTML += (
                `
                <li class="cardSelected">
                    <div class="card" style="width: 11rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                    </div>
                </li>
                `
            )
        }
        for(let i = 6;i<=11;i++){
            movies = response.results[i].poster_path
            document.getElementById(idSegundaDiv).innerHTML += (
                `
                <li class="cardSelected">
                    <div class="card" style="width: 11rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                    </div>
                </li>
                `
            )
            console.log(movies)
        }
    })
}





