# Bed-Bug-Finder

insert link...

## Project Description

The Bed Bug Finder allows users to view reported beg bug homes in the neighborhood of their choice. A drop down option will permit a user to first select a borough and then a neighborhood, and return one randomized address where a report has been filed. The Bed Bug reporting API has defined "infested dwelling unit count" as *Number of units in the building that had bedbugs during the reporting period, as reported by the building owner*. Some reports do NOT have infested units. The user will be able to click a button to see **if** the unit has been infested or not. The user will also have the option to click 'Next' to return another randomized address and check if said unit has been infested.

Added Bonus. Bed bugs need lovin' too. Match two units up by randomized search and you have a match! (not displayed in the wireframe)

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

- Find and use external api 
- Choose a Property from a dropdown menu
- Choose a second property from a dropdown menu
- Select a submit button to return random object, displaying three properties
- Click a button to display if an object property returns 0 or not, thus returning a yes or no on the page
- Click a button to return the next random object, displaying three properties, while removing the previous object
- Add event listeners to the buttons

#### PostMVP  

- Add media queries for responsive design
- Add a button to provide more information on the bed bug unit
- Add a bed bug animation
- ADD A BED BUG MATCH-MAKING OPTION!!

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt | Complete
|June 9| Basic HTML & CSS/Psuedocode functionality/Start API work | Incomplete
|June 10| Return API for dropdowns/randomized objects | Incomplete
|June 11| Continue with API work/Advanced CSS & Flexbox  | Incomplete
|June 12| Post MVP | Incomplete
|June 15| Present | Incomplete

## Priority Matrix

[There are bed bugs in the Matrix](https://miro.com/app/board/o9J_krRRKb4=/)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedocode | H | 2hrs| hrs | hrs |
| Basic HTML & CSS | H | 3hrs| hrs | hrs |
| API functionality | H | 20hrs| hrs | hrs |
| Advanced CSS | M | 10hrs| hrs | hrs |
| PostMVP | L | 10hrs| hrs | hrs |
| Total | H | 45hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
