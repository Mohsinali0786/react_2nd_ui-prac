import SideBar from '../../component/sidebar'
import MyHeader from '../../component/Header/header'
import VideoCards from '../../component/cards/videocard'
function VideoScreen() {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className='content-main-div'>
                <MyHeader />
                <div className='videocardscreen-div'>
                    <VideoCards />
                </div>
            </div>
        </div>
    )
}

export default VideoScreen