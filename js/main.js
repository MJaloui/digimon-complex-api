//The user will enter a date. Use that date to get the country flag.
//get user input in a varibale.
//fetch request from api
//send api key and date to nasa
//will get response from country API> object
//process the response json object, needs to be an json object
//do a task with response (get digi card/name, and info)
//display name, card, and info
//For sencond API(digi info api) it should be inside

//these two works
//digimon card/names API: https://digimon-api.vercel.app/api/digimon 
//digimon infor API: https://digimon-api.vercel.app/api/digimon


document.querySelector('button').addEventListener('click', getDigimon)

function getDigimon() {



    fetch('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc')
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const randomCard = data[Math.floor(Math.random() * data.length)];

            document.querySelector('h2').innerText = randomCard.name


        })
        .catch(err => {
            console.log(`error ${err}`);
        })


    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())
        .then(data => {
            console.log('Digimon Images & Info')

            
            const randomDigimon = data[Math.floor(Math.random() * data.length)];

            document.querySelector('img').src = randomDigimon.img
            document.querySelector('h3').innerText = randomDigimon.level
            document.querySelector('h3').innerText = randomDigimon.type
            document.querySelector('h3').innerText = randomDigimon.atrribute
            document.querySelector('h3').innerText = `Name: ${randomDigimon.name}`
            document.querySelector('h3').innerText = `Level: ${randomDigimon.level} `

            console.log(`${randomDigimon.type}`)
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}


