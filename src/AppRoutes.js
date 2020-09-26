import { withNavigationWatcher } from './Contexts/Navigation';
import { HomePage,CartOrderPage,DetailCartPage } from './Pages';

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/home/cartorder',
    component: CartOrderPage
  },
  {
    path: '/home/cartorder/detail',
    component: DetailCartPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
