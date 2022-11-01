import { Breadcrumb, Layout, Menu } from 'antd';
import SideBar from '../component/sidebar'
import HomeIcon from '@mui/icons-material/Home';
import { Input, Space } from 'antd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { display } from '@mui/system';
import Grid from 'antd/lib/card/Grid';
function Home() {

    // const { Search } = Input;
    // const onSearch = (value) => console.log(value);

    return (
        <div >
            {/* <div> */}
                <SideBar />
             
            
        </div>
    )
}
export default Home