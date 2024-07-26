 const generatememebtn=document.querySelector(".meme-generator button");
 const genreatememe=()=>{
fetch("https://meme-api.com/gimme/wholesomememes")
.then((resp)=>resp.json())
.then((data)=>updateDetails(data.url,data.title))
 }
 const updateDetails=(url,title)=>{
    memeImage.setAttribute("src",url)
    memeTitle.innerHTML=title
 }
 const memeImage = document.querySelector(".meme-generator img");
 const memeTitle=document.querySelector(".meme-generator .meme-title")
 generatememebtn.addEventListener("click",genreatememe);
 genreatememe();