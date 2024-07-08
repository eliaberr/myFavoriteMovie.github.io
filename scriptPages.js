consutarPages("movie","popular","filmesParte1","filmesParte2","filmesParte3","filmesParte4")
consutarPages("tv","popular","serieMaisVistaParte1","serieMaisVistaParte2","serieMaisVistaParte3","serieMaisVistaParte4")
consutarPages("tv","top_rated","serieMaisBemAvaliadasParte1","serieMaisBemAvaliadasParte2","serieMaisBemAvaliadasParte3","serieMaisBemAvaliadasParte4")


function consutarPages(page, categoria, idPrimeiraDiv, idSegundaDiv, idTerceiraDiv, idQuartaDiv ){
    var urlPadroa = `https://api.themoviedb.org/3/`
    var apiKey = `api_key=e6ef1b214016948f0eebf9defef52b8b`
    

    const url = `${urlPadroa}${page}/${categoria}?${apiKey}&language=pt-BR`
    const urlImg = `https://image.tmdb.org/t/p/w500`

    $.getJSON(url, (response) =>
    {
        for(let i = 0;i<5;i++){
            movies = response.results[i].poster_path
            document.getElementById(idPrimeiraDiv).innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                    </div>
                `
            )
        }
        
        for(let i = 5;i<=9;i++){
            movies = response.results[i].poster_path
            document.getElementById(idSegundaDiv).innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                    </div>
                `
            )
        }

        for(let i = 10;i<=14;i++){
            movies = response.results[i].poster_path
            document.getElementById(idTerceiraDiv).innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                    </div>
                `
            )
        }

        for(let i = 15;i<=20;i++){
            movies = response.results[i].poster_path
            document.getElementById(idQuartaDiv).innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                    </div>
                `
            )
        }
      
    })
}