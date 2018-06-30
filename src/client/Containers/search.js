import React  from 'react';
import {connect}  from 'react-redux';
import {makeAjaxCall} from '../Actions/flightAction';

class Search extends React.Component{
    constructor(props) 
    {
      super(props);  
    }
    componentWillReceiveProps(nextProps){
      console.log(this.props.flightData);
    }
    onHit(){
      let formdata={}
          let queryData={
                  'url':'https://api.myjson.com/bins/hfeym',
                  'method':'GET',
                  'cause':'FLIGHT_DATA',
                  'contentType':'application/json',
                  'accept':'application/json',
                  'formdata':formdata
              }
          this.props.makeAjaxCall(queryData);
    }
    
  render()
  {
    return (
            <div>
          Search Page
          <button onClick={this.onHit.bind(this)}>ClickMe</button>
            </div>
            );
  }
};



function mapStateToProps(state, ownProps){
  return  {
    flightData: state.flightDataObj.flightData  || {},
  }
} 
var mapDispatchToProps=function(dispatch){
  return {
    makeAjaxCall: function(data){ dispatch(makeAjaxCall(data)); },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);