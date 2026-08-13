document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log('Login attempt:', { email, password });
            alert('Login attempt - check console for details');
        });