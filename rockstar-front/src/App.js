import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './components/Appbar.js';
import './App.css';

class App extends Component {


  render() {
    var qs = (function (a) {
      if (a === "") return {};
      var b = {};
      for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length === 1)
          b[p[0]] = "";
        else
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      }
      console.log(b);
      return b;
    })(window.location.search.substr(1).split('&'));

    let javaWebApp = qs["javaWebApp"];
    let dotnetApi = qs["dotnetWebApi"];

    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar javaWebApp={javaWebApp} dotnetApi={dotnetApi} />
        {/* <Appbar /> */}
      </React.Fragment>
    );
  }
}

export default App;
