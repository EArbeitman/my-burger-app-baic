import React, {Component}  from 'react';
import Aux from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger/>
                <div>
                    Build Controlers
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder