let typestarter;
let starter = false
let team = false
const getPokeBois = async () => {
    try {
        if (!starter) {
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=0')
            const pokeNum = response.data.count
            const randomNum = Math.floor(Math.random() * pokeNum)
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
            let pokeType = response.data.types[0].type['name']
            typestarter = pokeType
            let firstSprite = response.data.sprites.front_default
            let img = document.createElement('img')
            img.src = firstSprite
            document.getElementById("sprites").appendChild(img);
            starter = true
        } else {
            alert("starter already created")
        }    
    }
    catch(e){
            console.log('NOPE, NICE TRY')
            console.log(e)
        }
    }
    

const getTeam = async() => {
    try {
        if (starter && !team) {
            team = true
            response3 = await axios.get(`https://pokeapi.co/api/v2/type/${typestarter}`)
            let totalType = response3.data.pokemon.length
            for (let i = 0; i < 5; i++){
                let random = Math.floor(Math.random()*totalType)
                let randompoke = response3.data.pokemon[random].pokemon.url
                response4 = await axios.get(randompoke)
                let img = document.createElement("img")
                img.src = response4.data.sprites.front_default
                document.getElementById("sprites").appendChild(img)
            }
        } else {
            alert("team already created")
        }
    } 
    catch(e) {
        console.log('NOPE, NICE TRY')
        console.log(e)
        }
    }
