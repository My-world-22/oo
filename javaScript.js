
    

window.onload = function(){
    document.querySelector('.blog-sidebar div:last-child li:nth-of-type(2)').remove()
    for(let link of  document.querySelectorAll(".col-md-6") )
  
    link.onclick = function(event){
        event.preventDefault()
        event.target.closest('.col-md-6').remove()
    }


for(let autor of document.querySelectorAll('.blog-post-meta a'))
autor.addEventListener('mouseover',function(event){
    alert(event.target.innerText)
})}