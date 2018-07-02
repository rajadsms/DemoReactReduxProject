import React from 'react';
class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let data=this.props.dataArray||[];
let htmlChunk="";
        data.map(function(obj){
               htmlChunk+=<div>obj.name</div>
        }
       
    );
        return (
           <div>
            {htmlChunk}
           </div>
        )
    }
}
export default ListComponent;