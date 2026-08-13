


document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if(password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Login attempt:', { email, password });
        alert('Login attempt - check console for details');
}});

