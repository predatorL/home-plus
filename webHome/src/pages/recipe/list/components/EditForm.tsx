  import {
    DrawerForm,
    ProForm,
    ProFormText,
  } from '@ant-design/pro-components';

  export default (props: any) => {
    const { onOpenChange, onFinish, actionInfo } = props;
    const fromProp: any = {}
    if(actionInfo.action === 'view') {
      fromProp.submitter = {
        render() {
          return null
        }
      }
    }
    return (
        <DrawerForm
        open={actionInfo.visible}
        onOpenChange={onOpenChange}
        onFinish={async (values) => {
          const res = await onFinish({actionInfo, values});
          return true;
        }}
        drawerProps={{
          destroyOnClose: true,
        }}
        initialValues={actionInfo.item}
        {...fromProp}
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