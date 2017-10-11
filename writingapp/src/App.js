import React, { Component } from 'react';
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled';

class App extends Component {

  state = {
    editor: "",
    name0: "",
    begin0: "",
    end0: "",
    style0: "",
    rules: 1
  }
  
  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  newFields = () => {
    this.setState( (prevState) => {

    }
  }

  render() {
    let {value} = this.state;
    let {handleChange} = this;
    return (
     <Container>
       <Column>
       <Button>
        New rule
       </Button>
      </Column>
      <Column>
        <Button>
          Random text
        </Button>
        <Document>
          <Editor 
            name={"Editor"}
            value={ value }
            onChange = { handleChange }
          />
          <Markup />
        </Document>
      </Column>
     </Container>
    );
  }
}

export default App;
