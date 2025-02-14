const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');
const selectedValue = document.getElementById('selected-value');

let selectedRating = null;

// Handle rating selection
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.getAttribute('data-rating');
    });
});

// Handle submit
submitButton.addEventListener('click', () => {
    if (selectedRating) {
        selectedValue.textContent = selectedRating;
        ratingCard.style.opacity = "0";
        setTimeout(() => {
            ratingCard.classList.add('hidden');
            thankYouCard.classList.remove('hidden');
            thankYouCard.style.opacity = "1";
        }, 500);
    } else {
        alert('Please select a rating before submitting!');
    }
});
