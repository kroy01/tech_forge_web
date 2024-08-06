import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import * as Icons from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(props) {

    const LinkClick = () => {
        // localStorage.setItem("Mode", !Boolean(localStorage.getItem("Mode")));
        document.scrollTo(0, 0);
    };

    const hamburgerMenuToggle = () => {
        if (document.getElementById('my-toggle-links').className == 'openHamburger') {
            document.getElementById('my-toggle-links').className = 'closeHamburger';
            setTimeout(() => { document.getElementsByClassName('HamburgerMenu')[0].style.display = 'none'; }, 300);
        }
        else {
            document.getElementById('my-toggle-links').className = 'openHamburger';
            setTimeout(() => { document.getElementsByClassName('HamburgerMenu')[0].style.display = 'block'; }, 300);
        }
    };

    return (
        <>
            <div style={{ position: 'fixed', padding: 0, zIndex: 100, display: 'flex', flexDirection: 'column', msFlexDirection: 'column', WebkitFlexDirection: 'column' }}>
                <Navbar className='NavBg' style={{ padding: '0', backgroundColor: '#09060a', margin: '0' }}>
                    <Nav style={{ textAlign: 'center', width: '100%', padding: '0', margin: '0', justifyContent: 'space-between', WebkitJustifyContent: 'space-between' }}>

                        <Nav.Link as={Link} to='/' onClick={() => LinkClick()} id='LogoButton' style={{ width: '3.75rem' }} />

                        <div style={{ justifyContent: 'flex-end', columnGap: '3.5vw', display: 'flex', alignSelf: 'center', WebkitJustifyContent: 'flex-end', marginRight: '1.75vw' }}>
                            {/* <Nav.Link as={Link} to='/' onClick={() => LinkClick()} className='NavButton'>Home</Nav.Link> */}

                            <Nav.Link as={Link} to='/insights' onClick={() => LinkClick()} className='NavButton'>Insights</Nav.Link>

                            <Nav.Link as={Link} to='/schedule' onClick={() => LinkClick()} className='NavButton'>Schedule</Nav.Link>

                            <Nav.Link as={Link} to='/samp1' onClick={() => LinkClick()} className='NavButton'>samp1</Nav.Link>

                            <Nav.Link as={Link} to='/samp2' onClick={() => LinkClick()} className='NavButton'>samp2</Nav.Link>

                            <Nav.Link as={Link} to='/samp3' onClick={() => LinkClick()} className='NavButton'>samp3</Nav.Link>
                        </div>

                        <button id='HamburgerToggle' onClick={hamburgerMenuToggle}><Icons.List /></button>

                        {/* {props.ToggleButton} */}           {/* Dark/Light Toggle */}
                    </Nav>
                </Navbar>
                <div className='HamburgerMenu' style={{ display: 'none' }}>
                    <div id="my-toggle-links" className='initHamburger' style={{ display: 'flex', flexDirection: 'column', msflexDirection: 'column', WebkitflexDirection: 'column', width: 'auto', textAlign: 'justify' }}>
                        <Link as={Link} to='/' onClick={() => LinkClick()} className='ExpandButtons'>Home</Link>

                        <Link as={Link} to='/about-us' onClick={() => LinkClick()} className='ExpandButtons'>About Us</Link>

                        <Link as={Link} to='/projects' onClick={() => LinkClick()} className='ExpandButtons'>Projects</Link>

                        <Link as={Link} to='/events' onClick={() => LinkClick()} className='ExpandButtons'>Events</Link>

                        <Link as={Link} to='/timeline' onClick={() => LinkClick()} className='ExpandButtons'>Timeline</Link>

                        <Link as={Link} to='/sponsors' onClick={() => LinkClick()} className='ExpandButtons'>Sponsors</Link>
                    </div>
                </div>
                {/* <div style={{ width: '100vw', height: '0.1vh', backgroundColor: '#FFFFFF' }}></div> */}
            </div>
        </>
    );
}

export default NavBar;