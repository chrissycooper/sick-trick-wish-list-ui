const getAllTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(res => {
    if(!res.ok){
      throw new Error();
    }
    return res.json()
  })
}

const postNewTrick = (newTrick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    body: JSON.stringify(newTrick),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export {  getAllTricks, postNewTrick }