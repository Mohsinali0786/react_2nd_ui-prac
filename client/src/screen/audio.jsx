import { allAudios } from '../assets/audios/audiofiles'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import tilawatImg from '../assets/tilawat.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Audio() {
    // const allAudios=[surahKafiroon,surahIklas,surahFlaq,surahNas,surahFatiha]
    const [currAudio, setcurrAudio] = useState('')
    const [currAudioName, setcurrAudioName] = useState('')

    const [currAudioNumber, setcurrAudioNumber] = useState(0)


    useEffect(() => {
        nextaudios()
        previousaudios()

    }, [])
    const nextaudios = () => {
        console.log('currAudioNumber', currAudioNumber)
        console.log('allAudios.length-1', allAudios.length - 1)

        if (currAudioNumber < (allAudios.length)) {
            console.log('If')

            setcurrAudio(allAudios[currAudioNumber]?.path)
            setcurrAudioName(allAudios[currAudioNumber]?.name)

            setcurrAudioNumber(currAudioNumber + 1)
        }

    }

    const previousaudios = () => {

        console.log('currAudioNumber', currAudioNumber)
        console.log('allAudios.length-1', allAudios.length - 1)
        if (currAudioNumber > 1) {
            setcurrAudio(allAudios[currAudioNumber - 2]?.path)
            setcurrAudioName(allAudios[currAudioNumber - 2]?.name)
            setcurrAudioNumber(currAudioNumber - 1)

        }
    }
    const playAudio=(clickedAudio,index)=>{
        console.log('index',index)
        console.log('clickedAudio',clickedAudio)
        setcurrAudio(clickedAudio.path)
        setcurrAudioName(clickedAudio.name)
        setcurrAudioNumber(index+1)

        // setcurrAudio()
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid items xs={12} sm={6}>
                    <div className='audioscrenn-main-div'>
                        <img src={tilawatImg} className='tilawatimage' />
                        {/* <p>{currAudio}</p> */}
                        <p>Name:<b>{currAudioName}</b></p>
                        {/* <audio controls className="audio" src={currAudio}>
                            Your browser does not support the audio element.
                        </audio> */}
                        <AudioPlayer
                            autoPlay
                            src={currAudio}
                            onPlay={e => console.log("onPlay")}
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
                <Grid items xs={12} sm={6}>
                    <div className='audioList-maindiv'>
                        <h4>Tilawat</h4>
                        <p>Total Audios:{allAudios.length}</p>
                        <div>
                            {
                                allAudios.map((v, i) => {
                                    return (
                                        <div className='audioList' onClick={()=>playAudio(v,i)}>
                                            <p><span>{i + 1}</span><span>{v.name}</span></p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </Grid>


            </Grid>
        </div>
    )
}
export default Audio