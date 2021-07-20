import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ItemDetails from "./components/Items/ItemDetails";
import { Fragment, useState } from "react";
import Layout from './components/UI/Layout'
import { getItunesItem } from './services/itunes.service'
import Header from "./components/Header/Header";
import NotFound from "./components/UI/NotFound";

function App() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([]);
  const loadItem = (id) => {
    setLoading(true)
    getItunesItem(id).then(list => {
      setItems(list)
      setLoading(false)
    })
  };

  const location = useLocation()

  const getItemIndex = () => {
    const pathname = location.pathname
    return +pathname.split('/')[2]
  }
  return (
    <Layout header={<Header> iTunes RSS Feed </Header>} body={
      <Fragment>
        <Switch>
          <Route exact path="/itemdetails/:id">
            {items && items.length > 0 ? items.filter( (item, index) => {
              return index === getItemIndex()
            }).map( (item, index )=> {
              return <ItemDetails key={index} name={item.name} artistName={item.artistName} artworkUrl100={item.artworkUrl100} releaseDate={item.releaseDate} kind={item.kind}></ItemDetails>
            }) : <NotFound></NotFound>}
            
          </Route>
          <Route exact path={["/home", "/"]}>
            <LandingPage
            loading={loading}
              onSetItem={loadItem}
              items={items}
            ></LandingPage>
          </Route>
        </Switch>
      </Fragment>
    } />

  );

}

export default App;
