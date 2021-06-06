/*CSS*/
import "bootstrap/dist/css/bootstrap.min.css";

import {Switch } from "react-router";
import Home from "./Component/Home";
import NotFound from "./Component/NotFound";
import ParticleBackground from "./Component/ParticleBackground";
import FPA from "./Component/FPA";
import DefaultRoute from "./Layouts/DefaultRoute";
import "./style.css";
import Cocomo from "./Component/Cocomo";
import Cocomo2 from "./Component/Cocomo2";
import UCP from "./Component/UCP";
import Embedded from "./Component/Cocomo/Embedded";
import Organic from "./Component/Cocomo/Organic";
import Semi_Detached from "./Component/Cocomo/Semi_Detached";
import SLIM from "./Component/SLIM";
function App() {
  return (
    <>
      <ParticleBackground />
      <Switch>
        <DefaultRoute exact path="/" component={Home} />
        <DefaultRoute exact path="/fpa" component={FPA} />
        <DefaultRoute exact path="/cocomo" component={Cocomo} />
        <DefaultRoute exact path={`/cocomo/organic`} component={Organic} />
        <DefaultRoute exact path={`/cocomo/semi-detached`} component={Semi_Detached} />
        <DefaultRoute exact path={`/cocomo/embedded`} component={Embedded} />
        <DefaultRoute exact path="/cocomo-2" component={Cocomo2} />
        <DefaultRoute exact path="/ucp" component={UCP} />
        <DefaultRoute exact path="/slim" component={SLIM} />
        <DefaultRoute component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
