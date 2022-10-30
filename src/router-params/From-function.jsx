import React from "react";
import { useNavigate } from 'react-router-dom';
const From = () => {

  const navigate = useNavigate()

  const params =()=>{
    navigate('to:666')
  }

  const search =()=>{
    navigate('to/?num=666')
  }

  const state = ()=>{

    navigate('to',{state:{
      name:'叶星辰',
      age:'18',
      hobby:"敲代码"
    }
  
    })
  }
  return (<>
  <h1>函数式组件传值</h1>
  <button onClick={()=>{params()}}>params传参</button>
  <button onClick={()=>{search()}}>search传参</button>
  <button onClick={()=>{state()}}>state传参</button>
  </>)
};

export default From;
