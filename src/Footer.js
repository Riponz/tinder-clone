import React from 'react'
import './Footer.css'
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';

// import ReplayIcon from '@mui/icons-material/Replay';
// import ClearIcon from '@mui/icons-material/Clear';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import StarRateIcon from '@mui/icons-material/StarRate';

export default function Footer() {
    return (
        <div className='buttons'>
            <IconButton>
                <ReplayIcon className='large replay' fontSize='large' />
            </IconButton>
            <IconButton>
                <ClearIcon className='large clear' fontSize='large' />
            </IconButton>
            <IconButton>
                <FlashOnIcon className='large flash' fontSize='large' />
            </IconButton>
            <IconButton>
                <FavoriteIcon className='large love' fontSize='large' />
            </IconButton>
            <IconButton>
                <StarRateIcon className='large star' fontSize='large' />
            </IconButton>
        </div>
    )
}
