
const tableBody = document.getElementById("tableBody");



fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    function mapCryptoData() {
        data.map((element)=>{
            const cryptoItem = document.createElement("tr");
            cryptoItem.innerHTML = 
            `
            <td><img width=25px src="${element.image}"/> &nbsp;&nbsp;&nbsp;&nbsp;${element.name}</td>

            <td>${element.symbol.toUpperCase()}</td>

            <td class="text-end">$${element.current_price}</td>

            <td class="text-end">$${element.total_volume}</td>

            <td class="text-end" class=${element.market_cap_change_percentage_24h > 0 ? "text-success" : "text-danger"}>${element.market_cap_change_percentage_24h}%</td>

            <td class="text-end">Mkt Cap : $${element.market_cap}</td>
            `

            tableBody.appendChild(cryptoItem);
        })
    }
    mapCryptoData();
  })
  .catch(error => alert("Sry Problem Fetching API !!!"));
