document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('secret-info').style.display='none';
})

//focus---------
document.getElementById('delete-confirm').addEventListener('focus',function(){
   document.body.style.backgroundColor='red';
})

//blur-------
document.getElementById('delete-confirm').addEventListener('blur',function(){
   document.body.style.backgroundColor='white';
})

//keyup--------
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const deletBtn= document.getElementById('delete-btn');
if (event.target.value==='delete') {
    deletBtn.removeAttribute('disabled');
}
else{
    deletBtn.setAttribute('disabled',true);
}

//    const deleteField=document.getElementById('delete-confirm');
//    console.log(deleteField.value);
})
//change-------
document.getElementById('delete-confirm').addEventListener('change',function(){
   const deleteField=document.getElementById('delete-confirm');
   console.log(deleteField.value);
})