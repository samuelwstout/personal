import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
         <Button className='homeButton' variant='outlined'>
            <Link className='buttonText' to='/'>Home</Link>
        </Button>
    </div>
    )
}

export default Projects;