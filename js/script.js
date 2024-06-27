api()

function api(){
var urlApi = `https://api.themoviedb.org/3/`
var categoriaUrlApi=`movie/`
var apiKey = `?api_key=e6ef1b214016948f0eebf9defef52b8b`

const url = `${urlApi}${categoriaUrlApi}top_rated${apiKey}`

console.log(url)
console.log("iae")
}