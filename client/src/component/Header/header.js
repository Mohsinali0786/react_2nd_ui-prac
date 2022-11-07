import { Breadcrumb, Layout, Menu } from 'antd';
// import SideBar from '../component/sidebar'
import HomeIcon from '@mui/icons-material/Home';
import { Input, Space } from 'antd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { display } from '@mui/system';
import Grid from 'antd/lib/card/Grid';
import { useSelector,useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {setcollapsed} from '../../store/actions'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
const { Sider, Header } = Layout;

export default function MyHeader() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.sliderReducer.collapsed)
    console.log('data',state)
    const [collapsed, setCollapsed] = useState(state);
    useEffect(() => {
      console.log('ruuinig')
      window.addEventListener('resize', reportWindowSize);
    },[])
    function reportWindowSize() {
      if (window.innerWidth < 1000) {
        console.log('if running',!state)
        setCollapsed(!state)
        dispatch(setcollapsed(!state))

      }
      else {
        console.log('if and else running',state)
        setCollapsed(state)
        dispatch(setcollapsed(state))

      }
    }
    
    var opensidebar=()=>{
      console.log('function state ',collapsed)
      setCollapsed(!collapsed)
      dispatch(setcollapsed(!collapsed))
    }
    return (
        <div className='home-section-div'>
            <div style={{ marginLeft: '25px', display: 'block' }}>
                <Breadcrumb >
                    <Breadcrumb.Item><HomeIcon style={{ fontSize: '15px' }} /></Breadcrumb.Item>
                    <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
                </Breadcrumb>
                <h6 style={{ fontSize: '15px' }}>DASHBOARD</h6>
            </div>
            <div className='home-input-bar-div'>
                <div>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        className='home-input-searchbar'

                    />
                </div>
                <div className='home-all-btns'>
                    <button className='home-siginin-btn'>
                        <AccountCircleIcon className='home-signin-icon' />
                        Signin
                    </button>
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {React.createElement(state ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => opensidebar(),
                        })}
                    </Header>

                    <SettingsIcon className='home-icons' />
                    <NotificationsIcon className='home-icons' />
                </div>
            </div>
        </div>

    )
}