  import {
    DrawerForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormText,
  } from '@ant-design/pro-components';
  
  export default (props) => {
    const { open, onFinish, actionType, initialValues, onCancel, onOk } = props;
  
    return (
        <DrawerForm
        labelWidth="auto"
        open={open}
        onFinish={(values) => {
          onFinish(values, actionType);
        }}
        initialValues={initialValues}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="菜谱名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
          />
          <ProFormText
            width="md"
            name="description"
            label="菜谱描述"
            placeholder="请输入名称"
          />
        </ProForm.Group>
      </DrawerForm>
    );
  };