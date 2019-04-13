import React from 'react';
import Kissat from '../compoments/Kissat';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
      <React.Fragment>
        <h1>Home</h1>
        <Kissat kissat={props.kissat}/>
      </React.Fragment>
  );
};

Home.propTypes = {
  picArray: PropTypes.array,
};


export default Home;