const uploadButton = document.getElementById("uploadButton");
const realFileBtn = document.getElementById("real-file");
const attachButton = document.getElementById('attachButton');
const searchButton = document.getElementById('searchButton');
const customTxt = document.getElementById('customTxt');
const filterForm = document.getElementById('query_bar');
const searchQuery = document.getElementById('searchQuery');

attachButton.addEventListener("click", function(){
  realFileBtn.click();
});

let file;
customTxt.innerHTML = "No file chosen, yet.";
realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
    file = realFileBtn.files[0];
    console.log("File is assigned!");
    console.log(file);
    // console.log(realFileBtn.files[0]);
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});



/*
  Modal Functionality
*/
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
uploadButton.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*
  End Modal Functionality
*/


var sampleMetaData = [{title: "Voodoo Child", author : "Jimi Hendrix"},
                      {title: "Foxy Lady", author : "Jimi Hendrix"},
                      {title: "Purple Haze", author : "Jimi Hendrix"},
                      {title: "Hey Joe", author : "Jimi Hendrix"}];

function loadAllData(){
  var tableContent = $('#tableContent');

  var content = '<table> <tr> <th>' + "Title" + '</th><th>' + "Author" + '</th>' + '<th>' + "URL" + '</th>' + '</tr>';

  $.each(sampleMetaData, function(index, rowData) {
    content += '<tr> <td>' + rowData.title + '</td> <td>' + rowData.author + '</td> <td>' + "URL" + '</td>' + '</tr>';
  });

  content += '</table>';
  tableContent.append(content);
}

loadAllData();

console.log(sampleMetaData);

filterForm.addEventListener("submit",function(event){
  event.preventDefault();
  var dropDownOption = $("#filterDropdown").val();
  console.log("Drop down option: " + dropDownOption);
  console.log("Search query: " + searchQuery.value);
});
