






const article=document.createElement('article');
article.classList.add('blog');
const h3=document.createElement('h3');
h3.innerText='My blog-2';
const p=document.createElement('p');
p.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias autem animi minima neque inventore delectus tempora eveniet maiores soluta aliquam labore, quam consectetur voluptatum dignissimos temporibus. Nemo ipsum, sapiente ipsa earum voluptates distinctio unde maiores ex quas error dolorum temporibus sint vero reprehenderit modi atque laudantium delectus architecto culpa.';
article.appendChild(h3);
article.appendChild(p);
const mySection=document.getElementById('blogs');
mySection.appendChild(article);




const blogs=document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.style.border='2px solid green';
    blog.style.borderRadius='10px';
    blog.style.margin='5px';
    blog.style.padding='10px';
}