import React,{useState} from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

import './index.css'

export default function News_2() {
    const navigate = useNavigate()
  
    const [newsList,setNewsList] = useState(
      [
        {id:'001',title:'我是新闻1,点我查看详情'},
            {id:'002',title:'我是新闻2,点我查看详情'},
            {id:'003',title:'我是新闻3,点我查看详情'},
            {id:'004',title:'我是新闻4,点我查看详情'},
      ]
    )
    //编程式路由
    function seeDetail(item){
      navigate('detail',{state:{
          id:item.id,
          title:item.title
        }}
    )
    }
    return (
      <ul className='news2_container'>
        {
            newsList.map(item=>{
                return (
                  <li  key={item.id}>
                    {/* 传递params参数 */}
                    {/* <Link className='news2_item' to={`/home/news2/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                    {/* 传递search参数 */}
                    {/* <Link className='news2_item' to={`/home/news2/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                    {/* 传递state参数 */}
                    <Link className='news2_item' to={`/home/news2/detail`} state={{id:item.id,title:item.title}}>{item.title}</Link>
                    <button onClick={()=>{seeDetail(item)}}>查看详情</button>
                  </li>
                )
            })
        }
          {/* 指定路由呈现的位置 */}
        <Outlet />
      </ul>
    )
}
