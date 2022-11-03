import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Divider } from '@mui/material';
function OrderOverView() {
    return (
        <div>
            <p>Orders overview</p>
            <div className='Overview-percentage-div'>
                <ArrowUpwardIcon />
                <p>24% this month</p>
            </div>
            <div>
                <div className='Overview-iconwithdivider-div'>
                    <div>
                        <NotificationsIcon sx={{ color: 'rgb(130, 214, 22)', fontSize: '18px' }} />
                        <Divider orientation="vertical" className='Overview-divider' />
                    </div>
                    <div>
                        <h5>$2400, Design changes</h5>
                        <p>22 DEC 7:20 PM</p>
                    </div>
                </div>
                <div className='Overview-iconwithdivider-div'>
                    <div>
                        <BorderColorIcon sx={{ color: 'red', fontSize: '18px' }} />
                        <Divider orientation="vertical" className='Overview-divider' />
                    </div>
                    <div>
                        <h5>$2400, Design changes</h5>
                        <p>22 DEC 7:20 PM</p>
                    </div>
                </div>
                <div className='Overview-iconwithdivider-div'>
                    <div>
                        <LocalGroceryStoreIcon sx={{ color: '#6fbbd3', fontSize: '18px' }} />
                        <Divider orientation="vertical" className='Overview-divider' />
                    </div>                    <div>
                        <h5>$2400, Design changes</h5>
                        <p>22 DEC 7:20 PM</p>
                    </div>
                </div>
                <div className='Overview-iconwithdivider-div'>
                    <div>
                        <CreditCardIcon sx={{ color: '#FFBF00', fontSize: '18px' }} />
                        <Divider orientation="vertical" className='Overview-divider' />
                    </div>                    <div>
                        <h5>$2400, Design changes</h5>
                        <p>22 DEC 7:20 PM</p>
                    </div>
                </div>
                <div className='Overview-iconwithdivider-div'>
                    <div>
                        <VpnKeyIcon sx={{ color: '#9C51B6', fontSize: '18px' }} />
                        <Divider orientation="vertical" className='Overview-divider' />
                    </div>
                    <div>
                        <h5>$2400, Design changes</h5>
                        <p>22 DEC 7:20 PM</p>
                    </div>
                </div>
                <div className='Overview-iconwithdivider-div'>
                    <div>
                        <MonetizationOnIcon sx={{ color: 'rgb(58, 65, 111))', fontSize: '18px' }} />
                        <Divider orientation="vertical" className='Overview-divider' />
                    </div>
                    <div>
                        <h5>$2400, Design changes</h5>
                        <p>22 DEC 7:20 PM</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default OrderOverView;