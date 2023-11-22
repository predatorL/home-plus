
import React from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { ProTable, TableDropdown } from '@ant-design/pro-components';

import { MenuItem } from '../types';

export const columns: ProColumns<MenuItem>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '标题',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          // {
          //   required: true,
          //   message: '此项为必填项',
          // },
        ],
      },
    },
    {
      title: '状态',
      dataIndex: 'state',
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        all: { text: '全部' },
        released: {
          text: '已发布',
          status: '1',
        },
        // closed: {
        //   text: '未发布',
        //   status: 'Success',
        //   disabled: true,
        // },
        unreleased: {
          text: '未发布',
          status: '2',
        },
      },
    },
    {
      disable: true,
      title: '标签',
      dataIndex: 'labels',
      search: false,
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
      render: (_, record) => (
        <Space>
          {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a 
          key="view"
          onClick={() => {
            action?.startEditable?.(record.id);
          }} 
        >
          查看
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ],
    },
  ];