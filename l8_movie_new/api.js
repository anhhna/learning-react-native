let rootURL = 'https://api.themoviedb.org/3/search/movie?api_key=cc3c5f943552fcaa71b5f10b8f9ae825';
let detailURL = 'https://api.themoviedb.org/3/movie/';

exports.search = function(q){
  let url = `${rootURL}&query=${q}`;
  console.log(url);
  return fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>{
      return json.results;
    });
}

exports.view = function(id){
  let url = `${detailURL}${id}?api_key=cc3c5f943552fcaa71b5f10b8f9ae825`;
  return fetch(url)
    .then((resp)=>resp.json());
}
