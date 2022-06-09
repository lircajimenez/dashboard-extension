// fetch image from API
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.urls.full);
    // throw Error("I'm an error");
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    // console.error(err);
    console.log("Something went wrong!");
    document.body.style.backgroundImage =
      "url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTQ3ODcyMDQ&ixlib=rb-1.2.1&q=80)";
  });

// fetch data from CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong.");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} alt="${data.name} logo" />
        <span>${data.name}</span>
    `;
    document.getElementById("crypto-info").innerHTML += `
        <p>🎯 : $${data.market_data.current_price.cad}</p>
        <p>👍🏾 : $${data.market_data.high_24h.cad}</p>
        <p>👎🏾 : $${data.market_data.low_24h.cad}</p>
    `;
  })
  .catch((err) => console.error(err));
