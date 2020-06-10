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
        console.log(hood)
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
//create a function that returns 3 properties (#, street, zip) of ONE object. use math.random

function getAddress (e) {
    e.preventDefault()
    const chooseHood = document.querySelector('#choose-neighborhood')
    const getValue = chooseHood.value
    console.log(getValue)
}

const findBugs = document.getElementById('find')
findBugs.addEventListener('click', getAddress)





    //possibly also list the 'was it infested' property but make it hidden
//list the three properties in the #append-bed-bugs div
    //generate a random image that will circulate and refresh every time the find the bugs button is clicked. this might be extra and post MVP
//add an event listerner to the 'was it infested' button that will return one of two things once clicked.
    //if the 'was it infested' property returns anything > 0, then the bug animation pops up.
    // if 0, then, then an x pops up.
//the next button returns a refresh and returns a new address and image

