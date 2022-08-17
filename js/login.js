document.getElementById('user-login').addEventListener('click',function(){
    const emailPart = document.getElementById('user-email');
    const email = emailPart.value;
    const passwordPart = document.getElementById('user-password');
    const password = passwordPart.value;
    console.log(email,password);
    if(email === 'ash@gmail.com' && password === 'abcd')
    {
        window.location.href ="bank.html";
    }
    else{
        alert('Please Enter The Correct Email And Password??')
    }
})