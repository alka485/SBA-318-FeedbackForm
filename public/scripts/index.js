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