import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';

export type RowDataType = {
    url: string;
    id: number;
    number: number;
    title: string;
    labels: {
        name: string;
        color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
};

export type MenuClickType = {
  key: string, 
  item: RowDataType
}
  
const getColumns = (param: {handleMenuItemClick: (param: MenuClickType) => void}) => {
  const { handleMenuItemClick } = param;
    const columns: ProColumns<RowDataType>[] = [
        {
          title: '标题',
          dataIndex: 'name',
          copyable: true,
          ellipsis: true,
          tip: '标题过长会自动收缩',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '此项为必填项',
              },
            ],
          },
        },
        {
          disable: true,
          title: '状态',
          dataIndex: 'state',
          filters: true,
          onFilter: true,
          ellipsis: true,
          valueType: 'select',
          valueEnum: {
            all: { text: '超长'.repeat(50) },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
              disabled: true,
            },
            processing: {
              text: '解决中',
              status: 'Processing',
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
              {record.labels?.map?.(({ name, color }) => (
                <Tag color={color} key={name}>
                  {name}
                </Tag>
              ))}
            </Space>
          ),
        },
        {
          title: '描述',
          dataIndex: 'description',
          copyable: true,
          ellipsis: true,
          tip: '标题过长会自动收缩',
          formItemProps: {
            rules: [],
          },
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
          render: (text, record, _, action) => (
            <TableDropdown
              key="actionGroup"
              onSelect={(key) => handleMenuItemClick?.({key,  item: record})}
              menus={[
                { key: 'edit', name: '编辑' },
                { key: 'view', name: '查看' },
                { key: 'delete', name: '删除' },
              ]}
            />
          ),
        },
    ];
    return columns;
}

export default getColumns;
