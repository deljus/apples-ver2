import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Select, DatePicker } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

const defaultValues = {
  name: '',
  description: '',
  season: 'Весна',
  color: '',
};

const dateFormat = 'YYYY-MM-DD';
let showColor = true;
let trigger = false;

class ModalForm extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const { id, create, edit, onCancel, form } = this.props;

    form.validateFields((err, values) => {
      if (err) return false;
      const data = { ...values, date: moment(values.date).format(dateFormat) };
      id ? edit(id, data) : create(data);
      onCancel();
      form.resetFields();
    });
  }

  handleSelectChange(value) {
    showColor = (value !== 'Зима');
  }

  render() {
    const { id, visible, onCancel, form, applesList } = this.props;
    const { getFieldDecorator, resetFields } = form;
    const item = id ? applesList.filter(e => e.id === id)[0] : defaultValues;

    if (!visible) { resetFields(); }

    if (visible !== trigger) {
      trigger = visible;
      showColor = (item.season !== 'Зима');
    }

    return (
      <Modal
        visible={visible}
        title={id ? 'Редактировать запись' : 'Создать запись'}
        okText="ОК"
        cancelText="Отмена"
        onCancel={() => onCancel()}
        footer={null}
      >
        <Form
          layout="vertical"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <FormItem label="Название">
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [{ required: true, message: 'Введите название' }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem label="Описание">
            {getFieldDecorator('description', {
              initialValue: item.description,
              rules: [{ required: true, message: 'Введите описание' }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem label="Сезон">
            {getFieldDecorator('season', {
              initialValue: item.season,
            })(
              <Select onChange={this.handleSelectChange.bind(this)}>
                <Option value="Лето">Лето</Option>
                <Option value="Весна">Весна</Option>
                <Option value="Зима">Зима</Option>
                <Option value="Осень">Осень</Option>
              </Select>,
            )}
          </FormItem>
          {
            showColor && <FormItem label="Цвет">
              {getFieldDecorator('color', {
                initialValue: item.color,
                rules: [{ required: true, message: 'Введите цвет' }],
              })(
                <Input />,
              )}
            </FormItem>
          }
          <FormItem label="Дата добавления">
            {getFieldDecorator('date', {
              initialValue: id ? moment(item.date, dateFormat) : moment(),
              rules: [{ required: true, message: 'Выберите дату' }],
            })(
              <DatePicker format={dateFormat} showTime={false} />,
            )}
          </FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </Modal>
    );
  }
}

ModalForm.propTypes = {
  id: PropTypes.number,
  visible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  applesList: PropTypes.array,
  create: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};


export default Form.create()(ModalForm);
