
import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/theme/sqlserver';
import 'brace/mode/mysql';
import './Code.css';
class Code extends Component {
  onChange(newValue) {
    console.log('change', newValue);
  }

  render() {
    return (<div className='div1'>
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
export default Code;
