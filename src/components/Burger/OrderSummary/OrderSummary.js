import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    componentWillUpdate() {
        console.log('Will update');
    }

    render() {
        const ingrediemntSummary = Object.keys(this.props.ingredients).map(key => {
            return (
                <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}</li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingrediemntSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button clicked={this.props.purchaseCancelled} btnType={'Danger'}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType={'Success'}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;