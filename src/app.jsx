export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header class="Header" data-header>
      <div class="Header-inner" data-header-nav>
        <h1 class="header-font"><a href="login.html">Roommate Finder</a></h1>
        <nav class="Header-nav" data-nav>
          <div class="Header-nav-item" data-nav-item="1">
            <a href="about.html">About</a>
          </div>
          <div class="Header-nav-item" data-nav-item="2">
            <a href="survey.html">Survey</a>
          </div>
          <div class="Header-nav-item" data-nav-item="3">
            <a href="https://github.com/minjinnie/roommie">GitHub</a>
          </div>
          <div class="Header-nav-item" data-nav-item="4">
            <a href="login.html">Login</a>
          </div>
        </nav>
        <button class="MobileNav-trigger" data-mobile-nav-trigger>
          <div class="MobileNav-trigger-inner"></div>
        </button>
      </div>
    </header>
  
        <main>App components go here</main>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
              Source
            </a>
          </div>
        </footer>
      </div>
    );
  }