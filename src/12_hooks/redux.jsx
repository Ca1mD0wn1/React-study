import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';

const MyContext = React.createContext()
const intitalState = {
  userName: '吴大勋',
  count: 100,
  proList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return { ...state, userName: action.payload }
    case 'CHANGE_COUNT': 
      return { ...state, count: action.payload}
    case 'CHANGE_PRO_LIST': 
      return { ...state, proList: action.payload}
    default:
      return state
  }
}


const Home = () => {
  // const [state, dispatch] = useReducer(reducer, intitalState)
  const { state, dispatch }  = useContext(MyContext)
  useEffect(() => { // 不要直接在回调函数上使用async
    const fetchData = async () => {
      const res = await  fetch('http://121.89.205.189:3001/api/pro/list').then(res => res.json())
      dispatch({
        type: 'CHANGE_PRO_LIST',
        payload: res.data
      })
    }
    fetchData()

  }, [dispatch])
  return (
    <>
      <h1>Home</h1>
      <ul>
        {
          state.proList && state.proList.map(item => (
            <li key = { item.proid }> { item.proname } </li>
          ))
        }
      </ul>
    </>
  )
}
const List = () => {
  // const [state, dispatch] = useReducer(reducer, intitalState)
  const { state }  = useContext(MyContext)
  return (
    <>
      <h1>List</h1>
      <ul>
        {
          state.proList && state.proList.map(item => (
            <li key = { item.proid }> { item.proname } </li>
          ))
        }
      </ul>
    </>
  )
}

// Home 组件  以及 List 组件共享 列表数据
const App = () => {
  const [state, dispatch] = useReducer(reducer, intitalState)
  return (
    <div>
      <MyContext.Provider value = { {
        state,
        dispatch
      }} >
        <Home />
        <List />
      </MyContext.Provider>
      
    </div>
  );
};

export default App;