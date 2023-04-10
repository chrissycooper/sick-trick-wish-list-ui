const getAllTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(res => {
    if(!res.ok){
      throw new Error();
    }
    return res.json()
  })
}

export default getAllTricks;