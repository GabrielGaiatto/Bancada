import Apidragon from './pages/api-dragon/api-dragon';
import Github from './pages/github/github';
import Home from './pages/home/home';

const routesConfig = [
    {
        path: '/', 
        component: Home,
        exact: true,

    },
    {
        path: '/apidragon',
        component: Apidragon ,
        exact:true,
    },
    {
        path: '/git',
        component: Github,
        exact: true,
    }
]

export default routesConfig;