import React from 'react'
import { useParams,useSearchParams,useLocation } from 'react-router-dom'
import "./index.css"


const myList = [
    {id:'001',title:'我是新闻1,点我查看详情',content:'新闻1大爆料'},
    {id:'002',title:'我是新闻2,点我查看详情',content:'新闻2大爆料'},
    {id:'003',title:'我是新闻3,点我查看详情',content:'新闻3大爆料'},
    {id:'004',title:'我是新闻4,点我查看详情',content:'新闻4大爆料'},
]
export default function Detail() {
    
    //获取params参数，需要再地址中写占位符
    // const {id,title} = useParams()

    //获取search参数
    //返回的是一个数组,数组的第一项是search参数，第二项是设置当前传递过来的search参数
    // const [search,setSearch] = useSearchParams()
    // const id = search.get('id')
    // const title = search.get('title')

  //获取location参数对象
  //解构出state参数对象
  const {state} = useLocation()
  const {id,title} = state

    const findResult = myList.filter(item=>item.id===id)
    return (
      <ul className='detail_container'>
        {/* <button onClick={()=>{setSearch("id=004&title=哈哈哈")}}>点我改变search参数</button> */}
        <li className='detail_item'>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{findResult[0].content}</li>
      </ul>
    )
}
