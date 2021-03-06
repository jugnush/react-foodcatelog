import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/app';
import FirstComponent from './components/firstComponent';
import Notfound from './components/notfound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={FirstComponent} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={Notfound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
