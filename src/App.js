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
        <Link to='/projects' className='buttonText'>Resume</Link>
      </Button>
      <img className='linkedin' src={'linkedin1.png'}></img>
      <img className='github' src={'github1.png'}></img>
    </div>
  );
}

export default App;
