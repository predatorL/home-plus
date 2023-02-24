import React from 'react'
import { Button, Input, Form } from 'react-vant';
import { updateMenu } from 'services/menu';

export default () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
    return updateMenu(values)
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType='submit' type='primary' block>
            提交
          </Button>
        </div>
      }
    >
      <Form.Item
        intro='菜谱名称'
        rules={[{ required: true, message: '请填写菜谱名称' }]}
        name='name'
        label='菜谱名称'
      >
        <Input placeholder='请输入菜谱名称' />
      </Form.Item>
      <Form.Item
        intro='菜谱描述'
        name='description'
        label='描述'
      >
        <Input placeholder='请输入菜谱描述' />
      </Form.Item>
      <Form.Item
        intro='菜谱内容'
        rules={[{ required: true, message: '请填写菜谱内容' }]}
        name='content'
        label='内容'
      >
        <Input placeholder='请输入菜谱内容' />
      </Form.Item>
    </Form>
  )
}