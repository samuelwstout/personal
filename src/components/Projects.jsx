import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
        <h1 className='heading2'>Projects</h1>
        <Button className='homeButton' variant='outlined'>
            <Link className='homeButtonText' to='/'>Home</Link>
        </Button>
    </div>
    )
}

export default Projects;