import React, { useState, useEffect } from "react";
import { Button, Form, Header, Segment, Table, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ReactFunction = () => {

    const [value,setValue] = useState("");



    const zentriert = {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign : "center"
    }

    const Segmentzentriert = {
      marginLeft: "10px",
      marginRight: "10px",
      textAlign : "center"
    }


    useEffect(() => {
      console.log('Use Effect');
    }, []);


    return (
      <div style={zentriert}>
            <Segment style={Segmentzentriert}>
                <h1>Hay!</h1>
            </Segment>     
        </div>
    );
};
  
  export default ReactFunction;