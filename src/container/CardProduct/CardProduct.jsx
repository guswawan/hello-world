import React from 'react';

class CardProduct extends React.Component {
    state = {
        order: 0
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
        
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/BSB.jpg" alt=""/>
                </div>
                <p className="product-title">Dada Ayam Tanpa Tulang</p>
                <p className="product-price">Rp 120,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;