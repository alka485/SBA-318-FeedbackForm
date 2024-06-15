//console.log("hello");
const feedbackForm = document.getElementById('feedback-form');
//console.log(feedbackForm);
const homeBtn = document.getElementById('home-btn');
//console.log(homeBtn);

homeBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    window.location.href = '/';
});
