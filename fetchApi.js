

  async function getAPI(apiAddr){
    json = await fetch (apiAddr)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
        console.log('GET API Data OK');
        return data
    })
    .catch((error) => {
      console.log('GET API Error: ', error);
      return error
    });
    return json
  }

  async function PostAPI(apiAddr, body_){
    json = await fetch(apiAddr, {
      method: 'POST',
      body: JSON.stringify({body_}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(function(res){
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
      .then(function(data){
        //console.log('Post API Responsed:', data);
        return data
      })
      .catch(function(err){
        console.log('post data recived error: ', err);
      })
    .catch((err)=>{
      console.log('post request fail: ', err);
      return error
    })
    return json;
  }