# Bed-Bug-Finder

insert link...

## Project Description

The Bed Bug Finder allows users to view reported beg bug homes in various NYC neighborhoods. A drop down option will permit a user to first select a borough and then a neighborhood, and return one randomized address where a report has been filed. The Bed Bug reporting API has defined "infested dwelling unit count" as *Number of units in the building that had bedbugs during the reporting period, as reported by the building owner*. Some reports do NOT have infested units. The user will be able to click a button to see **if** the unit has been infested or not. The user will also have the option to click 'Next' to return another randomized address and check if said unit has been infested.


## API and Data Sample

[Bed Bugs Reporting](https://data.cityofnewyork.us/Housing-Development/Bedbug-Reporting/wz6d-d3jb)

API data snippet
```
{
        "building_id": "3",
        "registration_id": "138953",
        "borough": "MANHATTAN",
        "house_number": "1006",
        "street_name": "1 AVENUE",
        "postcode": "10022",
        "of_dwelling_units": "626",
        "infested_dwelling_unit_count": "0",
        "eradicated_unit_count": "0",
        "re_infested_dwelling_unit": "0",
        "filing_date": "2020-02-06T00:00:00.000",
        "filing_period_start_date": "2018-11-01T00:00:00.000",
        "filling_period_end_date": "2019-10-31T00:00:00.000",
        "latitude": "40.757148",
        "longitude": "-73.963757",
        "community_board": "106",
        "city_council_district": "5",
        "census_tract_2010": "10601",
        "bin": "1040460",
        "bbl": "1013670001",
        "nta": "Turtle Bay-East Midtown"
    },
```

## Wireframes

[There are bed bugs in your wireframes](https://wireframe.cc/p0kC8J)

## MVP/PostMVP

#### MVP 

- Find and use an external API.
- Choose a property from a dropdown menu.
- Choose a property from a second dropdown menu.
- Select a submit button to return a random object, displaying three properties.
- Click a button to display if an object property returns 0 or not, thus returning a yes or no on the page.
- Click a button to return the next random object, displaying three properties, while removing the previous object.
- Add event listeners to the buttons.

#### PostMVP  

- Add a bed bug animation.
- Add media queries for responsive design.
- Add a button to provide more information on the bed bug unit.
- ADD A BED BUG MATCH-MAKING OPTION!!

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt | Complete
|June 9| Basic HTML & CSS/Psuedocode functionality/Start API work | Complete
|June 10| Return API for dropdowns/randomized objects | Complete
|June 11| Continue with API work/Advanced CSS & Flexbox  | Complete
|June 12| Post MVP | Partially Complete
|June 15| Present | Incomplete

## Priority Matrix

[There are bed bugs in the Matrix](https://miro.com/app/board/o9J_krRRKb4=/)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedocode | H | 2hrs| 1.5hrs | 1.5hrs |
| Basic HTML & CSS | H | 3hrs| 4.5hrs | 4.5hrs |
| API functionality | H | 20hrs| 25hrs | 25hrs |
| Advanced CSS | M | 10hrs| 15hrs | 15hrs |
| PostMVP | L | 10hrs| 5hrs | 5hrs |
| Total | H | 45hrs| 51hrs | 51hrs |

## Code Snippet

The four functions below are all connected to one button, the NEXT button. Once clicked, based on the API, the button will return the 'nope' function or the 'bugChaos' function. The 'nope' function will return a random version of the word 'no'. The 'bugChaos' function will return an animation. Every time the button is clicked, the page is refreshed.

```
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
```

## Change Log
-  MVP completed in its entirety.
-  Post MVP Bug animations completed.
-  Post presentation, I will add media queries for responsive design
-  My original idea was to do a match-matching website for bed bugs (to be funny..). I had this listed in my Post MVP. I now don't think that bed bugs should populate, so I will *scratch* that idea.
-  I would like to explore getting further access to the API.
