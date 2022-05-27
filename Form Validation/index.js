let validate = ()=>{
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value
    let c1 = checkusername(username)
    let c2 = checkemail(email)
    let c3 = checkpassword(password)
    let c4 = confirmpassword(password,cpassword)
    if(c1 && c2 && c3 && c4){
        setInterval(() => {
            alert("Form Submitted");            
        }, 1000);
    }
}
function checkusername(username){
    if(username.length > 7)
    {  
        document.getElementById('username').classList.add('success');
        // replace the error class with success class. Now class of username is success
        document.getElementById('username').classList.replace('error','success');
        document.getElementById('username_error').innerText = ""
        return true;
    }
    else
    {   // add the error class
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').innerText = "Username must be 8 character long"
    }
}

function checkemail(email){
    if(email.length > 8 && email.includes('@'))
    {  
        document.getElementById('email').classList.add('success');
        // replace the error class with success class. Now class of username is success
        document.getElementById('email').classList.replace('error','success');
        document.getElementById('email_error').innerText = ""
        return true;
    }
    else
    {   // add the error class
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').innerText = "Enter a valid email"
    }
}

function checkpassword(password){
    if(password.length > 3)
    {  
        document.getElementById('password').classList.add('success');
        // replace the error class with success class. Now class of username is success
        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password_error').innerText = ""
        return true;
    }
    else
    {   // add the error class
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').innerText = "Enter a valid password"
    }
}

function confirmpassword(password,cpassword){
    if(password == cpassword && password != ''){
        document.getElementById('cpassword').classList.add('success');
        // replace the error class with success class. Now class of username is success
        document.getElementById('cpassword').classList.replace('error','success');
        document.getElementById('cpassword_error').innerText = ""
        return true;
    }
    else
    {   // add the error class
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerText = "Password not matched"
    }
}