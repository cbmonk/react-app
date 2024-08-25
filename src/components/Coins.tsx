function ListGroup() {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>$45,000</td>
            <td>0.5 BTC</td>
            <td>$22,500</td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>$3,200</td>
            <td>2.5 ETH</td>
            <td>$8,000</td>
          </tr>
          <tr>
            <td>Cardano</td>
            <td>$1.20</td>
            <td>1000 ADA</td>
            <td>$1,200</td>
          </tr>
          <tr>
            <td>Solana</td>
            <td>$150</td>
            <td>10 SOL</td>
            <td>$1,500</td>
          </tr>
          <tr>
            <td>Polkadot</td>
            <td>$30</td>
            <td>50 DOT</td>
            <td>$1,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListGroup;