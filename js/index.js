


 const loginInput=document.getElementById('login');

    const passwordInput=document.getElementById('password');
    const accessButton=document.getElementById('sign-in')

   

    accessButton.addEventListener('click', (event) => {
        event.preventDefault()

        const username= loginInput.value.trim();
        const password= passwordInput.value.trim()

        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }

        if (username ==="admin"&&password==="admin123") {
            
            window.location.href = "main.html"
        } else 
            
            {
            alert("Incorrect username or password")
            
            passwordInput.value= ""
            passwordInput.focus()
        }



        
    });
