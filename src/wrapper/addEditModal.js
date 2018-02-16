import { connect } from 'react-redux';
import { Modal } from '../components';
import { modal } from '../core/actions';

const mapStateToProps = state => ({
  applesList: state.applesList,
  visible: state.modal.visible,
  id: state.modal.id
});

const mapDispatchToProps = (dispatch, props) => ({
  onCancel: () => dispatch(modal()),
  create: apple => dispatch({type: 'PUT_APPLE_SAGA', apple}),
  edit: (id, apple) => dispatch({type: 'EDIT_APPLE_SAGA', id, apple}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);