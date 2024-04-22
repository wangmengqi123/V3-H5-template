export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: true,
        },
      },
      {
        path: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: {
          title: '列表',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('@/views/member/index.vue'),
        meta: {
          title: '我的',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: '组件',
          keepAlive: true,
        },
        // children:[
        //   {
        //     path:'shopping',

        //   }
        // ]
      },
      {
        name: 'listDetails',
        path: '/details',
        component: () => import('@/views/list/details/index.vue'),
        meta: {
          title: '列表详情',
          border: false,
        },
      },
      {
        name: 'shopping',
        path: '/shopping',
        component: () => import('@/views/shopping/index.vue'),
        meta: {
          title: '商城',
          border: false,
        },
      },
      {
        name: 'chartsMap',
        path: '/chartsMap',
        component: () => import('@/views/chartsMap/index.vue'),
        meta: {
          title: '地图',
          border: false,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/notFound',
  },
  {
    name: 'notFound',
    path: '/notFound',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '404',
      keepAlive: true,
    },
  }
];

export default routes;
