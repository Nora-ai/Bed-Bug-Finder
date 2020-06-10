const pullData = async () => {
    console.log('Before bug request')
    const url = "https://data.cityofnewyork.us/resource/wz6d-d3jb.json"

try {
    const response = await axios.get(`${url}`)

    //const boroughList = Object.keys(response.data)
    //console.log(response.data)

    const chooseNeighborhood = document.querySelector('#choose-neighborhood')

    let neighborhoods = new Set(response.data.map(hud => {
        return hud.nta
    }))
        console.log(neighborhoods)
    
    
    neighborhoods.forEach((hood) => {
        //console.log(hood)
        const neighborhoodOption = document.createElement('neighborhoodOption')
        // neighborhoodOption.value = `${hood}`
        // neighborhoodOption.text = `${hood}`
        chooseNeighborhood.append(neighborhoodOption)
  })

} catch (bug) {
    console.log(`There is a bug in here ${bug}`)
}
}

pullData()