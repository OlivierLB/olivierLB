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
import Header from './Constant/Header/Header.js';
import Footer from './Constant/Footer/Footer.js';

//Reducers
import router from './redux/reducers/Routing';

const history = createHistory();

const store = createStore(
    combineReducers({
        router,
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
      <div id="background">
        <Header store={store}/>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router/>
            </ConnectedRouter>
        </Provider>
        <Footer store={store}/>
      </div>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('react'));
