import React from 'react';
class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let dataArray=this.props.dataArray||[];
        let htmlChunk=[];
        dataArray.map(function(obj){
               htmlChunk.push(<div style={{'border':'1px solid black','padding':'5px'}}>
                <div>Price:{obj.price}</div>
               <div>Name:{obj.name}</div>
               <div>No:{obj.no}</div>
               <div>Source:{obj.source}</div>
               <div>Destination:{obj.destination}</div>
               <div>Depart:{obj.departureTime}</div>
               <div>Arrive:{obj.arriveTime}</div>
               <div>Seats Left:{obj.seat_left}</div>
               </div>
            );
        }
      
    );
        return (
          
           <div>
               { htmlChunk.length?
            <div style={{'border':'1px solid black'}}>
            {htmlChunk}
            </div>:"No Data to Display"}
           </div>
        )
    }
}
export default ListComponent;