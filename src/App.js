import { useState, useEffect } from "react";

function Loading({ message }) {
  return <strong>{message}</strong>;
}

function CoinList({ coins }) {
  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setLoading((curr) => !curr);
      });
  }, []);
  return (
    <div>
      <h1>The coins : {coinList.length}</h1>
      {loading ? (
        <Loading message={"Loading info~"} />
      ) : (
        <CoinList coins={coinList} />
      )}
    </div>
  );
}

export default App;
