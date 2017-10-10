let rootURL = 'https://finance.google.com/finance';

export default function(code){
  let url = `${rootURL}?q=${code}&output=json`;
  return fetch(url).then(function(response){
    return response.text();
  }).then(function(text){
    let rawJSONString = text.replace("//", "");
    let json = JSON.parse(rawJSONString);
    let data = json[0];
    return {
      stockIndex: data.l,
      stockChangeRaw: data.c,
      stockChangePercent: data.cp
    };
  });
}
