// import React from "react";
// import { ReactDOM } from "react";
// import ace from 'ace-builds';
// import "./intcode.css";
// function Ide_d(){
//    return( <div id="root1">
//     kkkk
//       </div>)

// }
// // function Ide(){
// //    let editor=Ide_d;
   
// //    return <div>
// //       { ace.edit(editor,{
// //         theme:"ace/theme/cobalt",
// //         mode:"ace/mode/javascript",
// //        })}
        
// //     </div>
// // }
// export default Ide_d;
import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/sqlserver';
import 'brace/mode/mysql';
import Head from '../head/head';
import './intcode.css';
import Switch from '../Switch/switch';
class Ide extends Component {

  onChange(newValue) {
    console.log('change', newValue);
  }

  render() {
    return (<div className='div1'>
      {/* <Head/> */}
      {/* <Switch/> */}
      <div className='ide'>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          width='100%'
          height='400px'
          showPrintMargin={true}
        />
      </div>
      <button className='complete'>complete</button>
      
      </div>
      
    );
  }
}
// class Ide extends Component {

//   onChange(newValue) {
//     console.log('change', newValue);
//   }

// render() {
//   return (<div className='ide'>
    
//       <AceEditor
//         mode="javascript"
//         theme="monokai"
//         onChange={this.onChange}
//         name="UNIQUE_ID_OF_DIV"
//         editorProps={{$blockScrolling: true}}
//         width='100%'
//         height='400px'
//         showPrintMargin={true}
//       />
      
    
//     </div>
    
//   );
// }
// }
export default Ide;
