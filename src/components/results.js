import withStorage from '../components/storage.js';
import React from 'react';
class StoreResults extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      location: '' 
    }
  }
  componentDidMount() {
    const location = this.props.load('location'); 
    
    if (!location) {
      // This will come from the parent component
      // and would be passed when we spread props {...this.props}
      this.props.reallyLongApiCall()
        .then((user) => {
          this.props.save('location', user.location) || ''; 
          this.setState({
            location: user.location, 
          });
        }); 
    } else {
      this.setState({ location: '' })
    }
  }

  render() {
    const { location } = this.state;
     return (
	   {location}
    )
  }
}

const WrappedComponent = withStorage(StoreResults);

export default WrappedComponent;
