import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
         <Button className='homeButton' variant='outlined'>
            <Link className='homeButtonText' to='/'>Home</Link>
        </Button>
        <div className="projectsdiv">
        <div className='iTunes'>
            <h1>iTunes Search</h1>
            <iframe width="500" height="400" className='itunesvid'
                src="https://youtube.com/embed/2dPR0WBXx2w"   
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
            <p><a className='githubLink' target="_blank" rel="noopener noreferrer" href='https://itunes-search-83cf6.firebaseapp.com/'>Go to Site</a></p>
            <p><a className='githubLink' target="_blank" rel="noopener noreferrer" href='https://github.com/samuelwstout/music-search-app'>link to GitHub</a></p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>iTunes Search API</li>
            </ul>
        </div>
        <div className='deepdish'>
            <h1>Discover Deep Dish</h1>
            <iframe width="420" height="315"
                src="https://youtube.com/embed/oFFeVwqrzQ4"  
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
            <p><a className='githubLink' target="_blank" rel="noopener noreferrer" href='https://uw87tu99.web.app/'>Go to Site</a></p>
            <p><a className='githubLink' target="_blank" rel="noopener noreferrer" href='https://github.com/samuelwstout/phase-2-final-project'>link to GitHub</a></p>
            <ul>
                <li>ReactJS</li>
                <li>Material UI</li>
                <li>Mapbox Gl JS API</li>
            </ul>
        </div>
        <div>
        </div>
    </div>
    </div>
    )
}

export default Projects;