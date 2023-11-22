import React, { useRef, useState } from 'react';
import { Link } from 'umi';
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import request from 'umi-request';

import './index.less';
import { MenuItem } from './types';
import { columns } from './constants';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};


export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<MenuItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        return request<{
          data: MenuItem[];
        }>('http://127.0.0.1:5000/api/menu/list', {
          params,
        }).then((res: any) => {
          const {list = [], pagination = {}} = res.data || {};
          console.log(res);
          return {
            data: list || [],
            success: res.code === 1,
            total: pagination.total || 0,
          };
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
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
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          type="primary"
        >
          <Link to="/menu/manage/create">
            新建
          </Link>
        </Button>,
        ,
      ]}
    />
  );
};



