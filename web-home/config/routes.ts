export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  {
    path: '/menu',
    icon: 'crown',
    name: '菜谱',
    routes: [
      { path: '/menu', redirect: '/menu/index' },
      { path: '/menu/index', name: '首页', component: './menu/index' },
      { path: '/menu/list', name: '列表', component: './menu/list/index' },
      { path: '/menu/manage', name: '管理', component: './menu/manage/index' },
      { path: '/menu/manage/create',  name: '创建', component: './menu/manage/edit' },
      { path: '/menu/manage/edit', name: '编辑',  component: './menu/manage/edit' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
