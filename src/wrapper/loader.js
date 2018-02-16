import { connect } from 'react-redux';
import { Loader } from '../components';

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Loader);