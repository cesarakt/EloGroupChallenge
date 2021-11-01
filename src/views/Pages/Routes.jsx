import { Route, Switch } from 'react-router-dom';
import Leads from './Leads';
import NewLead from './NewLead';
import Register from './Register';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' component={Register} exact />
            <Route path='/leads' component={Leads} exact />
            <Route path='/newLead' component={NewLead} exact />
        </Switch>
    )
}