var spiderman

function testFetch() {
    fetch("https://www.superheroapi.com/api.php/10110052087058874/620")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    });
}

spiderman = testFetch()
console.log("spiderman" + spiderman)


// fetch(
//     'https://api.giphy.com/v1/gifs/oXnN2TNSgfJQI?api_key=fc1UmnBJUGYxagBcip3pbDVfhaGv4AbF'
//   )
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//     });

