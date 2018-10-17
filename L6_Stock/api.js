//CNDJO9WP98PVJP38
let rootURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';

export default function(code){
    let url = `${rootURL}${code}&apikey=CNDJO9WP98PVJP38`;
    return fetch(url).then(function(response){
        return response.text();
    }).then(function(text){
        let rawJSONString = text.replace("//", "");
        let json = JSON.parse(rawJSONString);
        let data = json["Global Quote"];
        return {
            stockIndex: data["01. symbol"],
            stockChangeRaw: data["02. open"],
            stockChangePercent: data["10. change percent"]
        };
    });
}