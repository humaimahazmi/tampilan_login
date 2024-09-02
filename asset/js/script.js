document.getElementById('LoginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsename = 'azmi';
    const corretPassword = 'azmi';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsename && password === corretPassword){
        alert('Login Berhasil');
        window.location.href = 'index.html';
    }else{
        alert('login gagal');
    }

})