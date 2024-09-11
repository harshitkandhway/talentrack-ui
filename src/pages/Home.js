import logo from '../images/logo.png';
import '../App.css';
import Banner from '../components/Banner';
import './styles/Home.css'

function Home() {
    return (
        <div className="App">
          <header className="App-header">
          <Banner />
            <div class="Home-container">
            <p className='Description'>
            AI-driven Job Matching platform which leverages advanced algorithms in Natural Language Processing (NLP) and Machine Learning to analyze job descriptions and applicant resumes, effectively matching the right candidates with the right opportunities
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <a
                className="App-link"
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                role="button"  /* ARIA role for better semantics */
            >
              Signup Now
            </a>
          </header>
        </div>
      );
}
export default Home;
