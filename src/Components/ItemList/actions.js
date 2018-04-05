export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export function fetchItems() {
  var url = `http://localhost:8080/`
  console.log(url)
  return function (dispatch) {
    console.log(dispatch)
    return fetch(url)
      .then(data => data.json())
      .then(results => {
        console.log(results)
        dispatch(fetchSuccess(results))
      })
    }
}

export function fetchSuccess(results) {
  console.log('success')
  return { type: FETCH_SUCCESS, items: results }
}
