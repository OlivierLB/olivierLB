import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Composants
import Router from './Constant/Router/Router.js';

//Reducers
import router from './redux/reducers/Routing';
import filtre from './redux/reducers/Filtre';
import inscrire from './redux/reducers/Inscrire'
import connection from './redux/reducers/Connection'
import conseils from './redux/reducers/Conseils'
import erreur from './redux/reducers/Erreur'

const history = createHistory();

const store = createStore(
    combineReducers({
        router,
        filtre,
        inscrire,
        connection,
        erreur,
        conseils,
        routing: routerReducer
    }),
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)


export default class App extends Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return(
      <div className="Row">
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router/>
            </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('react'));
