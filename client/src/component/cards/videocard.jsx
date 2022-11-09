import { Grid } from '@mui/material'
import { AllVideos } from '../../assets/videos/allvideos'
import { Link } from 'react-router-dom'

function VideoCards(props){
    const {type}=props
    return(
        <Grid container spacing={1}>
        {
            AllVideos.map((v) => {
                console.log('v==>',v)
                return (
                    <Grid className='card-section-Grid'  items xs={12}  sm={type!=='sm'?6:12} md={type!=='sm'?4:12} sx={{display:type==="sm"?"flex":"block" ,alignItems:'center'}}>
                        <Link to={`/myvideos/${v.name}`}state={v} ><video className='videocard-video' width={type!=="sm"?"320":"130"}   id='videos-home'   src={v.path}></video></Link>
                        <div className='cards-deatil-section'>
                            <h4>{v.name}</h4>
                            <h5>Lama Dev</h5>
                            <h6>660,908 views • 1 day ago</h6>
                        </div>
                    </Grid>
                )
            })
        }
    </Grid>
    )
}
export default VideoCards