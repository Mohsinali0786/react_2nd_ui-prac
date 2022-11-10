import TableRowsIcon from '@mui/icons-material/TableRows';
import StoreMallDirectory from '@mui/icons-material/StoreMallDirectory';
import MoneyIcon from '@mui/icons-material/Money';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Divider } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import StarIcon from '@mui/icons-material/Star';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import {setcollapsed} from '../store/actions'
import { useSelector,useDispatch } from 'react-redux';
const { Sider, Header } = Layout;

const SideBar = () => {
  const state=useSelector((state)=>state.sliderReducer.collapsed)
  const myitems = [
    {
      key: '1',
      icon: <StoreMallDirectory className='sidebar-icons' />,
      label: 'DashBoard',
    },
    {
      key: '2',
      icon: <TableRowsIcon className='sidebar-icons' />,
      label: 'Tables',
    },
    {
      key: '3',
      icon: <MoneyIcon className='sidebar-icons' />,
      label: 'Billing',
    },
    {
      key: '4',
      icon: <ViewInArIcon className='sidebar-icons' />,
      label: 'Virtual Reality',
    },
    {
      key: '5',
      icon: <ViewInArIcon className='sidebar-icons' />,
      label: 'RTL',
    },
  ]
  const items2 = [
    {
      key: '6',
      icon: <PersonPinOutlinedIcon className='sidebar-icons' />,
      label: 'Profile',
    },
    {
      key: '7',
      icon: <ContentCopyOutlinedIcon className='sidebar-icons' />
      ,
      label: 'Signin',
    },
    {
      key: '8',
      icon: <RocketLaunchOutlinedIcon className='sidebar-icons' />,
      label: 'Signup',
    },
    {
      key: '9',
      icon: <MusicNoteIcon className='sidebar-icons' />,
      label: 'Audio',
      path:'/audio'
    },
    {
      key: '10',
      icon: <SmartDisplayIcon className='sidebar-icons' />,
      label: 'Video',
      path:'/videos'
    },
  ]


  
  console.log('state outside',state)
  return (

    <div className={state?'home-main-div':'home-main-div-sidemenuclosed'} >
      <Sider className='mysidebar' trigger={null} collapsible collapsed={state} style={state ? { overflow: 'hidden' } : { overflow: 'scroll' }} >
        { 
          !state ?
            <>
              <h4 className='sidebar-heading'>SOFT UI DashBoard</h4>
              <Divider />
            </>
            :
            ""
        }
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {
            myitems.map((v) => {
              return (
                <Menu.Item>
                  <div className='slidebar-item-div'>
                    <div>{v.icon}</div>
                    {
                      !state ?
                        <div>{v.label}</div>
                        :
                        ""
                    }
                  </div>
                </Menu.Item>
              )
            })
          }
          {
            !state ?
              <div style={{ marginBottom: '20px' }}>
                <Divider />
              </div>
              :
              ""
          }

          {
            !state ?
              <h5 classNam e='sidebar-accountpages-heading'>Account Pages</h5>
              :
              ""
          }
          {
            items2.map((v) => {
              return (
                <Menu.Item>
                  <div className='slidebar-item-div' >
                    <div >{v.icon}</div>
                    {
                      !state ?
                        <div><Link to={v.path}>{v.label}</Link></div>
                        :
                        ""
                    }
                  </div>
                </Menu.Item>
              )
            })
          }
        </Menu>
        <Menu
          theme="dark"
          mode="inline"
        />
        {
          !state ?
            <div>
              <div className='sidebar-box-1'>
                <div>
                  <StarIcon />
                </div>
                <h5>Need Help?</h5>
                <p>Please Check our docs</p>
                <button className='sidebar-documentation-btn'>DOCUMENTATION</button>
              </div>
              <button className='sidebar-upgrade-btn'>Upgrade to Pro</button>
            </div>
            :
            ""
        }

      </Sider>
      
    </div >

  );
};
export default SideBar;