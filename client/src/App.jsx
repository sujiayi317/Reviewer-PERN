import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import UpdatePage from './routes/UpdatePage'
import Home from './routes/Home'

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/restaurants/:id/update" component={UpdatePage}></Route>
                <Route exact path="/restaurants/:id" component={RestaurantDetailPage}></Route>
            </Switch>
        </Router>
    </div>
}

export default App
