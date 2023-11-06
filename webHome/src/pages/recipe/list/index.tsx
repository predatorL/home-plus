import { PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import request from 'umi-request';

import RecipeSercie from '@/services/recipe';
import getColumns, { RowDataType, MenuClickType } from './components/Columns';
import EditForm from './components/EditForm';


interface IEditFormAction {
  visible: boolean, item?: any, action?: string
}

export default () => {
  const actionRef = useRef<ActionType | any>();
  const [editFormAction, setEditFormAction] = useState<IEditFormAction>({visible: false, item: {}, action: ''});
  const [detailAction, setDetailAction] = useState<IEditFormAction>({visible: false, item: {}});

  const handleMenuItemClick = (param: MenuClickType) => {
    const {key, item} = param;
    switch (key) {
      case 'edit':
        setEditFormAction({visible: true, item, action: 'edit'})
        break;
      case 'delete':
          setEditFormAction({visible: true, item, action: 'edit'})
        break;
      case 'view':
        setEditFormAction({visible: true, item, action: 'view'})
        break;  
      default:
        break;
    }
  }

  const columns = getColumns({handleMenuItemClick});
  const handleEditFinish = async (param: {actionInfo: IEditFormAction, values: any}) => {
    const { actionInfo, values} = param;
    console.log('handleEditFinish: ', values);
    const {action, item} = actionInfo;
    const reqParam = { ...values };
    let request = action === 'edit' ? RecipeSercie.update : RecipeSercie.create;
    if(action === 'edit') {
      reqParam.recipeId = item.id;
    }
    const res = await request(reqParam);
    console.log(res)
    setEditFormAction({visible: false, item: {}, action: ''})
    return true;
  }

  const onOpenChange = (visible : boolean) => {
    setEditFormAction({...editFormAction, visible});
  }
 

  return (
    <>
      <ProTable<RowDataType>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(params, sort, filter);
          return RecipeSercie.getList(params).then((res) => {
            return {
              data: res.data,
              success: true,
            };
          });
        }}
        editable={{
          type: 'multiple',
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle=""
        toolBarRender={() => [
          <Button
            key="create"
            icon={<PlusOutlined />}
            onClick={() => { setEditFormAction({visible: true, item: {}, action: 'create'}) }}
            type="primary"
          >
            新建
          </Button>
          ,
        ]}
      />
      <EditForm actionInfo={editFormAction}  onOpenChange={onOpenChange} onFinish={handleEditFinish}  />
    </>
  );
};