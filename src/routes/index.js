import { Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import News1 from '../pages/Home/News_1'
import News2 from '../pages/Home/News_2'
import Detail from '../pages/Home/News_2/Detail'
//注册路由表
export default [
    {
        path: '/home',
        element: <Home />,
        children: [
            { path: 'news1', element: <News1 /> },
            {
                path: 'news2',
                element: <News2 />,
                children: [
                    {
                        // 使用params传参时需要占位
                        // path: 'detail/:id/:title',

                        path: 'detail',
                        element: <Detail />
                    }
                ]
            },
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    }
]