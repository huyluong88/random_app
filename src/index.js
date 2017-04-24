import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Project from './Project';
import ProjectEdit from './ProjectEdit';
import Landing from './Landing';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/project/:id" component={Project}/>
      <Route path="/project/:id/edit" component={ProjectEdit}/>
    </Route>
  </Router>, document.getElementById('root')
);
