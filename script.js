
// An Array to create buttons
jokes = ["animal","career","celebrity","dev","explicit","fashion","food",
        "history","money","movie","music","political","religion","science",
        "sport","travel"];


document.addEventListener("DOMContentLoaded", function(){

// Using forEach to print button in UI
    jokes.forEach(function(joke){
        const btns = document.createElement('button');
        btns.className = "btn btn-dark"
        btns.innerText = joke;

        const allbtns = document.getElementById('all-btns');

        allbtns.appendChild(btns);


    });
});


const inpText = document.getElementById('inp'); // Input Text box

document.getElementById('all-btns').addEventListener("click", getJokes) // A div where we printed all buttons using forEach [3rd Line]

function getJokes(e){

    e.preventDefault();

    inpText.value = e.target.innerText;  // Input Text box value = selected button value.
}



document.getElementById('form').addEventListener("submit", function(e){

    e.preventDefault();

    if(inpText.value === ""){
        alert('Select Anything..')
    }else{  

        const categorie = `https://api.chucknorris.io/jokes/random?category=${inpText.value}` // add the end point - endpoint's category is input category

        xhrFunction(categorie); // calling a function with parameter categorie where we stored a end point 
    }
});


function xhrFunction(url){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);  // get endpoint as url where we given parameter in [49th line]

    xhr.onload = function(){

        if(this.status === 200){
            const data = JSON.parse(this.responseText); // changing into object 
            
            const li = document.createElement('li');
            li.className = "list-group-item list-group-item-dark rounded p-2"
            li.innerText = data.value;
            // document.getElementById('output').appendChild(li);
            document.getElementById('ul').appendChild(li);
        }
        if(this.status === 404){

            alert("Not Found..")
        }
    }

    xhr.send(); // it must.
}


// Used to clear a joke
document.getElementById('clearJoke').addEventListener('click', () => {

    document.getElementById('ul').innerHTML = ""
});