const API_KEY = "fe6d890f46834d6b9d94e6a07cd27c43"

const allBtns  = document.querySelectorAll(".btn")
const container = document.querySelector(".container")

allBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{

        console.log(e.target.innerText)
        getData(e.target.innerText)
    })
})

const getData = async(subject) =>{

    const response = await fetch("https://newsapi.org/v2/everything?q={subject}&apiKey=fe6d890f46834d6b9d94e6a07cd27c43")

    const data = await response.json()
    console.log(data.articles)
    renderData(data.articles)
}

const renderData = (articles)=>{
    container.innerHTML = "";
    for (let item of articles) {
        const {title ,description, urlToImage,url ,publishedAt} = item
    }
}


