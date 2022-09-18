// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    number: 0,
  }

  onHeadsCount = () => {
    this.setState(prevState => ({Heads: prevState.Heads + 1}))
  }

  onToss = () => {
    const coinnumber = Math.round(Math.random() * 100)
    this.setState(prevState => ({
      number: coinnumber,
      Total: prevState.Total + 1,
    }))
  }

  render() {
    const {Total, Heads, Tails, number} = this.state
    let image
    if (number % 2 === 0) {
      image = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="coin-image"
          alt="toss result"
        />
      )
    } else {
      image = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="coin-image"
          alt="toss result"
        />
      )
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-hading">Coin Toss Game </h1>
          <p className="card-para">Heads (or) Tails</p>
          {image}
          <br />
          <button className="btn-style" type="button" onClick={this.onToss}>
            Toss Coins
          </button>
          <p>{`Total: ${Total}     Heads: ${Heads}   Tails: ${Tails}`}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
