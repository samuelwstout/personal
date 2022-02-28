import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
        <h1>Projects</h1>
        <Button variant='outlined'>
            <Link to='/'>Home</Link>
        </Button>
    </div>
    )
}

export default Projects;