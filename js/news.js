const searchForm = document.querySelector(".search");
const input = document.getElementById("input");
const newsList = document.querySelector(".news-list");

searchForm.addEventListener('submit', retrieve)

function retrieve(e){

    if(input.value == ''){
            Swal.fire({
              icon: 'info',
              title: 'El campo de busqueda está vacio',
              showConfirmButton: false,
              timer: 1000
            })
    };
    
    newsList.innerHTML = ''

    e.preventDefault()

    const apiKey = '56c1d727ee0441dabac824618c0b9cba'
    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li)
        });
    }).catch((error)=>{
        console.log(error)
    })

}