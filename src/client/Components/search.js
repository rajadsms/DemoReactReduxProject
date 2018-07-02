import React from 'react';
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={inputData:[]};
    }

_inputDatacollector(){
let inputData=[];
inputData.push({'fromDest':this.fromDest.selectedOptions["0"].value,
'toDest':this.toDest.selectedOptions["0"].value,
'departure':this.departure,
'return':this.return});
this.props.onClickSearch(inputData);
}
   

    render() {
        return (
          
                <div>
                    <select ref={node => { this.fromDest = node}}>
                        <option value="kolkata">Kolkata</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                    </select>
                    <select ref={node => { this.toDest = node }}>
                        <option value="kolkata">Kolkata</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                    </select>

                    <span>Departure Date: </span><input type="datetime-local" name="departure"  ref={node => { this.departure = node }}/>
                    <span>Return Date: </span><input type="datetime-local" name="return"  ref={node => { this.return = node }}/>
                    <button onClick={this._inputDatacollector.bind(this)}>Search</button>
                </div>
         
        )
    }
}

export default SearchComponent;