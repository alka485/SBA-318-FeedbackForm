const tipForm = document.getElementById('tip-form');
//console.log(tipForm);
const tipContainer  = document.getElementById('tip-container');
//console.log(tipContainer);
const fbBtn = document.getElementById('feedback-btn');
//console.log(fbBtn);


fbBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    //console.log("click");
    window.location.href = "/feedback";

})

const createCard = (tip) => {
    //Create Card
    const cardEl = document.createElement('div');
    cardEl.classlist.add('card' , 'mb-3', 'm-3');
    classlist.setAttribute('key', 'tip.tip_id');

    //Create card header
    const headerEl = document.createElement('h4');
    headerEl.classList.add('card-header' , 'bg-primary' , 'text-light', 'p-2','m-0');
    headerEl.innerHTML= `${tip.username}`

    //Create card body
    const cardBodyEl = document.createElement('div')
    cardBodyEl.classList.add('card-body' , 'bg-light','p-2');
    cardBodyEl.innerHTML = `<p>${tip.tip}</p>`;

    //Append header & body to card 
    cardEl.appendChild(headerEl);
    cardEl.appendChild(cardBodyEl);

    //Append cardElement to tipContainer in the DOM

    tipContainer.append(cardEl);
}

//Get a list of existing tip from the server

const getTips = () => {
    fetch('/api/tips', {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
        console.error('Error', error);
    })
}