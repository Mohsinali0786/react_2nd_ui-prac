import { allAudios } from '../assets/audios/audiofiles'
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import tilawatImg from '../assets/tilawat.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SideBar from '../component/sidebar'
import MyHeader from '../component/Header/header'
import {selectedAudio,selectedAudioName} from '../store/actions/index'
import { useDispatch,useSelector } from 'react-redux';

function Audio() {
    const [currAudio, setcurrAudio] = useState('')
    const [currAudioName, setcurrAudioName] = useState('')
    const [currAudioNumber, setcurrAudioNumber] = useState(0)
    const [myduration, setMyDuration] = useState()
    const [currentTime, setcurrentTime] = useState()
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.sliderReducer?.selectedAudioName)
    
    
    const audioRef = useRef();
    console.log('audioRef',audioRef)
    useEffect(() => {
        // nextaudios()
        // previousaudios()
        var audios=localStorage.getItem('audios')
        var currTime=localStorage.getItem('currTime')
        setcurrentTime(JSON.parse(currTime))
        audios=JSON.parse(audios)
        
        setcurrAudio(audios.path)
        setcurrAudioName(audios.name)
        
        
    }, [])
    useEffect(() => {
        // setInterval(() => {
        //     localStorage.setItem('currTime',JSON.stringify(audioRef?.current?.audio?.current?.currentTime))
        // }, 1000);
        
    })
    console.log('currentTime',currentTime)
    const nextaudios = () => {

        // console.log('currAudioNumber', currAudioNumber)
        // console.log('allAudios.length-1', allAudios.length - 1)

        if (currAudioNumber < (allAudios.length)) {
            console.log('If')

            setcurrAudio(allAudios[currAudioNumber]?.path)
            setcurrAudioName(allAudios[currAudioNumber]?.name)

            setcurrAudioNumber(currAudioNumber + 1)
        }

    }
    
    const previousaudios = () => {
        // console.log('duration', audioRef?.current?.audio?.current?.currentTime);

        // console.log('currAudioNumber', currAudioNumber)
        // console.log('allAudios.length-1', allAudios.length - 1)
        if (currAudioNumber > 1) {
            setcurrAudio(allAudios[currAudioNumber - 2]?.path)
            setcurrAudioName(allAudios[currAudioNumber - 2]?.name)
            setcurrAudioNumber(currAudioNumber - 1)

        }
    }
    const playAudio = (clickedAudio, index) => {
        // console.log('index', index)
        // console.log('clickedAudio', clickedAudio)
        setcurrAudio(clickedAudio.path)
        setcurrAudioName(clickedAudio.name)
        setcurrAudioNumber(index + 1)
        dispatch(selectedAudioName({name:clickedAudio.name,path:clickedAudio.path}))
        localStorage.setItem("audios",JSON.stringify({name:clickedAudio.name,path:clickedAudio.path}))
    }
    // console.log('MyDu', myduration)
    return (
        <div style={{ display: 'flex' }}>
            {/* <div> */}
            <SideBar />
            <div className='content-main-div'>
                <MyHeader />
                <Grid container spacing={1}>
                    <Grid items xs={12} sm={8}>
                        <div className='audioscrenn-main-div'>
                            <img src={tilawatImg} className='tilawatimage' />
                            <p>Name:<b>{currAudioName}</b></p>
             
                            <AudioPlayer
                                ref={audioRef}
                                autoPlay
                                src={currAudio}
                                onPlay={e => console.log("onPlay".e)}
                                onLoadedData={(e) => { setMyDuration(e.currentTarget.duration.toFixed(2))}}
                                defaultCurrentTime={5000}
                                progressUpdateInterval={5000}
                            // other props here
                            >
                            </AudioPlayer>
                            <div className='NxtPrev-icons'>
                                <a onClick={() => previousaudios()}>Previous</a>
                                <a onClick={() => nextaudios()}>Next</a>
                                {/* <PlayArrowIcon /> */}

                            </div>
                        </div>
                    </Grid>
                    <Grid items xs={12} sm={4}>
                        <div className='audioList-maindiv'>
                            <h4>Tilawat</h4>
                            <p>Total Audios:<b>{allAudios.length}</b></p>
                            <div>
                                {
                                    allAudios.map((v, i) => {
                                        return (
                                            <div className={currAudioName !== v.name ? 'audioList' : 'selectedaudioList audioList'} onClick={() => playAudio(v, i)}>
                                                <p>
                                                    <span>{i + 1}</span>
                                                    <span>{v.name}</span>
                                                </p>
                                                <div className={currAudioName !== v.name ? 'not_selected' : 'selected'}>{myduration} seconds</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </Grid>


                </Grid>
            </div>
        </div>
    )
}
export default Audio