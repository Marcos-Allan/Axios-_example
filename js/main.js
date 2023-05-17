const public_key_API =  "2f5514006b2ba51e9f0adc7ecd65e19d"
const private_key_API = "cca92fbc113e587cf3b48adc58b5a20972b5a53d"
const ts = "1684194165"

let alt = "554082d21e06c7ba0eb637ae1ae79f76"


let input = document.querySelector("#input")
input.value=1

let selected = input.value

let hero_image = document.querySelector('#hero_image')

let hero_name = document.querySelector('#hero_name')

document.addEventListener("keydown", function(event){
    selected=Number(input.value)
    loadAPI()
})

async function loadAPI(){

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public_key_API}&hash=${alt}`

    axios
    .get(url)
    .then((dados) => {
        const data = dados.data
        console.log(data.data.results)
        
        hero_name.innerText = `${data.data.results[selected].name}`

        hero_image.src = `${data.data.results[selected].thumbnail.path}.${data.data.results[selected].thumbnail.extension}`

    })
}
loadAPI()