import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const App = () => {
 
  return (
    <div>
      <h1 className='heading'>Sam Stout</h1>
      <h3 className='description'>React Focused Software Engineer</h3>
      <Button variant='outlined' className='projectButton'>
        <Link to='/projects' className='buttonText'>Projects</Link>
      </Button>
      <Button variant='outlined' className='resumeButton'>
        <Link to='/resume' className='buttonText'>Resume</Link>
      </Button>
      <a href='//www.linkedin.com/in/samwstout' target='_blank'><img className='linkedin' src={'linkedin1.png'}></img></a>
      <a href='//www.github.com/samuelwstout' target='_blank'><img className='github' src={'github1.png'}></img></a>
      
    </div>
  );
}

export default App;
//www.linkedin.com/in/samwstout