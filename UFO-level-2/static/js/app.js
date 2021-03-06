// from data.js
var tableData = data;

// JS APP CODE HERE!
// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
// appends a table to the web page and then 
// adds new rows of data for each UFO sighting.

// * Columns: `date/time`, `city`, `state`, `country`, `shape`, `duration` and `comment` 

// * Use a date form in the HTML document and write JavaScript code that will listen for events and 
// search through the `date/time` column to find rows that match user input.


// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the 
// user can to set multiple filters and 
// search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`




// Get a reference to the table body
var tbody = d3.select("tbody");

// use forEach to loop through table and append data into the HTML table
tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
  });

// attach funtion to "filter-btn" to accept user input, 
// filter data by the input date and 
// populate the HTML table with the events specific to the selected "datetime"

  var button = d3.select("#filter-btn");
  button.on("click", function(){

    tbody.html("");
    // var inputHTML = d3.select("#datetime");
    // var inputValue = inputHTML.property("value");
    // console.log(inputValue); 

    var inputDate = d3.select("#date-input");
    var inputCity = d3.select("#city-input");
    var inputState = d3.select("#state-input");
    var inputCountry = d3.select("#country-input");
    var inputShape = d3.select("#shape-input");
    // var inputDuration = d3.select("#duration-input");
    // var inputComment = d3.select("#comment-input");

    
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    // var durationValue = inputDuration.property("value");
    // var commentValue = inputComment.property("value");

//     var inputElement = d3.select("#input");
//     var inputValue = inputElement.property("value");
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
//       sighting.city === inputValue ||
//       sighting.state === inputValue ||
//       sighting.country === inputValue ||
//       sighting.shape === inputValue);
//       filteredData.forEach(function(selections) {
//         var row = tbody.append("tr");
//         Object.entries(selections).forEach(function([key,value]){
//           var cell = row.append("td");
//           cell.text(value);

//       });


//   });
// });



    // //  filters array
    var filters = [{type: "datetime", name: dateValue},
                  {type: "city", name: cityValue},
                  {type: "state", name: stateValue},
                  {type: "country", name: countryValue},
                  {type: "shape", name: shapeValue}]
    

    var filteredSightings = tableData.filter(sighting => 
      filters.every(filterTable =>{
      if (filterTable.name === "") return true
      return sighting[filterTable.type] === filterTable.name
      }));
      
      
    // // console.log(filteredSightings)
    filteredSightings.forEach(function(selectedSighting){
    //     // console.log(selectedSighting);
        var row = tbody.append("tr");
        Object.entries(selectedSighting).forEach(function([key, value]){
    //         // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });

    });
    
    });



    // reset table to include all values when pressing reset button

  

    var resetbutton = d3.select("#reset-btn");
    resetbutton.on("click", function(){

      tbody.html("");
  
      
      
    var resetdateValue = ("");
    var resetcityValue = ("");
    var resetstateValue = ("");
    var resetcountryValue = ("");
    var resetshapeValue = ("");
    
    var resetfilters = 
    [{type: "datetime", name: resetdateValue},
    {type: "city", name: resetcityValue},
    {type: "state", name: resetstateValue},
    {type: "country", name: resetcountryValue},
    {type: "shape", name: resetshapeValue  }]


    var filteredSightings = tableData.filter(sighting => 
      resetfilters.every(filterTable =>{
      if (filterTable.name === "") return true
      return sighting[filterTable.type] === filterTable.name
      }));
      
      
    // // console.log(filteredSightings)
    filteredSightings.forEach(function(selectedSighting){
    //     // console.log(selectedSighting);
        var row = tbody.append("tr");
        Object.entries(selectedSighting).forEach(function([key, value]){
    //         // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });

    });
    
    });