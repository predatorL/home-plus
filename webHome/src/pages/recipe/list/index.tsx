import { PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import request from 'umi-request';
import getColumns, { GithubIssueItem } from './components/Columns';
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

import EditForm from './components/EditForm';

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

export default () => {
  const actionRef = useRef<ActionType | any>();
  const listRef = useRef<any>();
  const [drawerAction, setDrawerAction] = useState({visible: false, values: {}, action: ''});
  
  const columns = getColumns({actionRef, listRef});
  const handleEditFinish = async (values: any) => {
    console.log('handleEditFinish: ', values);
    const res = await request('http://localhost:5000/api/recipes', 
    { method: 'post', data: values, headers: {'Content-Type': 'application/json',}});
    console.log(res)
  }

  const toggleEditFormDisplay = (param: {visible?: boolean, action?: string, values?: any}) => {
    const {action = '', values = {}, visible = false} = param;
    setDrawerAction({action, values, visible});
  }
  listRef.current = {
    toggleEditFormDisplay,
  }

  return (
    <>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          await waitTime(2000);
          return request<{
            data: GithubIssueItem[];
          }>('http://localhost:5000/api/recipes', {
            params,
          }).then((res) => {
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
            onClick={() => { toggleEditFormDisplay({action: 'create', visible: true}) }}
            type="primary"
          >
            新建
          </Button>
          ,
        ]}
      />
      <EditForm open={drawerAction.visible} onOpenChange={() => { toggleEditFormDisplay({}) }} onFinish={handleEditFinish}  />
    </>
  );
};