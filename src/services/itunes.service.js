import superagent from "superagent"

export const getItunesItem = (id) => {
    const url = `http://localhost:8000/itunes/${id}`
    return superagent
    .get(url)
    .query(null)
    .then( (res) => {
        return res.body.results
      })
      .catch(e => {
        return e
      })
  
}