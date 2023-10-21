export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  {
    path: '/menu',
    icon: 'crown',
    routes: [
      { path: '/menu', redirect: '/menu/index' },
      { path: '/menu/index', component: './menu/index' },
      { path: '/menu/list', component: './menu/list/index' },
      { path: '/menu/manage', component: './menu/manage/index' },
      { path: '/menu/manage/create', component: './menu/manage/edit' },
      { path: '/menu/manage/edit', component: './menu/manage/edit' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
