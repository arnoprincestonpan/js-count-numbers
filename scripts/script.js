const btnCount = document.getElementById("btn-count")
const fieldCountFrom = document.getElementById("count-from")
const fieldCountTo = document.getElementById("count-to")
const displayResults = document.getElementById("display-area")

btnCount.addEventListener("click", function(){
    console.log("Counting Initialized...")
    let savedCountFrom = 0
    // clear previous/existing results
    displayResults.innerHTML = ""
    // setup unordered lists
    displayResults.innerHTML += "<ul>"
    if(fieldCountFrom.value === fieldCountTo.value){
        console.log("No Counting...")
        displayResults.innerHTML += "<li>No Counting. Numbers are the same.</li>"
    }else if(fieldCountFrom.value > fieldCountTo.value){
        console.log("Counting Down...")
        for( savedCountFrom = fieldCountFrom.value; savedCountFrom >= fieldCountTo.value; savedCountFrom--){
            displayResults.innerHTML += "<li>" + savedCountFrom + "</li>";
        }
    }else if(fieldCountFrom.value < fieldCountTo.value){
        console.log("Counting Up...")
        for( savedCountFrom = fieldCountFrom.value; savedCountFrom <= fieldCountTo.value; savedCountFrom++){
            displayResults.innerHTML += "<li>" + savedCountFrom + "</li>";
        }
    }
    // close unordered list
    displayResults.innerHTML += "</ul>"
})