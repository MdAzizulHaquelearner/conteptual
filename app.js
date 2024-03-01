const allCategory = async() => {
const url = await fetch('https://openapi.programming-hero.com/api/news/categories')
const jsonFormat = await url.json();
const dataArray = jsonFormat.data.news_category
displayAllCategoryBtn(dataArray)

};

const displayAllCategoryBtn = (dataArray) => {
const btnContainer = document.getElementById('btn-container')
dataArray.forEach(element => {
const div   = document.createElement('div');
div.innerHTML =  ` <button onclick="getNews('${element.category_id}')" class="btn">${element.category_name}</button>`
btnContainer.appendChild(div)


});
};

const getNews = (id) => {
    allNews(id);
}

// news load
const allNews = async(id)=> {
    document.getElementById('loader').classList.remove('hidden')
const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
const jsonFormat = await response.json();
const dataArray = jsonFormat.data;
const newsContainer =document.getElementById('news-container');
newsContainer.textContent = ''

dataArray.forEach(news => {
    document.getElementById('loader').classList.add('hidden')
const div = document.createElement('div');
div.innerHTML = `
<section class="card w-full mt-5 card-side bg-base-100 shadow-xl">
<img class="p-4 w-1/2 h-11/12 rounded-xl" src="${news.image_url} " alt="images"/>
<div class="card-body">
<div class="flex w-full space-x-48 ">
<h2 class="card-title">
${news.
title.slice(0,20)} </h2>
<p class ="text-xl">${news.rating.badge} <sup>${news.rating.number}</sup></p>
</div>
<p>${news.
details.slice(0,200)}</p>
<div class="flex items-center justify-between">

<div class="flex">
<div class="flex items-center gap-2"><h2 class="text-xl">Author: </h2>
<h2>${news.author.name} </h2></div>
</div>
<div class="flex gap-2 font-bold text-xl"> <h2>view: </h2>${news.total_view
} </div>
<div> <button onclick="detailsView('${news.title}')" class="btn btn-primary">Details</button></div>

</div>
</div>
</section>

`

newsContainer.appendChild(div)
console.log(news)        
});
}
const detailsView = (a) => {
    console.log(a)
}
 
const searchEngine = () => {
    const inputValue = document.getElementById('input-field').value;
    
    if(inputValue === '01' || inputValue === '02' ||inputValue === '03' ||inputValue === '04' ||inputValue === '05' ||inputValue === '06' ||inputValue === '07' ){
        allNews(inputValue)
    }else{
        alert('u can just use  01 to 06 number in search bar')
    }

}


allNews('01')
allCategory()