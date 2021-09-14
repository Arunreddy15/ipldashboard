import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ipl/:id" component={TeamMatches} />
  </Switch>
)

export default App
