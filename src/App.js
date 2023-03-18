import './App.css';

const TABLE_HEADER = [
  {
    id: 'TRADING_PAIRS',
    name: 'TRADING PAIRS',
  },
  {
    id: 'SPOT',
    name: 'SPOT',
  },
  {
    id: 'FUTURES',
    name: 'FUTURES',
  },
];

// Binance API FUTURES: https://fapi.binance.com/fapi/v1/exchangeInfo
// Binance API SPOT: https://api.binance.com/api/v3/ticker/bookTicker
// Binance Websocket SPOT: wss://stream.binance.com:9443/stream?streams=!ticker@arr
// Binance Websocket FUTURES: wss://fstream.binance.com/ws/!bookTicker

function App() {
  return (
    <div className="App">
      <div className="tableWrapper">
        <div className='tableHeader'>
          {TABLE_HEADER.map((el) => (
            <div className='headerCell' key={el.id}>{el.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
