import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Button } from "@mui/material"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import SideBar from '../../component/sidebar'
import MyHeader from '../../component/Header/header'
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import VideoCards from '../../component/cards/videocard'
import MyComment from '../../component/comment/comment'
import ScrollableTabsButtonAuto from '../../component/tabs/tabs'

import { Grid } from "@mui/material";

function IndVideos() {

    const { state } = useLocation()
    console.log('v', state.path)
    return (
        <div style={{ display: 'flex', marginRight: '20px' }}>

            <SideBar />
            <div className='content-main-div'>
                <MyHeader />
                <Grid container spacing={1}>
                    <Grid items xs={12} md={8}>
                        {/* <div className="video-container"> */}
                        <div className="video-subcontainer">
                            <div className="video-wrapper">
                                <video width="100%" controls src={state.path}></video>
                            </div>
                            <h4 className="title">{state.name}</h4>
                            <div className="details">
                                <h5 className="info">7,948,154 views • Jun 22, 2022</h5>
                                <div className="ind_videos_btns-Div">
                                    <Button className='ind_videos_btns'>
                                        <ThumbUpOutlinedIcon /> 123
                                    </Button>
                                    <Button className="ind_videos_btns">
                                        <ThumbDownOffAltOutlinedIcon /> Dislike
                                    </Button>
                                    <Button className='ind_videos_btns'>
                                        <ReplyOutlinedIcon /> Share
                                    </Button>
                                    <Button className='ind_videos_btns'>
                                        <AddTaskOutlinedIcon /> Save
                                    </Button>
                                </div>
                            </div>
                            <div className="channel">
                                <div className='channelInfo'>
                                    <div className="channelDetails">
                                        <h5 className="channelName">Lama Dev</h5>
                                        <h6 className='channelcounter'>200K subscribers</h6>
                                        <p className='description'>                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                                            at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                                            animi accusantium dolores ipsam ut.</p>
                                    </div>
                                </div>
                                <button className='subscribe'>Subscribe</button>
                            </div>
                            <MyComment />

                        </div>

                        {/* </div> */}
                    </Grid>
                    <Grid items xs={12} md={4} sx={{   width: '100%',height: '100%',overflow: 'hidden'}}>
                        <ScrollableTabsButtonAuto />

                        <div className='recommendation'>
                            <VideoCards type='sm' />
                        </div>
                    </Grid>

                </Grid>
            </div>

        </div>
    )
}
export default IndVideos