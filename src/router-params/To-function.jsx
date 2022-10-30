import React from 'react';
import { useParams, useSearchParams ,useLocation} from 'react-router-dom';

const To = () => {
  // const params = useParams()  
  // console.log(params)
const [search] = useSearchParams()
console.log(search.get('num'));
// const { state: { name, age, hobby } } = useLocation()

  return (
    <>

    <h1>函数式组件接受值</h1>
    {/* params方式传递的参数为{params.number} */}
    <br />
    search传递的参数为{search.get('num')}
    <br />
    {/* state传递的参数为姓名{name}年纪{age}爱好{hobby} */}
    </>
  )

};

export default To;