
        const container = document.getElementById('container');
        const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', () => {
            container.classList.toggle('active');
        });

        function handleSignUp() {
            const name = document.getElementById('signUpName').value;
            const email = document.getElementById('signUpEmail').value;
            const password = document.getElementById('signUpPassword').value;
            const signUpMessage = document.getElementById('signUpMessage'); //get sign up msg div

            if(name.trim() === '' || email.trim() === '' || password.trim() === ''){
                 signUpMessage.textContent = "Please fill all the required fields.";
                 signUpMessage.classList.add('error'); // Apply error style
                 signUpMessage.classList.remove('message');
                 return
            }

            // For demonstration: Save to local storage. In real apps, send this data to a server
            localStorage.setItem('user', JSON.stringify({ name, email, password }));

              // Display the thank you message
              signUpMessage.textContent = "Thank you for signing up, buddy 🤗!";
             signUpMessage.classList.add('message');  // Apply message style
               signUpMessage.classList.remove('error');


                //Clear input fields
                document.getElementById('signUpName').value = '';
                document.getElementById('signUpEmail').value = '';
                document.getElementById('signUpPassword').value = '';
        }

       function handleSignIn() {
            const email = document.getElementById('signInEmail').value;
            const password = document.getElementById('signInPassword').value;
           const signInMessage = document.getElementById('signInMessage'); // Get sign in msg div
          if(email.trim() === '' || password.trim() === ''){
                signInMessage.textContent = "Please fill all the required fields.";
                signInMessage.classL
              ist.add('error')
                 signInMessage.classList.remove('message');
              return;
            }

            // Check if there's user data in local storage
            const userData = localStorage.getItem('user');

            if (userData) {
                const user = JSON.parse(userData);
                // For demonstration: Check if provided credentials match
                if (user.email === email && user.password === password) {

                     signInMessage.textContent = "Welcome back, buddy 🤗!";
                     signInMessage.classList.add('message')
                     signInMessage.classList.remove('error');
                    // Clear input fields
                    document.getElementById('signInEmail').value = '';
                    document.getElementById('signInPassword').value = '';

                } else {
                    signInMessage.textContent = "Invalid sign-in credentials.";
                   signInMessage.classList.add('error'); // Apply error style
                    signInMessage.classList.remove('message');

                  }
            }else{
                  signInMessage.textContent = "No user data found. Please sign up first.";
                 signInMessage.classList.add('error'); // Apply error style
                   signInMessage.classList.remove('message');
            }
        }
   
