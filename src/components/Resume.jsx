import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Resume = () => {
    return (
    <div>
        <h1 className='heading2'>Resume</h1>
        <Button className='homeButton' variant='outlined'>
            <Link className='homeButtonText' to='/'>Home</Link>
        </Button>
    </div>
    )
}

export default Resume;