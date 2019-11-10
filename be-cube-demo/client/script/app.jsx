import React from 'react';
import { hot } from 'react-hot-loader';

/* eslint-disable no-alert */

// const App = () => (

// );

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      CC: null
    }
  }

  componentDidMount () {
    this.loadScript("http://127.0.0.1:6001/public/a.js", () => {
      console.log('Success')
    })

    this.loadScript("http://127.0.0.1:6001/public/index.js", () => {
      var CC = window.El4
      console.log(1234, CC)
      this.setState({
        CC: CC
      })
    })

    setTimeout(() => {
      var CC = window.El4
      console.log(1234, CC)
      this.setState({
        CC: CC
      })
    }, 2000)
  }

  loadScript(url, callback) {
    const script = document.createElement("script")
    script.type = "text/babel";
    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      script.onload = function () {
        console.log("Magic")
        callback();
      };
    }
    script.src = url;
    document.body.appendChild(script);
  }

  render() {
    const { CC } = this.state
    console.log('GET', CC)
    return (
      <div>
        { CC ? <CC></CC> : 123}
        <h1 className="title">Script</h1>
        <p>
          Scripting page template in `/client/script/index.jsx`, visit via url
          `/script`
        </p>
        <p>CSS file serves at `/build/script.css`</p>
        <p>JS file serves at `/build/script.js`</p>
        <hr />
        <button onClick={() => alert('it works!')}>click me</button>
      </div>
    );
  }
}

export default hot(module)(App);
