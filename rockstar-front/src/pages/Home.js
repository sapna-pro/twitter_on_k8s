import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "../axios";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: '100px',
    flexDirection: "column",
    margin: "20px",
  },
  flexButton: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  textBox: {
    textAlign: 'center',
    background: '#e8eaf6',
  },
  text: {
    padding: '10px 10px',
    color: 'black',
    fontSize: '20px',
  }
});

function Home(props) {
  const { classes, javaWebApp, dotnetApi } = props;
  const [value, setValue] = useState('');
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    console.log("props ===== ", props)
    setShowValue(false);
  }, []);
  console.log("props ===== ")
  function callPython() {
    axios.get(`${javaWebApp}/testComms`)
      .then(res => {
        setValue(res.data);
        setShowValue(true);
      });
  }

  function callJava() {
    axios.get(`${javaWebApp}/testHealth`)
      .then(res => {
        setValue(res.data);
        setShowValue(true);
      });
  }

  function callDotnet() {
    axios.get(`${dotnetApi}/testHealth`)
      .then(res => {
        setValue(res.data);
        setShowValue(true);
      });
  }
  return (
    <div className={classes.root}>
      <h1>Select Song from Left Naviation</h1>

      <div >
        <Button variant="contained" color="primary" variant="contained" onClick={callPython}>Python API</Button>
        <Button style={{ marginLeft: "20px" }} variant="contained" color="primary" variant="contained" onClick={callJava}>Java API</Button>
        <Button style={{ marginLeft: "20px" }} variant="contained" color="primary" variant="contained" onClick={callDotnet}>Dotnet API</Button>
      </div>

      <div>
        {showValue ? <div className={classes.text} dangerouslySetInnerHTML={{ __html: value }} /> : null}
      </div>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
