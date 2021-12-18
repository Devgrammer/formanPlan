
import {  Route,  Switch } from "react-router-dom";
import Home from './../pages/Home/Home';
import { Academic } from './../pages/Academic';
import   {LoaderX}   from './../components/LoaderX/LoaderX';


const About =( ) =><h1 className="text-xl text-gray-600 pt-10">All about ME.</h1>;


const Routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/academic" component={Academic} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={LoaderX} />
    </Switch>
)

export default Routes;