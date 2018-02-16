import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Content, Table } from '../components';
import { modal } from '../core/actions';
import { AddEditModal } from '../wrapper';


const { PageHeader, PageContent, RightShift } = Content;


class ApplesListPage extends Component {
  componentDidMount() {
    this.props.initPage();
  }

  render() {
    const { openModal, applesList, deleteApple, editApple } = this.props;
    return (
      <PageContent>
        <PageHeader>Список яблок</PageHeader>
        <RightShift>
          <Button type="primary" onClick={() => openModal()}>Добавить</Button>
        </RightShift>
        <Table
          data={applesList}
          editItem={editApple}
          deleteItem={deleteApple}
        />
        <AddEditModal />
      </PageContent>
    );
  }
}

const mapStateToProps = state => ({
  applesList: state.applesList,
});

const mapDispatchToProps = dispatch => ({
  initPage: () => dispatch({ type: 'GET_APPLES_SAGA' }),
  editApple: id => dispatch(modal(id)),
  openModal: () => dispatch(modal()),
  deleteApple: id => dispatch({ type: 'DEL_APPLE_SAGA', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplesListPage);

