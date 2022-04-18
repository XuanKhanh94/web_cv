import React from "react";
import { Switch } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo/index";
import NotFound from "./component/NotFound";

function App() {
  return (
    <div className="App">

      <p>
        <Link to='/todo'>Todo</Link>
      </p>
      <p> <Link to="/album">Album</Link></p>

      <Switch>

        <Route path='/todo' component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route component={NotFound}/>
      </Switch>

    </div>
  );
}

export default App;
