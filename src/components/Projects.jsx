import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
        <h1 className='heading2'>Projects</h1>
        <Button className='homeButton' variant='outlined'>
            <Link className='homeButtonText' to='/'>Home</Link>
        </Button>
        <div className='iTunes'>
            <h1>iTunes Search</h1>
            <p><a target="_blank" rel="noopener noreferrer" href='http://google.com'>linktosite.com</a></p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>iTunes Search API</li>
            </ul>
        </div>
        <div>
            
        </div>
    </div>
    )
}

export default Projects;