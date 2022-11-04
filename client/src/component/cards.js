
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RocketIcon from '@mui/icons-material/Rocket';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Chart from './charts/barchart'
import DescriptionIcon from '@mui/icons-material/Description';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';
import LinearProgress from '@mui/material/LinearProgress';
import AreaChart from '../component/charts/areaChart'
import { fontSize, height } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Cards() {

    return (
        <div className='cards-main-div' >
            <Grid container spacing={1} >
                <Grid item xs={12} sm={6} lg={3}>
                    <Grid className='cards-info-cards'>
                        <div>
                            <h6>Todays Money</h6>
                            <p>$53000 <sub>+53%</sub></p>

                        </div>
                        <div className='cards-info-logo-div'>
                            <AttachMoneyIcon className='cards-info-logo' />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Grid className='cards-info-cards'>
                        <div>
                            <h6>Todays Money</h6>
                            <p>$53000 <sub>+53%</sub></p>

                        </div>
                        <div className='cards-info-logo-div'>
                            <AttachMoneyIcon className='cards-info-logo' />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Grid className='cards-info-cards'>
                        <div>
                            <h6>Todays Money</h6>
                            <p>$53000 <sub>+53%</sub></p>

                        </div>
                        <div className='cards-info-logo-div'>
                            <AttachMoneyIcon className='cards-info-logo' />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Grid className='cards-info-cards'>
                        <div>
                            <h6>Todays Money</h6>
                            <p>$53000 <sub>+53%</sub></p>
                        </div>
                        <div className='cards-info-logo-div'>
                            <AttachMoneyIcon className='cards-info-logo' />
                        </div>
                    </Grid>
                </Grid>

            </Grid>
            {/* <Box sx={{ width: '100%' }}> */}
            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                <Grid item xs={12} md={7} >
                    {/* <Grid className='cards-2nd-row-cards-Grid'> */}
                        <div className='cards-2nd-row-cards-parent-div cards-2nd-row-cards-Grid'>
                            <div className='cards-2nd-row-child1-div'>
                                <p>Built by Developers</p>
                                <h5>Soft UI Dashboard</h5>
                                <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                <div className='cards-read-more-link'>
                                    <a>Read more</a>
                                    <ArrowRightAltIcon />
                                </div>
                            </div>
                            <div className='cards-2nd-row-cards-div'>
                                <RocketIcon className='cards-2nd-row-cards-icon' />
                            </div>
                        </div>
                    {/* </Grid> */}
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid className='cards-2nd-row-cards-Grid work-with-rocket-div'>
                        <div className='cards-2nd-row-2nd-maindiv '>
                            <h5>Work with the rockets</h5>
                            <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                            <div className='cards-read-more-link'>
                                <a>Read more</a>
                                <ArrowRightAltIcon />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                <Grid item xs={12} md={5} >
                    <Grid className='cards-2nd-row-cards-Grid'>
                        <div className='cards-chart-div'>
                            <Chart />
                        </div>
                        <div className='cards-chartdiv-text'>
                            <h5>Active Users</h5>
                            <p><strong>(+23%)</strong> than last week</p>
                        </div>
                        <Grid container spacing={1} sx={{ marginLeft: '2%', marginRight: '2%' }}>
                            <Grid item xs={6} md={3}>
                                <div className='cards-chart--div-icons'>
                                    <div className='card-chartdiv-icons1color' >
                                        <DescriptionIcon />
                                    </div>
                                    <p>Users</p>
                                </div>
                                <h5 className='cards-chart-numeric'>36K</h5>
                                <LinearProgress variant="determinate" value={50} sx={{
                                    width: '50%', backgroundColor: `silver`,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: `black`,
                                    },
                                }} />

                            </Grid>
                            <Grid item xs={6} md={3}>
                                <div className='cards-chart--div-icons'>
                                    <div className='card-chartdiv-icons2color'>
                                        <SwipeVerticalIcon />
                                    </div>
                                    <p>Clicks</p>
                                </div>
                                <h5 className='cards-chart-numeric'>36K</h5>
                                <LinearProgress variant="determinate" value={50} sx={{
                                    width: '50%', backgroundColor: `silver`,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: `black`,
                                    },
                                }} />

                            </Grid>
                            <Grid item xs={6} md={3}>
                                <div className='cards-chart--div-icons'>
                                    <div className='card-chartdiv-icons3color'>
                                        <ReceiptIcon />
                                    </div>
                                    <p>Sales</p>
                                </div>
                                <h5 className='cards-chart-numeric'>36K</h5>
                                <LinearProgress variant="determinate" value={50} sx={{
                                    width: '50%', backgroundColor: `silver`,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: `black`,
                                    },
                                }} />

                            </Grid>
                            <Grid item xs={6} md={3}>
                                <div className='cards-chart--div-icons'>
                                    <div className='card-chartdiv-icons4color'>
                                        <CategoryIcon />
                                    </div>
                                    <p>Items</p>
                                </div>
                                <h5 className='cards-chart-numeric'>36K</h5>
                                <LinearProgress variant="determinate" value={50} sx={{
                                    width: '50%', backgroundColor: `silver`,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: `black`,
                                    },
                                }} />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Grid className='cards-2nd-row-cards-Grid'>
                        <div className='cards-areachart-div'>
                            <h4>Sales Overview</h4>
                            <div>
                                <ArrowUpwardIcon />
                                <p>4% more in 2021</p>
                            </div>
                            <div className='cards-areaChart-div2'>
                                <AreaChart />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div >


    );
}

export default Cards