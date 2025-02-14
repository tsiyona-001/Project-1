
        // Get all images with the class 'modal-img'
        var modalImages = document.querySelectorAll('.modal-img');
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('img01');
        var captionText = document.getElementById('caption');

        modalImages.forEach(function(image) {
            image.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        });

        // Close the modal when the user clicks on <span> (x)
        var closeModal = document.querySelector('.close');
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        // Close modal if clicked anywhere outside the image
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    