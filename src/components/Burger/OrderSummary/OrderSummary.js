import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingrediemntSummary = Object.keys(props.ingredients).map(key => {
        return (
            <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button clicked={props.purchaseCancelled} btnType={'Danger'}>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType={'Success'}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;