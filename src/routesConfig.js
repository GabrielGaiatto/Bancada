import Apidragon from './pages/api-dragon/api-dragon';
import Github from './pages/github/github';
import Home from './pages/home/home';

const routesConfig = [
    {
        path: '/', 
        component: Apidragon,
        exact: true,

    },
    {
        path: '/github',
        component: Github ,
        exact:true,
    },
    {
        path: '/home',
        component: Home,
        exact: true,
    }
]

export default routesConfig;