const {hash}= window.location;
const message = atob(hash.replace('#',''))
const messageForm =document.querySelector('#message-form');
const linkForm= document.querySelector('#link-form');

if (message){
    messageForm.classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML=message;
}



document.querySelector('form').addEventListener('submit' , event=>{
    event.preventDefault();
    
    messageForm.classList.add('hide');
    linkForm.classList.remove('hide');
    const input=document.querySelector('#message-input');
    const enc =btoa(input.value) ;
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${enc}`;
    linkInput.select();
})