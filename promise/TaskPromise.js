const box = document.getElementById('data');
let search = "tesla";
let url = "https://newsapi.org/v2/everything?q=${search}&apiKey=1e4d7358c26843d98c618391469576e2";


function inPromise() {
axios.get(url)                                         
  .then(response => {
    box.innerHTML = render(response.data);
  })                                          
  .catch(error => {                      
    box.innerHTML = message(error.message);             
  });                                                                                                                       
}                                         

                                                                                     
function myFunction() {
  search = document.getElementById('input-search').value;
  url = `https://newsapi.org/v2/everything?q=${search}&apiKey=1e4d7358c26843d98c618391469576e2`;
  console.log(search.url)
  searching();
}  


function render(response) {
let box = '';
response.articles.forEach(data => {
  box +=  `<div class="container bg-dark mt-5">
              <div class="img"><img src="${data.urlToImage}" style="width:100%";/></div><br>
              <div class="title text-white"><u><i>${data.title}</i></u></div><br>
              <div class="publishedAt text-white">${data.publishedAt}</div><br>
              <div class="description text-white">${data.description}</div><br>
           </div>` ;
});
  return box;
};


function searching() {
  const data = inPromise();
	render(data.box);
}

searching()