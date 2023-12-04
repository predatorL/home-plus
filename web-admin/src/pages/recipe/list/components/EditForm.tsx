  import {
    DrawerForm,
    ProForm,
    ProFormText,
    ProFormUploadButton,
    EditableProTable,
    ProColumns,
    ProFormList,
    ProFormTextArea
  } from '@ant-design/pro-components';
  import React, { useState } from 'react';

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


    type DataSourceType = {
      name: string;
      amount: string;
    };
    
    const defaultData: DataSourceType[] = [
      {
        name: '活动名称一',
        amount: '这个活动真好玩',
      },
      {
        name: '活动名称二',
        amount: '这个活动真好玩',
      },
    ];
    
    const columns: ProColumns<DataSourceType>[] = [
      {
        title: '食材',
        dataIndex: 'name',
        width: '60%',
      },
      {
        title: '用量',
        dataIndex: 'amount'
      },
      
    ];
    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
      defaultData.map((item) => item.id),
    );
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
        <ProForm.Item
            label="用料"
            name="ingredients"
            initialValue={defaultData}
            trigger="onValuesChange"
          >
          <EditableProTable<DataSourceType>
            rowKey="id"
            toolBarRender={false}
            columns={columns}
            recordCreatorProps={{
              newRecordType: 'dataSource',
              position: 'top',
              record: () => ({
                id: Date.now(),
                addonBefore: 'ccccccc',
                decs: 'testdesc',
              }),
            }}
            editable={{
              type: 'multiple',
              editableKeys,
              onChange: setEditableRowKeys,
              actionRender: (row, _, dom) => {
                return [dom.delete];
              },
            }}
          />
        </ProForm.Item>
        
          <ProForm.Item
            label="做法"
            name="instructions"
            // initialValue={defaultData}
            // trigger="onValuesChange"
          >
          <ProFormList name="instructions">
              {
                () => {
                  return (
                    <>
                      <ProFormUploadButton 
                        extra="支持扩展名：.jpg .zip .doc .wps"
                        name="ident"
                        listType="picture-card"
                        title="步骤图"
                        max={1} />
                        <ProFormTextArea
                          colProps={{ span: 24 }}
                          name="address"
                          placeholder="在此添加步骤说明"
                        />
                    </>
                  )
                }
              }
          </ProFormList>    
          </ProForm.Item>
          <ProForm.Item
            label="小贴士"
            name="tips"
            initialValue={''}
            trigger="onValuesChange"
          >
            <ProFormTextArea
                colProps={{ span: 24 }}
              />
          </ProForm.Item>


      </DrawerForm>
    );
  };