import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Thing } from 'post-tsdx-project';

const App = () => {
  return (
    <div>
      <Thing />
      <Button text="test" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
