const getPokeBois = async () => {
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=0')
        const pokeNum = response.data.count
        const randomNum = Math.floor(Math.random() * pokeNum)
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        let pokeType = response.data.types[0].type['name']
        let firstSprite = response.data.sprites.front_default
        let img = document.createElement('img')
        img.src = firstSprite
        img.className = pokeType
        img.id = "typepok"
        document.getElementById("sprites").appendChild(img);

    }
    catch(e){
            console.log('NOPE, NICE TRY')
            console.log(e)
        }
    }
    

const getTeam = async() => {
    let typess = document.getElementById("typepok").className
    let list = []
    response3 = await axios.get(`https://pokeapi.co/api/v2/type/${typess}`)
    console.log(response3)
    let totalType = response3.data.pokemon.length
    for (let i = 0; i < 5; i++){
        let random = Math.floor(Math.random()*totalType)
        let randompoke = response3.data.pokemon[random].pokemon.url
        response4 = await axios.get(randompoke)
        let img = document.createElement("img")
        img.src = response4.data.sprites.front_default
        document.getElementById("sprites").appendChild(img)
    }

}
