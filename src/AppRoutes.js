import { withNavigationWatcher } from './Contexts/Navigation';
import { HomePage } from './Pages';

const routes = [
  {
    path: '/home',
    component: HomePage
  },
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
