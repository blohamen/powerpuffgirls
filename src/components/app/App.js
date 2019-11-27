import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from "../../routes/main";
import EpisodePage from "../../routes/episode";

function App() {
  return (
     <Switch>
        <Route exact path="/">
            <MainPage />
        </Route>
       <Route path="/:id">
           <EpisodePage />
       </Route>
     </Switch>
  );
}

export default App;
