import React, {Component} from 'react';

class Clocks extends Component {
    constructor(props){
        super(props);
        this.state = {
            digit: 0,

        };
    }
    componentDidMount = () =>{
        setInterval( () => {
this.setState(prev => ({
    digit: prev.digit +1,
}))
        }, 1000 )
    }

    render() { 
        return ( 
        <div div className="Apps">
seconds have elapsed since mounting : {this.state.digit}
        </div> );
    }
}
 
export default Clocks;