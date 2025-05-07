import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Router>
            <div className="navbar">
                <h1 className="logo">My Website</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-item">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="nav-item">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

const Home = () => <div className="section">Welcome to the Home Page!</div>;
const About = () => <div className="section">Learn more About Us here.</div>;
const Projects = () => <div className="section">Check out our Projects.</div>;
const Contact = () => <div className="section">Get in touch on the Contact Page.</div>;

export default NavBar;