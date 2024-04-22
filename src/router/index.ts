import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';
// import NotFound from '@/views/404.vue';
const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: [
    ...routes,
  ],
});

router.beforeEach(async (_to, _from, next) => {
  next();
});

export default router;
