import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowPage from "../../routes/show";
import EpisodePage from "../../routes/episode";

function App() {
  return (
     <Switch>
        <Route exact path="/">
            <ShowPage />
        </Route>
       <Route path="/episode/:id">
           <EpisodePage />
       </Route>
     </Switch>
  );
}

export default App;
