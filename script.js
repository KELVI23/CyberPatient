 // Declare global variables
var input, filter, table, tr, td, i, txtValue;

$(document).ready(function () {

    //fecth data
    $.getJSON("medications.json", function (data){
        var jsonData = '';
        var filter = '';

        //iterating through objects
        $.each(data, function (key, value) {
            
            //contruction of rows 
            jsonData += '<tr>';
            jsonData += '<td>' + value.category + '</td>';
            
            jsonData += '<td>' + value.name + '</td>';

            jsonData += '<td>' + value.dose + '</td>';

            jsonData += '<td>' + value.description + '</td>';

            jsonData += '<td>' + value.cost + '</td>';

            jsonData += '</tr>';

        });

        //inserting rows into table
      $('#table').append(jsonData);
           
    });
});

function searchFunction(num, input) {

  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through  table rows, and hide rows that do not match the search
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[num];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//filter table by category
function searchbyFilters(){
    input = document.getElementById("filtered");
    searchFunction(0,input); //0 index to search in category column

}

//make category filter visible
function category() {
document.getElementById('filtered').style.visibility = "visible";
}

//remove table catefory filter
function clearFilter(){
 
    document.getElementById('filtered').style.visibility = "hidden"; 
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through  table rows, and shows all data
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
         tr[i].style.display = "";
      }
    }
  
//search table by name      
function searchbyName(){
  input = document.getElementById("myInput");
  searchFunction(1, input); //1 index to search in name column
}



