import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

// const initialState = {
//     cryptos: [],
//     cryptoDetail: {},
//     favs:[]
//   };


class Drop extends React.Component {
    
    constructor(props) { //Iivoca  a susper porque es un constructor de clases que extiende de component 
        super(props);
        this.state = {
         id: "no hay nada"
        };

    }
    
    // componentDidMount(){
    //     this.props.getFavs()
    //     this.setState(() => [...this.state, this.props.favs.name ])        
    // }
    // this.setState(() =>{
    //     ...this.state, this.props.favs : this.props.name
    // })
    handleChange(event) {
        this.setState({id: event.target.value});
        event.preventDefault();        

    }
   
    render(){
      const cript =  [
            {
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin",
            "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            "current_price": 29519,
            "market_cap": 563050914751,
            "market_cap_rank": 1,
            "fully_diluted_valuation": 620449527838,
            "total_volume": 22910387832,
            "high_24h": 30636,
            "low_24h": 29400,
            "price_change_24h": -818.6102654908973,
            "price_change_percentage_24h": -2.69833,
            "market_cap_change_24h": -13680876587.714233,
            "market_cap_change_percentage_24h": -2.37214,
            "circulating_supply": 19057262,
            "total_supply": 21000000,
            "max_supply": 21000000,
            "ath": 69045,
            "ath_change_percentage": -57.2271,
            "ath_date": "2021-11-10T14:24:11.849Z",
            "atl": 67.81,
            "atl_change_percentage": 43452.4094,
            "atl_date": "2013-07-06T00:00:00.000Z",
            "roi": null,
            "last_updated": "2022-06-03T18:14:30.888Z"
            }
        ]
       let crypto = this.props.favs.filter(x => this.state.id === x.id);
        // http://localhost:3000/crypto/ethereum
    return(
    <>
        <Link to ={`/crypto/${this.state.id}`}>{crypto.image}</Link>
        <button onClick={()=>{this.props.remove(this.state.id)}}>X</button>
        <selector value={this.state.id} onChange={() =>this.handleChange()}>
            {
            this.props.favs && this.props.favs.map(crypto => {
                return <option value={crypto.id}>
                        {crypto.id}
                       </option>
                })
            }
        </selector>
    </>
    )
    } 
}
// .bitcoin F X 
// .ethereum f x
// .solana F X
// .doge F X
// <option> hola <a>a</a>
//</option>
{/* <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}




function mapStateToProps(state) {
    return{
        favs: state.favs
    }
}
function mapDispatchToProps(dispatch){
    return{
        remove: (id) => dispatch(removeFavs(id)),
        getFavs: () => dispatch(getFavs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drop)