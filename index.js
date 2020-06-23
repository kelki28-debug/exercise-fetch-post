let button = document.querySelector('#button');
button.addEventListener('click', sendData)
async function sendData() {
    try {
        let genre = document.querySelector('#genre').value
        let title = document.querySelector('#title').value
        let year = document.querySelector('#date').value
        let image = document.querySelector('#image').value
        let description = document.querySelector('#area').value


        let userData = {
            genre,
            title,
            year,
            image,
            description
        }
        

        let url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/movie-list'
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        let response = await fetch(url, options);
        let push = await response.json();

        console.log(push)

    } catch(error){
        console.error(error)
    }
}