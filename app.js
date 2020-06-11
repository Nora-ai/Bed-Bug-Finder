//default page upon entering... button onClick, locaton reload?? or something. research it!

const pullData = async () => {
    const url = "https://data.cityofnewyork.us/resource/wz6d-d3jb.json"

try {
    const response = await axios.get(`${url}`)

    // const boroughList = Object.keys(response.data)
    // console.log(response.data)

    const chooseNeighborhood = document.querySelector('#choose-neighborhood')

    //created a new object with unique properties
    //returns a new array
    let neighborhoods = new Set(response.data.map(hood => {
        return hood.nta
    }))
        console.log(neighborhoods)

    //created a set iterator
    //const hoodList = neighborhoods.values()
    //console.log(hoodList)

    //loops through the new object to access the values to add to the neighborhood dropdown
    neighborhoods.forEach((hood) => {
        //console.log(hood)
        const neighborhoodOption = document.createElement('option')
        neighborhoodOption.value = `${hood}`
        neighborhoodOption.text = `${hood}`
        chooseNeighborhood.append(neighborhoodOption)
  })

} catch (bug) {
    console.log(`There is a bug in here ${bug}`)
}
}

pullData()

//psuedocode
//dropdown list will show a list of neighborhoods
//add an event listener to button 'find the bugs'


function getAddress (e) {
    e.preventDefault()
    const chooseHood = document.querySelector('#choose-neighborhood')
    const getValue = chooseHood.value
    console.log(getValue)
    whichAddress(getValue)
    refreshAddress()
}

const findBugs = document.getElementById('find')
findBugs.addEventListener('click', getAddress)




//create a function that returns 3 properties (#, street, zip) of ONE object. use math.random
//calling API again
//get zip code OF ONE ADDRESS and append it to the #append-bed-bugs div

//declaring randomAddress as a global varible
let randomAddress 
let addressproperties
let filterHoods 

async function whichAddress(placeholder) {
    try {
        let response = await axios.get("https://data.cityofnewyork.us/resource/wz6d-d3jb.json")
        //console.log(response.data)
        
        //filter the neighborhoods 
        //placeholder
        
        const neighborhoods = response.data

            filterHoods = neighborhoods.filter(function(hood) {
                return hood.nta === placeholder
            })
            console.log(filterHoods)

        //let (removed to make this a global variable)
        randomAddress = filterHoods[Math.floor(Math.random() * filterHoods.length)]
        console.log(randomAddress)
        
        //and then choose a random building within that and return 3 properties (#, street, zip) and lists in the append bed bugs div

        addressProperties = document.querySelector('#append-bed-bugs')
        addressProperties.innerHMTL = ""

            addressProperties.innerHTML = `
            <p> Address: ${randomAddress.house_number} ${randomAddress.street_name}</p>
            <p> Zip Code: ${randomAddress.postcode}</p>
        `

    } catch(bug) {
        console.log(`Catch that ${bug}!`)
    }
}

whichAddress()

//replaces with a new address when find the bugs button is clicked again
//called this out in the getAddress function

function refreshAddress() {
    const oldAddress = document.querySelector('#append-bed-bugs')
    while (oldAddress.lastChild) {
        oldAddress.removeChild(oldAddress.lastChild)
    }
}


//make a function for the NEXT button
//add event listener
//once clicked, the append-bed-bugs returns a new random address within the same filter and also refreshes the page

let clickNext = () => {

//generate a math.random method
//range of array is filterhoods.length
randomAddress = filterHoods[Math.floor(Math.random() * filterHoods.length)]
console.log(randomAddress)

addressProperties.innerHTML = `
<p> Address: ${randomAddress.house_number} ${randomAddress.street_name}</p>
<p> Zip Code: ${randomAddress.postcode}</p>
`
toBugOrNotToBug()
   
}

let next = document.querySelector('#next')
next.addEventListener('click', clickNext)


//when button 'was it infested' is clicked
//button #yesOrNo
//add event listener
//when the button is clicked
    //if the 'infested_dwelling_unit_count' > 0, will return a bug animation
    //else, a big red No pops up(maybe)
//first create a test that will return a yes or no to make it easier

const bug = document.querySelector('#findOut')


// const bugChaos = () => {
//     //testing before making the bugs
//     const yes = document.createElement('p')
//     yes.setAttribute('id', "yesYesYes")
//     //const yeahh = document.createTextNode('YES')
//     bug.removeChild(bug.lastChild)
//     yes.innerHTML = 'YES'
//     bug.append(yes)
//     console.log(yes)
//     console.log(bug)
//}
//console.log(bugChaos)

const nope = () => {
    //testing 
    const no = document.createElement('p')
    no.setAttribute("id", "noNoNo")
    //const nahh = document.createTextNode('NOPE')
    bug.removeChild(bug.lastChild)
    no.innerHTML = 'NOPE'
    bug.append(no)
    console.log(no)
    console.log(bug)
}
//console.log(nope)

function refreshWasItInfested() {
    console.log('hello')
    const oldAnswerNo = document.querySelector('#noNoNo')
    const oldAnswerYes = document.querySelector('#yesYesYes')
    console.log(oldAnswerNo)
    console.log(oldAnswerYes)
    if (oldAnswerNo === null) {
        return;
    } else {
        (oldAnswerNo.removeChild(oldAnswerNo.lastChild))
    }
    if (oldAnswerYes === null) {
        return;
    } else {
        (oldAnswerYes.removeChild(oldAnswerYes.lastChild))
    }
    }

const toBugOrNotToBug = () => {
    //refreshWasItInfested()
    console.log(randomAddress)
    if (randomAddress.infested_dwelling_unit_count > 0) {
        return bugChaos();
    } else {
        return nope();
    }
    
}

const wasItInfested = document.getElementById('yesOrNo')
wasItInfested.addEventListener('click', toBugOrNotToBug)


//refresh the nopes and yesses

function refreshWasItInfested() {
    console.log('hello')
    const oldAnswerNo = document.querySelector('#noNoNo')
    const oldAnswerYes = document.querySelector('#yesYesYes')
    //console.log(oldAnswerNo)
    //console.log(oldAnswerYes)
    if (oldAnswerNo === null) {
        return;
    } else {
        console.log(oldAnswerNo)
        (oldAnswerNo.removeChild(oldAnswerNo.lastChild))
    }
    if (oldAnswerYes === null) {
        return;
    } else {
        (oldAnswerYes.removeChild(oldAnswerYes.lastChild))
    }
    }
    

refreshWasItInfested()


//can I make the nopes and yesses just disappear for a few seconds.





//creating bug function here, so not to confuse with what I need to fix above
//const moveBugs will eventually be bugChaos

    //button.onClick?

const body = document.body;
//not sure why i am defining body, this already exists in html.. but it was in the duck hunt

const bugChaos = () => {
    const bugs = document.createElement('div')
    //bugs.setAttribute('id', 'getBuggyWithIt')
    bugs.className = 'bugs'
    body.append(bugs)
        
    const moveBugs = function (bugs) {
        bugs.style.left = Math.random() * window.innerWidth + "px"
        bugs.style.top = Math.random() * window.innerHeight + "px"
      }
        setInterval(function(){ 
            (moveBugs(bugs)); }, 1000);
        
    }

bugChaos()

    //add for loop
    //make sure the bugs disapper after a few seconds.






//psuedocode to do list
//IF I HAVE TIME
    //generate a random image that will circulate and refresh every time the find the bugs button is clicked. this might be extra and post MVP
