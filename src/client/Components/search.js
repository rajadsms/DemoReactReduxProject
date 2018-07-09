import React from 'react';
//import styles from '../css/main.css'

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={inputData:[]};
    }

_inputDatacollector(){
let inputData=[];
inputData.push({'fromDest':this.fromDest.selectedOptions["0"].value,
'toDest':this.toDest.selectedOptions["0"].value,
'departure':new Date(this.departure.value).toString(),
'return':new Date(this.return.value)}).toString();
this.props.onClickSearch(inputData);
}
   

    render() {
        return (
          
               
                   <div style={{'border':'1px solid Black' }}>

                       <div style={{'padding':'5px'}}><span>Source: </span>
                    <select  ref={node => { this.fromDest = node}}>
                        <option value="kolkata">Kolkata</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                    </select>
              </div>
              <div style={{'padding':'5px'}}><span>Destination: </span>
                    <select ref={node => { this.toDest = node }}>
                        <option value="kolkata">Kolkata</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                    </select>
</div>
                   <div style={{'padding':'5px'}}>
                        <span>Departure Date: </span>
                   <input type="datetime-local" name="departure"  ref={node => { this.departure = node }}/>
                   </div>
                   <div style={{'padding':'5px'}}>
                    <span>Return Date: </span><input type="datetime-local" name="return"  ref={node => { this.return = node }}/>
                    </div>
                    <button onClick={this._inputDatacollector.bind(this)} style={{'padding':'5px'}}>Search</button>
                </div>
         
        )
    }
}

export default SearchComponent;