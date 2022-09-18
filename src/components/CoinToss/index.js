// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
  }

  render() {
    const {Total, Heads, Tails} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-hading">Coins Toss Game </h1>
          <p className="card-para">Heads (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            className="coin-image"
            alt="coin"
          />
          <br />
          <button className="btn-style" type="button">
            Toss Coins
          </button>
          <p>{`Total: ${Total}     Heads: ${Heads}   Tails: ${Tails}`}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
