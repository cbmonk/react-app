import './App.css'

import Address from './components/Address';
import PriceFeed from './components/PriceFeed';
import Wallet from './components/Wallet';
import Portfolio from './components/Portfolio';
import Performance from './components/Performance';
import Coins from './components/Coins';

function App() {
  return (
    <>
      <div className="container">

      <div className="row">
        <div className="col">
          
        </div>
        <div className="col">
          
        </div>
      </div>


      
        <div className="row">
          <div className="col-md-9">
            <Address />
          </div>
          {/* <div className="col">
            <PriceFeed /> 
          </div> */}
          <div className="col d-flex justify-content-end">            
            <Wallet />
          </div>
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <Performance />
        </div>
        <div>
          <Coins />
        </div>
      </div>
    </>
  )
}

export default App