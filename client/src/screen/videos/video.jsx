import SideBar from '../../component/sidebar'
import MyHeader from '../../component/Header/header'
import { Grid } from '@mui/material'
import { AllVideos } from '../../assets/videos/allvideos'
import { Link } from 'react-router-dom'
function VideoScreen() {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className='content-main-div'>
                <MyHeader />
                <Grid container spacing={1}>
                    {
                        AllVideos.map((v) => {
                            console.log('v==>',v)
                            return (
                                <Grid items sm={4}>
                                    <Link to={`/myvideos/${v.name}`}state={v} ><video width="320" height="240" controls src={v.path}></video></Link>
                                    <div>
                                        <h5>{v.name}</h5>
                                        <h5>Lama Dev</h5>
                                        <h6>660,908 views • 1 day ago</h6>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                    {/* <Grid items xs={12} sm={8}>
                        <img/>
                    </Grid>
                    <Grid items xs={12} sm={4}>


                    </Grid> */}

                </Grid>
            </div>
        </div>
    )
}

export default VideoScreen