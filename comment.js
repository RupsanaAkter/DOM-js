
//set eventHandler--------

document.getElementById('post-comment').addEventListener('click',function(){


    //get user comment-------
    const commentCont=document.getElementById('comment-content');
    //const userCmnt=commentCont.value;



    //---create comment paragraph----

    const p=document.createElement('p');
    p.innerText=commentCont.value;


    //append add-------

    const commentContainer=document.getElementById('comment-container');
    commentContainer.appendChild(p);

    //clean the comment box-----
    commentCont.value='';

})
