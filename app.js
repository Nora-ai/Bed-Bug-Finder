
const pullData = async () => {
    const url = "https://data.cityofnewyork.us/resource/wz6d-d3jb.json"

try {
    const response = await axios.get(`${url}`)

    const chooseNeighborhood = document.querySelector('#choose-neighborhood')

    //created a new object with unique properties that returns a new array
    let neighborhoods = new Set(response.data.map(hood => {
        return hood.nta
    }))


    //loops through the new object to access the values to add to the neighborhood dropdown
    neighborhoods.forEach((hood) => {
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


function getAddress (e) {
    e.preventDefault()
    const chooseHood = document.querySelector('#choose-neighborhood')
    const getValue = chooseHood.value
    whichAddress(getValue)
    refreshAddress()
}

const findBugs = document.getElementById('find')
findBugs.addEventListener('click', getAddress)


//create a function that returns 3 properties (#, street, zip) of ONE object. use math.random
//calling API again
//get zip code OF ONE ADDRESS and append it to the #append-bed-bugs div


//global variables
let randomAddress 
let filterHoods 
let addressProperties 


async function whichAddress(placeholder) {
    try {
        let response = await axios.get("https://data.cityofnewyork.us/resource/wz6d-d3jb.json")
        
        const neighborhoods = response.data

            filterHoods = neighborhoods.filter(function(hood) {
                return hood.nta === placeholder
            })

        randomAddress = filterHoods[Math.floor(Math.random() * filterHoods.length)]
        console.log(randomAddress)
        
        addressProperties = document.querySelector('#append-bed-bugs')
        addressProperties.innerHMTL = ""

            addressProperties.innerHTML = `
            <p>ADDRESS: ${randomAddress.house_number} ${randomAddress.street_name}</p>
            <p>ZIP CODE: ${randomAddress.postcode}</p>
        `

    } catch(bug) {
        console.log(`Catch that ${bug}!`)
    }
}


//replaces with a new address when find the bugs button is clicked again
function refreshAddress() {
    const oldAddress = document.querySelector('#append-bed-bugs')
    while (oldAddress.lastChild) {
        oldAddress.removeChild(oldAddress.lastChild)
    }
}
//called out in the getAddress function



//once clicked, the append-bed-bugs returns a new random address within the same filter and also refreshes the page
let clickNext = () => {

    randomAddress = filterHoods[Math.floor(Math.random() * filterHoods.length)]
        console.log(randomAddress)

    addressProperties.innerHTML = `
        <p> ADDRESS: ${randomAddress.house_number} ${randomAddress.street_name}</p>
        <p> ZIP CODE: ${randomAddress.postcode}</p>
        `

    if (document.querySelector('#noNoNo')) {
        const removeNo = document.querySelector('#noNoNo')
        removeNo.innerHTML = ''
        }

    if (document.querySelector('#yesYesYes')) {
        const removeYes = document.querySelector('#yesYesYes')
        removeYes.innerHTML = ''
        }

    if (document.querySelectorAll('.bugs')) {
        const removeBugs = document.querySelectorAll('.bugs')
        for (let i = 0; i < removeBugs.length; i++) {
        removeBugs[i].remove()
        }
    }
    

    let backgroundImages = 
    [
        "https://res.cloudinary.com/alienora/image/upload/v1591996433/mattress_patterns-12_iife0r.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996433/mattress_patterns-09_udrtkl.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996433/mattress_patterns-07_swm2qy.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996433/mattress_patterns-08_fd9fej.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996431/mattress_patterns-04_avcspn.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996431/mattress_patterns-06_jxorac.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996431/mattress_patterns-03_k1qhtu.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996431/mattress_patterns-01_crpwy4.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1591996431/mattress_patterns-02_wttrwp.jpg"
    ]


    const changeBackgroundImage = () => {
        let randomBGImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
        document.body.style.backgroundImage = `url(${randomBGImage})`
        return randomBGImage
    }
    changeBackgroundImage()
    


    let newYorkApts = 
    [
        "https://res.cloudinary.com/alienora/image/upload/v1592062092/daryan-shamkhali-yuhjpNvG9u0-unsplash_hjmphn.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592062094/daryan-shamkhali-tRDGs9utMUo-unsplash_npomis.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592062096/rachel-martin-4yCXNMLP9g8-unsplash_sh3crp.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592062095/niklas-herrmann-yEzW39D3ajw-unsplash_gkdwzt.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592133891/aleks-marinkovic--AWLkn2V2H8-unsplash_et3hpl.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592133894/julian-myles-EbqCt7tHWW0-unsplash_gc9m2n.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592133896/hardik-pandya-g2BWlyejtqg-unsplash_mntwnl.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592133897/dichatz-eYwfNyvQ1Ys-unsplash_u5vkst.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592133898/erin-wilson-FB98slIkJck-unsplash_nqpffd.jpg",
        "https://res.cloudinary.com/alienora/image/upload/v1592133898/leonard-alcira-mhUcHeKUmkQ-unsplash_ueciju.jpg"
    ]

    const changeHomeImage = () => {
        let randomHome = newYorkApts[Math.floor(Math.random() * newYorkApts.length)]
        document.querySelector('#placeholder').src = `${randomHome}`
        return randomHome
    }
    changeHomeImage()
}

let next = document.querySelector('#next')
next.addEventListener('click', clickNext)


//when button 'was it infested' is clicked
//button #yesOrNo
//add event listener
//when the button is clicked
    //if the 'infested_dwelling_unit_count' > 0, will return a bug animation
    //else, a big red No pops up
//first create a test that will return a yes or no to make it easier

const bug = document.querySelector('#findOut')

const bugChaos = () => {
    const yes = document.createElement('p')
    yes.setAttribute('id', "yesYesYes")
    bug.removeChild(bug.lastChild)
    yes.innerHTML = 'YES'
    bug.append(yes)
    console.log(yes)
    for (let i = 0; i < 40; i++) {
        createAndReleaseTheBugs()
    }
}


const nope = () => {
    let theNopes = ['nope', 'nahhh', 'negative', 'no bugs here', 'try the next building', 'no', 'never', 'I hope not', 'ewwwww no']
    let randomNope = []
    randomNope = theNopes[Math.floor(Math.random() * theNopes.length)]
    const no = document.createElement('p')
    no.setAttribute("id", "noNoNo")
    bug.removeChild(bug.lastChild)
    no.innerHTML = randomNope
    bug.append(no)
    console.log(no)
}


const toBugOrNotToBug = () => {
    console.log(randomAddress)
    if (randomAddress.infested_dwelling_unit_count > 0) {
        return bugChaos();
    } else {
        return nope();
    }
}

const wasItInfested = document.getElementById('yesOrNo')
wasItInfested.addEventListener('click', toBugOrNotToBug)



function refreshWasItInfested() {
    console.log('hello')
    const oldAnswerNo = document.querySelector('#noNoNo')
    const oldAnswerYes = document.querySelector('#yesYesYes')
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
refreshWasItInfested()




const body = document.body

const showMeTheBug = () => {
    const bugs = document.createElement('div')
    bugs.className = 'bugs'
    body.append(bugs)
        
    const moveBugs = function (bugs) {
        bugs.style.left = Math.random() * window.innerWidth + "px"
        bugs.style.top = Math.random() * window.innerHeight + "px"
      }
        setInterval(function(){ 
            (moveBugs(bugs)); }, 1000);
    }
showMeTheBug()



const createAndReleaseTheBugs = () => {
    
    const bugs = document.createElement('div')
    bugs.className = 'bugs'
    body.append(bugs)
        
    const moveBugs = function (bugs) {
        bugs.style.left = Math.random() * window.innerWidth + "px"
        bugs.style.top = Math.random() * window.innerHeight + "px"
      }
    setInterval(function(){ 
        (moveBugs(bugs)); }, 1000);
    }
    
    
