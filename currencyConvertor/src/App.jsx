import './App.css'
import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
const [amount , setAmount] = useState(0);
const [from,setFrom]=useState("inr");
const [to,setTo]=useState("usd");
const[convertedAmount,setConvertedAmount]=useState(0);

const CurrencyInfo = useCurrencyInfo(from)
const options = Object.keys(CurrencyInfo);
const swap = ()=>{
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = ()=>{
  
  setConvertedAmount(amount * CurrencyInfo[to])
}

return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `https://www.google.com/imgres?q=currency%20image&imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FGDJPF4%2Fabstract-finance-world-currency-background-GDJPF4.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fcurrency-background.html&docid=wUQKjlfQ9WBoeM&tbnid=HyUA2W-8gzryeM&w=1300&h=955&hcb=2`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert();
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          selectCurrency={from}
                          onCurrencyChange={(currency) => setAmount(currency)}
                          onAmountChange={(amount) => setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          selectCurrency={from}
                          amountDisable
                          onCurrencyChange={(currency) => setTo(currency)}
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);


}

export default App
