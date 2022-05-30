import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const Projects = () => {
    return (
    <div>
        <Button className='homeButton' variant='outlined'>
                <Link className='buttonText' to='/'>Back</Link>
        </Button>
        <div className='projectDiv'>
            <h1 className='projectHeading'>Classify</h1>
            <Button className='sourcecodeBtn' variant='outlined'>
                <a className='buttonText' href='//www.github.com/samuelwstout/Classify'>Source Code</a>
            </Button>
            <h3 className='description1'>a tool to help find classical composers with Spotify's Search API.</h3>
            <h3 className='description2'>built with React/Redux and Node/Express</h3>
            <iframe className='video'
                    src="https://youtube.com/embed/T_DcSoBtodY"  
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
        </div>
    </div>
    )
}

export default Projects;