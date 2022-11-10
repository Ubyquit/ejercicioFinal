var baseUrl = "https://api.coinpaprika.com/v1/coins";
//var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var coin_Id = "btc-bitcoin";

fetch(`${baseUrl}`, {
  method: "GET",
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json);

        let coinsData = json;

        for (let coin in coinsData) {
          let id = coinsData[coin].id;
          let name = coinsData[coin].name;
          let symbol = coinsData[coin].symbol;
          let rank = coinsData[coin].rank;
          let is_new = coinsData[coin].is_new;
          let is_active = coinsData[coin].is_active;
          let type = coinsData[coin].type;

          document.getElementById("id").innerHTML = id;
          document.getElementById("name").innerHTML = name;
          document.getElementById("symbol").innerHTML = symbol;
          document.getElementById("rank").innerHTML = rank;
          document.getElementById("is_new").innerHTML = is_new;
          document.getElementById("is_active").innerHTML = is_active;
          document.getElementById("type").innerHTML = type;
        }
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
