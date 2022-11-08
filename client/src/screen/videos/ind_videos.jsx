import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Button } from "@mui/material"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

function IndVideos() {

    const { state } = useLocation()
    console.log('v', state.path)
    return (
        <div>
            <h3>Individual</h3>
            <video width="60%" height="50%" controls src={state.path}></video>
            <h4>{state.name}</h4>
            <div>
                <h5>7,948,154 views • Jun 22, 2022</h5>
                <div className="ind_videos_btns-Div" style={{
                    display: 'flex',
                    gap: '20px'
                }}>
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
        </div>
    )
}
export default IndVideos