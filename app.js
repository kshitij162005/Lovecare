const donates = document.getElementById("donat")
const thankyou = document.getElementById("thankyou")
donates.onclick =()=>{
    donates.style.display='none';
    thankyou.style.display='block';
}

const contact_form = document.getElementById("contactdesc")
const contact = document.getElementById("contact")

contact.onclick=()=>{
    if(contact_form.style.right == '0px'){
        contact_form.style.right = '-510px';
    }
    else{
        contact_form.style.right = '0px';
    }


}

