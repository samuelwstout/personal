import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
         <Button className='homeButton' variant='outlined'>
            <Link className='buttonText' to='/'>Home</Link>
        </Button>
        <div className="projectsdiv">
        <div className='deepdish'>
                <iframe  className='pizzavid'
                            src="https://youtube.com/embed/oFFeVwqrzQ4"  
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
                <h1>Discover Deep Dish</h1>
                <p>
                    Restaurant-finding application exclusively for deep dish pizza.
                </p>
                <ul>
                    <li>ReactJS</li>
                    <li>React Router</li>
                    <li>Material UI</li>
                    <li>Mapbox Gl JS API</li>
                    <li>json-server (mock server)</li>
                </ul>
            <Button variant='outlined'>
                <a className='buttonText' target="_blank" rel="noopener noreferrer" href='https://uw87tu99.web.app/'>Live Demo</a>
            </Button>
            <Button variant='outlined'>
                <a className='buttonText' target="_blank" rel="noopener noreferrer" href='https://github.com/samuelwstout/phase-2-final-project'>Github Repo</a>
            </Button>
            </div>

        <div className='itunes'>
                <iframe  className='itunesvid'
                            src="https://youtube.com/embed/2dPR0WBXx2w"   
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
                <h1>iTunes Search</h1>
                <p>
                   Search application that returns results from iTunes.
                </p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>iTunes Search API</li>
                </ul>
            <Button className='homeButton' variant='outlined'>
                <a className='buttonText' target="_blank" rel="noopener noreferrer" href='https://itunes-search-83cf6.firebaseapp.com/'>Live Demo</a>
            </Button>
            <Button className='homeButton' variant='outlined'>
                <a className='buttonText' target="_blank" rel="noopener noreferrer" href='https://github.com/samuelwstout/music-search-app'>Github Repo</a>
            </Button>
            </div>
        </div>
    </div>
    )
}

export default Projects;