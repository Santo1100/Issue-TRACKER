


    const loginInput=document.getElementById('login');
    const passwordInput=document.getElementById('password');
    const signInButton=document.getElementById('sign-in')

   

    signInButton.addEventListener('click', (event) => {
        event.preventDefault()

        const username= loginInput.value.trim();
        const password= passwordInput.value.trim()

        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }

        if (username ==="admin"&&password==="admin123") {
            // Successful login → redirect
            window.location.href = "main.html"
        } else {
            alert("Incorrect username or password")
            // Optional: clear password field only
            passwordInput.value= ""
            passwordInput.focus()
        }
    });
