import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
import Spinner from './Spinner';


class App extends React.Component {

       state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message }),
         );
    }

    componentDidUpdate() {
        console.log('My componenent was just updated');
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
         }
 
         if(!this.state.errorMessage && this.state.lat) {
             return <SeasonDisplay lat={this.state.lat} />
         }
 
         if(!this.state.errorMessage && !this.state.lat) {
             return <Spinner message="Please accept location"/>;
         }
    }

    render() {
       
       return (
           <div className="red border">
               {this.renderContent()}
           </div>
       );
    }
}

ReactDOM.render (
    <App />,
    document.querySelector('#root')
);