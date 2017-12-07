'use strict';

import { connect } from 'react-redux';
import Map from '../components/Map';
import { setCountry } from '../actionCreators/map';


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  function selectCountry(selectedCountry) {
    dispatch(setCountry(selectedCountry))
  }
  return { selectCountry };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
