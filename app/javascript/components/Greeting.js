import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsFromAPI } from '../redux/greetings/greetings';
import PropTypes from "prop-types"

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsFromAPI())
  }, []);

  const props = useSelector((state) => state.greetingsReducer);

  return (
      <>
        Greeting: {props.greeting}
      </>
    );
  }

Greeting.propTypes = {
  greeting: PropTypes.string
};
export default Greeting
