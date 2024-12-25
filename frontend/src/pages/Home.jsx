import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import {Button, IconButton, TextField} from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore' 
import { AuthContext } from '../contexts/AuthContext'

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("")

    const {addToUserHistory} = useContext(AuthContext);

    // const[userData, setUserData] = useState(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>
            <div className='navBar'>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>VividConnect</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={() => navigate('/history')}>
                        <RestoreIcon/>
                    </IconButton>
                    <p onClick={() => navigate('/history')}>History</p>
                    

                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth");
                    }}>Logout </Button>

                </div>

            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call</h2>
                        <div style={{display: 'flex', gap:"10px"}}>
                           <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                        </div>
                    </div>
                </div>

                <div className="rightPanel">
                    <img src='/logo3.png' alt="" />
                </div>
            </div>

        </>
    )
}

export default withAuth(HomeComponent)