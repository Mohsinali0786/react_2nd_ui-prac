import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import TableRowsIcon from '@mui/icons-material/TableRows';
import StoreMallDirectory from '@mui/icons-material/StoreMallDirectory';
import MoneyIcon from '@mui/icons-material/Money';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BuildIcon from '@mui/icons-material/Build';
import { Divider } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import StarIcon from '@mui/icons-material/Star';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import HomeIcon from '@mui/icons-material/Home';
import { Input, Space } from 'antd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Cards from './cards';
import Table from './table/tablescr'
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
const { Sider, Header } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  useEffect(() => {
    window.addEventListener('resize', reportWindowSize);
  }, [])

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
      label: 'Musics',
    },
  ]
  function reportWindowSize() {
    if (window.innerWidth < 1000) {
      setCollapsed(true)
    }
    else {
      setCollapsed(false)

    }
  }
  return (

    <div className='home-main-div' >

      <Sider trigger={null} collapsible collapsed={collapsed} style={collapsed ? { overflow: 'hidden' } : { overflow: 'scroll' }} >
        {
          !collapsed ?
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
        // items={[
        //   {
        //     key: '1',
        //     icon: <StoreMallDirectory className='sidebar-icons' />,
        //     label: 'DashBoard',
        //   },
        //   {
        //     key: '2',
        //     icon: <TableRowsIcon className='sidebar-icons' />,
        //     label: 'Tables',
        //   },
        //   {
        //     key: '3',
        //     icon: <MoneyIcon className='sidebar-icons' />,
        //     label: 'Billing',
        //   },
        //   {
        //     key: '4',
        //     icon: <ViewInArIcon className='sidebar-icons' />,
        //     label: 'Virtual Reality',
        //   },
        //   {
        //     key: '5',
        //     icon: <ViewInArIcon className='sidebar-icons' />,
        //     label: 'RTL',
        //   },
        // ]}
        >
          {
            myitems.map((v) => {
              return (
                <Menu.Item>
                  <div className='slidebar-item-div'>
                    <div>{v.icon}</div>
                    {
                      !collapsed ?
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
            !collapsed ?
              <div style={{ marginBottom: '20px' }}>
                <Divider />
              </div>
              :
              ""
          }

          {
            !collapsed ?
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
                      !collapsed ?
                        <div><Link to='/music'>{v.label}</Link></div>
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
        // defaultSelectedKeys={['1']}
        // items={[
        //   {
        //     key: '6',
        //     icon: <PersonPinOutlinedIcon className='sidebar-icons' />,
        //     label: 'Profile',
        //   },
        //   {
        //     key: '7',
        //     icon: <ContentCopyOutlinedIcon className='sidebar-icons' />
        //     ,
        //     label: 'Signin',
        //   },
        //   {
        //     key: '8',
        //     icon: <RocketLaunchOutlinedIcon className='sidebar-icons' />,
        //     label: 'Signup',
        //   },
        // ]}
        />
        {
          !collapsed ?
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
      <div className='content-main-div'>
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
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Header>
              <SettingsIcon className='home-icons' />
              <NotificationsIcon className='home-icons' />
            </div>
          </div>
        </div>
        {/* <div> */}
        <Cards />
        <Table />
        {/* </div> */}
      </div>
    </div >

  );
};
export default SideBar;