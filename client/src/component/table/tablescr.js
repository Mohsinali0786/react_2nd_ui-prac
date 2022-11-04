import { Grid } from "@mui/material"
import Menu from '../menus/menuicon'
import CheckIcon from '@mui/icons-material/Check';
import Table from './table'
import OrderOverView from "../orderOverview/orderoverview";

function TableScreen() {
    return (
        <div className="cards-main-div">
            <Grid container spacing={1} >
                <Grid item xs={12} sm={8} >
                    <Grid container  className='cards-2nd-row-cards-Grid' >
                        <Grid items xs={6}>
                            <h5 className='tabScreen-project-heading'>Projects</h5>
                            <h6 className="tabScreen-checkicon-text">
                                <span><CheckIcon /></span>
                                <span><b>30 done</b> this month</span>
                            </h6>
                        </Grid>
                        <Grid items xs={6} sx={{ textAlign: 'right' }}>
                            <Menu />
                        </Grid>
                        <Grid item xs={12}>
                            <Table />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Grid xs={12} className='cards-2nd-row-cards-Grid'>
                        <OrderOverView />

                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}
export default TableScreen