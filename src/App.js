import './index.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const App = () => {
 
  return (
    <div className='introdiv'>
      <h1 className='heading'>Sam Stout</h1>
      <h3 className='description'>React Developer</h3>
      <Button variant='outlined' className='aboutButton'>
        <Link to='/about' className='buttonText'>About me</Link>
      </Button>
      <Button variant='outlined' className='projectButton'>
        <Link to='/projects' className='buttonText'>See my work</Link>
      </Button>
      <a href='//www.linkedin.com/in/samwstout' className='linkedin' target='_blank'><img src={'linkedin1.png'}></img></a>
      <a href='//www.github.com/samuelwstout' className='github' target='_blank'><img src={'github1.png'}></img></a>
    </div>
  );
}

export default App;



