import React  from 'react';
import {connect}  from 'react-redux';
import {makeAjaxCall} from '../Actions/flightAction';
import SearchComponent from '../Components/search';
import ListComponent from '../Components/dataList'

class Search extends React.Component{
    constructor(props) 
    {
      super(props);  
      this.state={objectTOrender:[]};
      
    }
    componentDidMount(){
      this.onHit();
    }
    componentWillReceiveProps(nextProps){
      console.log(this.props.flightData);
    }
    
    onHit(){
      let formdata={}
          let queryData={
                  'url':'https://api.myjson.com/bins/w1ot6',
                  'method':'GET',
                  'cause':'FLIGHT_DATA',
                  'contentType':'application/json',
                  'accept':'application/json',
                  'formdata':formdata
              }
      this.props.makeAjaxCall(queryData);
    }

    _onclickHit(inputData){
      let dataToCheck=inputData[0];
      let finalObj=[];
      this.props.flightData.map(function(obj){
        if(obj.source==dataToCheck.fromDest && obj.destination==dataToCheck.toDest
        ){
          finalObj.push(obj);
        }
      })
    
this.setState({'objectTOrender':finalObj});
    }
    
  render()
  {

    return (
      <div>
            <div>
          Search Page
          <SearchComponent onClickSearch={this._onclickHit.bind(this)}/>
            </div>
            <div>
        <ListComponent dataArray={this.state.objectTOrender}/>
              </div>
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