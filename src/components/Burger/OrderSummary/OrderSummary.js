import React from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey =>{
                return (
                <li key = {igKey}> 
                    <span style = {{textTransform: 'capitalize'}} ></span>
                    {igKey}: {props.ingredients[igKey]}
                </li>
                )
            })

    return(
        <Auxilliary>
            <h3>Your order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to checkout?</p>
        </Auxilliary>
    );
}

export default orderSummary