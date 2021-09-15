var spiderman

const foo = async () => {
    let response = await fetch("https://www.superheroapi.com/api.php/10110052087058874/620")
    let object = await response.json()
    console.log(object.appearance)
}

foo()

