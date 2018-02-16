import React, { Component } from 'react';
import { Table as AntdTable, Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';

class EmployeesTable extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  render() {
    const { data, editItem, deleteItem } = this.props;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '#',
      dataIndex: 'id',
      key: 'id+name',
    }, {
      title: 'Название',
      dataIndex: 'name',
      filters: data.map(e => ({ text: e.name, value: e.name })),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'Описание',
      dataIndex: 'description',
    }, {
      title: 'Сезон',
      dataIndex: 'season',
    }, {
      title: 'Дата добавления',
      dataIndex: 'date',
    }, {
      title: 'Действия',
      render: (text, record) => (
        <span>
          <Button
            icon="edit"
            onClick={() => editItem(record.id)}
          />
          <Popconfirm
            placement="top"
            title="Вы действительно хотите удалить запись?"
            onConfirm={() => deleteItem(record.id)}
            okText="Да"
            cancelText="Нет"
          >
            <Button
              type="danger"
              icon="delete"
            />
          </Popconfirm>
        </span>
      ),
    }];

    return (
      <AntdTable
        dataSource={data}
        onChange={this.handleChange}
        columns={columns}
        locale={{
          emptyText: 'Нет данных',
        }}
      />
    );
  }
}

EmployeesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

EmployeesTable.defaultProps = {
  data: null,
};

export default EmployeesTable;
