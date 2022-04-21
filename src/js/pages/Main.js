import React from "react";
import {Icon, Grid,Segment, Responsive, Button, Header, Popup} from 'semantic-ui-react'

import { observer } from "mobx-react";

// Store Anbindung / Bsp.
import store from "../stores/store";

// Funkitons Komponente
import Function from "./Functions";

@observer
export default class Main extends React.Component {
  constructor(props) {
    super(props); 

    
   this.intervall;
    
    this.state = {
      
    };

 }

  

  handleClick(e,toggle) {
    this.setState({ active: !toggle.active })
  }



  

  render() {
    const { active } = this.state
    //const {maxAmountLogs} = store;

    const LogPage = <div>
    <Responsive as={Grid} minWidth={900}>
    <Grid celled>
    <Grid.Row>
      <Grid.Column width={10} >
      
        <Header as='h1'>
        <Icon name='archive' size='big' />
          Sample Project
        </Header>
      </Grid.Column>
      <Grid.Column width={3} >
      <Button toggle active={active} onClick={this.handleClick.bind(this)}>
            Updating 
        </Button>
        <Popup content='Alle 15 Sekunden werden neue Logs gefetcht' trigger={<Button icon='lightbulb outline' />} />
        
      </Grid.Column>
      <Grid.Column width={3} >
      <h1>Loganzahl: </h1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered>
      <Grid.Column width={12} >
      </Grid.Column>
      </Grid.Row>
      <Grid.Row >
      <Grid.Column width={4} >
      </Grid.Column>
      <Grid.Column width={12} >
      </Grid.Column>
      </Grid.Row>
    </Grid>
    </Responsive>
    <Segment.Group>
    <Responsive as={Segment} maxWidth={900}>
      Bitte breites Fenster verwenden.
    </Responsive>
    </Segment.Group>
    </div>

    const noLoginPage = <div>
      <Header>Login erforderlich um die Logs einzusehen!</Header>
    </div>



    return (
      <div>
        <h1>Die Main Seite</h1>
        <Function />
      </div>
      
    );
  }
}