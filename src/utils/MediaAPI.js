


const getAllMedia = () => {

  return fetch( 'http://media.mw.metropolia.fi/wbma/media/').then((response) => {
    return response.json();
  }).then( (json) => {
    json.map(item => {
      return fetch('http://media.mw.metropolia.fi/wbma/media/' + item.file_id).then(response => {
        return response.json();
      }).then(items => {
        console.log(items);
        this.setState({
          kissat: [...this.state.kissat, items]
        })
      });
    });
  });
};


export {getAllMedia}