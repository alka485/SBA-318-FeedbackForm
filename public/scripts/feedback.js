//console.log("hello");
const feedbackForm = document.getElementById('feedback-form');
//console.log(feedbackForm);
const homeBtn = document.getElementById('home-btn');
//console.log(homeBtn);

homeBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    window.location.href = '/';
});

// Handle when a user submits feedback

if (feedbackForm) {
    feedbackForm.addEventListener("submit" , (e) => {
        e.preventDefault();
         // Get the feedback text from the DOM and assign it to a variable
        let feedback = document.getElementById('feedbackText').value;
        //console.log(feedback); 
        let email = document.getElementById('feedbackUsername').value;
        //console.log(email);
        const newfeedback = {
            feedback,
            email,
            feedbackType : 'Complaint'
        };

        //Fetch POST request to the server
        fetch('api/feedback' , {
            method: 'POST' ,
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newfeedback),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.status);
            email = '';
            feedback = '';
          });
    })
    .catch((error) => {
        console.error('Error:' , error);
    })
}