import React from 'react';
import csv from 'csv';
import ReactFileReader from 'react-file-reader';
import './App.css';
import { Upload, Icon, message,Button } from 'antd';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    this.state={
      dataSource:[]
    }
  }
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
    // Use reader.result
    csv.parse(reader.result, (err, data) => {
      this.setState({dataSource:data})
    });
  }
  reader.readAsText(files[0]);
}
addCustomer=() => {
  if(this.state.dataSource) {
  this.state.dataSource.map((item,index) => {
    console.log(item);
    
   if(index!==0){
     var data={
       "id":index,
      "customer-name":item[0],
      "buff":item[1],
      "cow":item[2],
      "date":item[3],
     }
     axios.post("http://localhost:3001/customer",data)
     .then((response) => {
       console.log(response);
       
     })
   }
  })
} 
}
render() {
  console.log(this.state.dataSource)
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'} >
        
               <div style={{height:"700" , width:"400", backgroundColor:'orange'}}>

               <center><Icon type="inbox"  />UPLOAD</center> 
               </div>
         </ReactFileReader>
            <Button onClick={this.addCustomer.bind(this)}>
               <Icon type="upload" /> Click to send
           </Button>
      </div>
      
  );
 }
 
}

export default App;

