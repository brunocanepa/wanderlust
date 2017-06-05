import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import WebDestinationsPanel from '../web/destinations/DestinationsPanel';
import PlacesContainer from '../shared/PlacesContainer';
import PlaceDetailContainer from '../shared/PlaceDetailContainer';
import ContinentsContainer from '../shared/ContinentsContainer';
import styled from 'styled-components';

const Root = ({store}) => (
  <Provider store={ store }>
    <Router>
      <MainRoot>
        <MainApp>
          <WebDestinationsPanel/>
          <Switch>
            <Route exact={true} path='/regions/:regionId' component={ PlacesContainer } />
            <Route exact={true} path='/continents' component={ ContinentsContainer } />
            <Route exact={true} path='/places/:placeId' component={ PlaceDetailContainer } />
            <Route exact={true} path='*' render={ () => (<Redirect to="/continents"> </Redirect>) } />
          </Switch>
        </MainApp>
      </MainRoot>
    </Router>
  </Provider>
);

const MainRoot = (props) => (
  <div {...props}/>
);

const MainApp = styled.div`
    box-sizing: border-box;
    transition: 0.8s;
    &:after {
      content: "";
      clear: both;
      display: table;
    }
`;

export default Root;