
var inputAdults = document.getElementById("adults");
var inputChildren = document.getElementById("children");
var duration = document.getElementById("duration");

// will calculate the amount of food needed and will show the result in #outputBox div.

function printList(){

    let adultsValue = inputAdults.value;
    let childrenValue = inputChildren.value;
    let durationValue = duration.value;    

    let totalMeat = (meatpp(durationValue) * adultsValue) + ((meatpp(durationValue) / 2) * childrenValue);
    let totalbeer = (beerpp(durationValue) * adultsValue);
    let totalSoda = (sodapp(durationValue) * adultsValue) + ((sodapp(durationValue) / 2) * childrenValue);

    document.getElementById("outputBox").innerHTML = null;

    document.getElementById("outputBox").innerHTML += "<h1 class=outputTitle> You will need:</h1>" 
    document.getElementById("outputBox").innerHTML += `<p>${totalMeat/1000}kg of meat.</p>` 
    document.getElementById("outputBox").innerHTML += `<p>${totalbeer/1000}L of beer.</p>`
    document.getElementById("outputBox").innerHTML += `<p>${totalSoda/1000}L of soda.</p>`

}


// if the barbacue duration is >= 6h the avarege consuption will increase
function meatpp(d){
    if(d >= 6){
        return 650;
    } else {
        return 400;
    }
}

function beerpp(d){
    if(d >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function sodapp(d){
    if(d >= 6){
        return 1500;
    } else {
        return 1000;
    }
}