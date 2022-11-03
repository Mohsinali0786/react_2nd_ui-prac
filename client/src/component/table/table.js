import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AbcIcon from '@mui/icons-material/Abc';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Avatar, AvatarGroup, LinearProgress } from '@mui/material';




const rows = [

    {
        name: 'ABC',
        icon: <AbcIcon />,
        members: [img1, img2, img1, img2, img1, img2],
        budget: '$2000',
        progressbar: <LinearProgress variant="determinate" value={50} sx={{
            width: '50%', backgroundColor: `silver`,
            "& .MuiLinearProgress-bar": {
                backgroundColor: `black`,
            },
        }} />
    },
    {
        name: 'Kalim',
        icon: <FacebookIcon />,
        members: [img1, img2, img1, img2, img1, img2],
        budget: '$5000',
        progressbar: <LinearProgress variant="determinate" value={50} sx={{
            width: '50%', backgroundColor: `silver`,
            "& .MuiLinearProgress-bar": {
                backgroundColor: `black`,
            },
        }} />
    },
    {
        name: 'Kalim',
        icon: <FacebookIcon />,
        members: [img1, img2, img1, img2, img1, img2],
        budget: '$5000',
        progressbar: <LinearProgress variant="determinate" value={50} sx={{
            width: '50%', backgroundColor: `silver`,
            "& .MuiLinearProgress-bar": {
                backgroundColor: `black`,
            },
        }} />
    },
    {
        name: 'Kalim',
        icon: <FacebookIcon />,
        members: [img1, img2, img1, img2, img1, img2],
        budget: '$5000',
        progressbar: <LinearProgress variant="determinate" value={50} sx={{
            width: '50%', backgroundColor: `silver`,
            "& .MuiLinearProgress-bar": {
                backgroundColor: `black`,
            },
        }} />
    },
    {
        name: 'Kalim',
        icon: <FacebookIcon />,
        members: [img1, img2, img1, img2, img1, img2],
        budget: '$5000',
        progressbar: <LinearProgress variant="determinate" value={50} sx={{
            width: '50%', backgroundColor: `silver`,
            "& .MuiLinearProgress-bar": {
                backgroundColor: `black`,
            },
        }} />
    },

];
export default function BasicTable() {
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 0 ,height:'100px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: '100px'}} align="center">COMPANIES</TableCell>
                        <TableCell style={{width: '100px'}} align="center" >MEMBERS</TableCell>
                        <TableCell style={{width: '100px'}} align="center">BUDGET</TableCell>
                        <TableCell style={{width: '100px'}} align="center">COMPLETION</TableCell>
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        let mem = row.members
                        console.log('rows.mem', mem)
                        return (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{width: '100px'}} component="th" scope="row" align="center">
                                    <div style={{ display: 'flex' }}>
                                        <p>{row.icon}</p>
                                        <p>{row.name}</p>
                                    </div>
                                </TableCell>
                                <TableCell align="center" style={{width: '100px'}}>
                                    <AvatarGroup max={4}>
                                        {
                                            mem?.map((v) => {
                                                return (
                                                    <Avatar alt="Trevor Henderson" src={v} />
                                                )
                                            })
                                        }
                                    </AvatarGroup>
                                </TableCell>
                                <TableCell style={{width: '100px'}} align="center">{row.budget}</TableCell>
                                <TableCell style={{width: '100px'}} align="center">
                                    <p className="table-progressbar">{row.progressbar}</p>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
