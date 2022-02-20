// from data.js
var tableData = data;

// JS APP CODE HERE!
// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
// appends a table to the web page and then 
// adds new rows of data for each UFO sighting.

// * Columns: `date/time`, `city`, `state`, `country`, `shape`, `duration` and `comment` 

// * Use a date form in the HTML document and write JavaScript code that will listen for events and 
// search through the `date/time` column to find rows that match user input.



// Get a reference to the table body
var tbody = d3.select("tbody");

// use ForEach to loop through table and append data into the HTML table
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
    var inputHTML = d3.select("#datetime");
    var inputValue = inputHTML.property("value");
    // console.log(inputValue); 
    var filteredSightings = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log(filteredSightings)
    filteredSightings.forEach(function(selectedSighting){
        // console.log(selectedSighting);
        var row = tbody.append("tr");
        Object.entries(selectedSighting).forEach(function([key, value]){
            // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });

    });
    
    });
          