import React, { Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';

class Product extends React.Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                 <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        {/* <img src="https://www.etanee.id/img/content/img_logo_etanee_white.png"></img> */}
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="trolylogo"></img>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(newValue) => this.handleCounterChange(newValue)}/>
            </Fragment>
        ) 
    }
}

export default Product;