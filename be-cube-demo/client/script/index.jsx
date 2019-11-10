import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.less';

/**
 * custom view template
 *
 * @export
 * @class View
 * @extends {React.Component}
 */
export default class View extends React.Component {
  static getPartial() {
    return {
      html: <App />,
    };
  }

  render() {
    const { helper, html } = this.props;
    return (
      <html>
        <head>
          <title>Script</title>
          <link rel="stylesheet" href={helper.asset('script.css')} />
          <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
          <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('script.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  ReactDOM.hydrate(<App />, document.getElementById('container'));
}
