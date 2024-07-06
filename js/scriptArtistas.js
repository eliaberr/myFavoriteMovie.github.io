consutarPages()


function consutarPages(page, categoria, idPrimeiraDiv, idSegundaDiv, idTerceiraDiv, idQuartaDiv ){
    var urlPadroa = `https://api.themoviedb.org/3/person/popular?`
    var apiKey = `api_key=e6ef1b214016948f0eebf9defef52b8b`
    

    const url = `${urlPadroa}${apiKey}&language=pt-BR`
    const urlImg = `https://image.tmdb.org/t/p/w500`

    $.getJSON(url, (response) =>
    {
        for(let i = 0;i<5;i++){
            movies = response.results[i].profile_path
            document.getElementById("artistasParte1").innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${response.results[i].name}</h5>
                        </div>
                    </div>
                `
            )
        }
        
        for(let i = 5;i<=9;i++){
            movies = response.results[i].profile_path
            document.getElementById("artistasParte2").innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${response.results[i].name}</h5>
                        </div>
                    </div>
                `
            )
        }

        for(let i = 10;i<=14;i++){
            movies = response.results[i].profile_path
            document.getElementById("artistasParte3").innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${response.results[i].name}</h5>
                        </div>
                    </div>
                `
            )
        }

        for(let i = 15;i<=20;i++){
            movies = response.results[i].profile_path
            document.getElementById("artistasParte4").innerHTML += (
                `
                    <div class="card cardSelected" style="width: 12rem;">
                        <img src="${urlImg+movies}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${response.results[i].name}</h5>
                        </div>
                    </div>
                `
            )
        }
      
    })
}