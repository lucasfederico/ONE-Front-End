const http = new XMLHttpRequest();

// Abrir HTTP (metodo, url)
// CRUD - Metodos HTTP
// CREATE - POST
// READ - GET
// UPDATE - PUT / PATCH
// DELETE - DELETE
http.open("GET", "https://localhost:3000/perfil")

http.send()

http.onload =  () => {
    const data = http.response
    console.log(data)
}
