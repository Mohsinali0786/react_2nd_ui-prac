
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
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} className='cards-2nd-row-cards-Grid'>
                    <div className='cards-2nd-row-cards-parent-div'>
                        <div>
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
                </Grid>
                <Grid item xs={12} md={4} className='cards-2nd-row-cards-Grid'>
                    <div className='cards-2nd-row-2nd-maindiv '>
                        <h5>Work with the rockets</h5>
                        <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                        <div className='cards-read-more-link'>
                            <a>Read more</a>
                            <ArrowRightAltIcon />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className='cards-2nd-row-cards-Grid'>
                    <div className='cards-chart-div'>
                        <Chart />
                    </div>
                    <div className='cards-chartdiv-text'>
                        <h5>Active Users</h5>
                        <p><strong>(+23%)</strong> than last week</p>
                    </div>
                    <Grid container>

                        <Grid item xs={12} md={6}>
                            <div className='cards-chart--div-icons'>
                                <div className='card-chartdiv-icons1color' >
                                    <DescriptionIcon />
                                </div>
                                <p>Users</p>
                            </div>
                            <h5>36K</h5>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='cards-chart--div-icons'>
                                <SwipeVerticalIcon />
                                <p>Clicks</p>
                            </div>
                            <h5>36K</h5>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='cards-chart--div-icons'>
                                <ReceiptIcon />
                                <p>Sales</p>
                            </div>
                            <h5>36K</h5>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='cards-chart--div-icons'>
                                <CategoryIcon />
                                <p>Items</p>
                            </div>
                            <h5>36K</h5>
                            <LinearProgress variant="determinate" value={50} sx={{ width: '50%' }} />

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* </Box> */}
        </div>


    );
}

export default Cards