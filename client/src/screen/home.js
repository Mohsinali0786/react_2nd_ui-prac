import { Breadcrumb, Layout, Menu } from 'antd';
import SideBar from '../component/sidebar'
import HomeIcon from '@mui/icons-material/Home';
import { Input, Space } from 'antd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { display } from '@mui/system';
import Grid from 'antd/lib/card/Grid';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setcollapsed } from '../store/actions'
import Cards from '../component/cards';
import Table from '../component/table/tablescr'
import MyHeader from '../component/Header/header'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

const { Sider, Header } = Layout;
function Home() {

  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const dispatch = useDispatch()
  const state = useSelector((state) => state.sliderReducer.collapsed)
  console.log('data', state)
  const [collapsed, setCollapsed] = useState(state);
  useEffect(() => {
    console.log('ruuinig')
    window.addEventListener('resize', reportWindowSize);
  }, [])
  function reportWindowSize() {
    if (window.innerWidth < 1000) {
      console.log('if running', !state)
      setCollapsed(!state)
      dispatch(setcollapsed(!state))

    }
    else {
      console.log('if and else running', state)
      setCollapsed(state)
      dispatch(setcollapsed(state))

    }
  }

  var opensidebar = () => {
    console.log('function state ', collapsed)
    setCollapsed(!collapsed)
    dispatch(setcollapsed(!collapsed))
  }
  console.log('collapsed', collapsed)
  return (
    <div style={{ display: 'flex' }}>
      {/* <div> */}
      <SideBar />
      <div className='content-main-div'>
        <MyHeader/>
        <Cards />
        <Table />
      </div>
    </div>
  )
}
export default Home