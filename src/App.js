import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import { Switch , Route} from 'react-router-dom';

const hatspage = () => (
<div>
  <h1>HatSpage</h1>
</div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={hatspage}/>
      </Switch>
    </div>
  );
}

export default App;
