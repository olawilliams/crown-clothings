import React from 'react';
import './error-boundary-styles.scss'


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if(this.state.hasError) {
           return ( 
           <div className="error-boundary">   
              <img src='https://i.imgur.com/lKJiT77.png' alt="error-boundary"/>               
                 <p>Something went wrong</p>
           </div>
           
           )
        }

        return(
          this.props.children
        )
    }
}

export default ErrorBoundary;