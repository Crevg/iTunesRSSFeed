import React, { Fragment } from "react";
import { useHistory  } from "react-router-dom";
import styles from "./LandingPage.module.css";
import ItemTable from "./Items/ItemTable";
import Loading from './UI/Loading'

const LandingPage = (props) => {
    
    const history = useHistory();
    const selectItemHandler = (index) => {
        history.push('/itemdetails/' + index)
                
    }
  const headers = ["Name", "Description", "Picture"];
  const rows = props.items
    ? props.items.map((item) => [
        <strong> {item.name} </strong>,
        <strong> {item.kind} </strong>,
        <img width="50" src={item.artworkUrl100} alt="poster"></img>,
      ])
    : null;
  return (
    <Fragment>
      <section className="container">
        <article className="row">
          <div className={`${styles.buttonContainer} col-sm`}>
            <button
                disabled={props.loading}
              type="button"
              className="btn btn-secondary"
              onClick={props.onSetItem.bind(null, 1)}
            >
              Apple Music Top Albums
            </button>
          </div>
          <div className={`${styles.buttonContainer} col-sm`}>
            <button
            disabled={props.loading}
              type="button"
              className="btn btn-secondary"
              onClick={props.onSetItem.bind(null, 2)}
            >
              iTunes Top Songs
            </button>
          </div>
          <div className={`${styles.buttonContainer} col-sm`}>
            <button
            disabled={props.loading}
              type="button"
              className="btn btn-secondary"
              onClick={props.onSetItem.bind(null, 3)}
            >
              Apple Music Top Songs
            </button>
          </div>
        </article>
      </section>
    <section className={`container ${styles.tableContainer}`}>
        {!props.loading ? 
        props.items && props.items.length > 0 ? (<ItemTable 
            headers={headers}
            rows={rows} 
            onSelectItem={selectItemHandler} /> ) : (<h1> Click on a list to find items </h1> ) 
            : null }
        {props.loading && <Loading> Loading list... </Loading>}
    </section>
      
    </Fragment>
  );
};

export default LandingPage;
