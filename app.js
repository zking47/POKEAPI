const minNum = 1;
const maxNum = 248;

const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(randomNum);

fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(function(response){
     return response.json();
    })
    .then(function(json){
        let name = json.name
        console.log(name);
        let health = json.stats[0]
        let base_stat = health.base_stat
        console.log(base_stat);
        let weight = json.weight
        console.log(weight,"Lbs");
        let attack = json.stats[1]
        let attackStat = attack.base_stat
        console.log(attackStat);
        let type1 = json.types[0].type.name
        console.log(type1);
        let type2 = json.types[1]
        if(type2 == undefined){
            
        }else{
            console.log(json.types[1].type.name);
        }
       document.getElementById('name').textContent = `Name: ${name}`
       document.getElementById('weight').textContent = `Weight: ${weight}Lbs`
        document.getElementById('health').textContent = `Health: ${base_stat} `
       document.getElementById('attack').textContent = `Attack: ${attackStat}`
       document.getElementById('types1').textContent = `Type: ${type1}`
       document.getElementById('types2').textContent = `Type: ${json.types[1].type.name}`

    })


