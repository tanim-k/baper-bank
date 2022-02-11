// get user gmail and password //
document.getElementById('login-submit').addEventListener('click', function(){
    document.getElementById('user-email');
    const userEmail = document.getElementById('user-email').value;
    // console.log(userEmail);
    document.getElementById('user-pass');
    const userPass = document.getElementById('user-pass').value;
    // console.log(userPass);
    if(userEmail == 'babul@gmail.com' && userPass == 'secret') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
})