export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  {
    path: '/menu',
    menu: {
      name: '菜单列表',
    },
    routes: [
      { path: '/menu', redirect: '/menu/index' },
      {
        path: '/menu/index', component: './menu/index',
      },
      {
        path: '/menu/list', component: './menu/list/index',
      },
      { path: '/menu/manage', component: './menu/manage/index' },
      { path: '/menu/manage/create', component: './menu/manage/edit' },
      { path: '/menu/manage/edit', component: './menu/manage/edit' },
    ],
  },
  {
    path: '/recipe',
    menu: {
      name: '食谱列表',
    },
    routes: [
      { path: '/recipe', redirect: '/recipe/index' },
      {
        path: '/recipe/index', component: './recipe/index',
      },
      {
        path: '/recipe/list', component: './recipe/list/index',
      },
      { path: '/recipe/manage', component: './recipe/manage/index' },
      { path: '/recipe/manage/create', component: './recipe/manage/edit' },
      { path: '/recipe/manage/edit', component: './recipe/manage/edit' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
