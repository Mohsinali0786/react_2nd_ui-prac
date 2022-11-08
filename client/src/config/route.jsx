import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home,Audio,VideoScreen,IndVideos} from '../screen'
import allPaths from './path'


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                {/* <Route path={allPaths?.LOGIN} element={<SigninScreen/>} /> */}
                <Route path={allPaths?.HOME} element={<Home/>} />
                <Route path={allPaths?.AUDIO} element={<Audio/>} />
                <Route path={allPaths?.VIDEO} element={<VideoScreen/>} />
                <Route path={allPaths?.INDIVIDUALVIDEO} element={<IndVideos/>} />

                {/* <Route path={allPaths?.COMPANYSIGNUP} element={<CompanySignup/>} />
                <Route path={allPaths?.ADMINPAGE} element={<Admin/>} />
                <Route path={allPaths?.STUDENT} element={<Students/>} />
                <Route path={allPaths?.COMPANYPROFILE} element={<CompanyProfile/>} />
                <Route path={allPaths?.USERPROFILE} element={<UserProfile/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter