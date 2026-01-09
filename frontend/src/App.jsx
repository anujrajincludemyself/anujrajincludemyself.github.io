const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Anuj</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="vh-100 d-flex align-items-center bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Hi, I'm Anuj 👋</h1>
          <p className="lead">Full stack Developer | React | JavaScript | Node | Express | MongoDb</p>
          <a href="#projects" className="btn btn-primary btn-lg mt-3">
            View My Work
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center">
            I am a passionate frontend developer who loves building clean and
            responsive web applications using modern technologies like React,
            JavaScript, and Bootstrap.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Portfolio Website</h5>
                  <p className="card-text">
                    Personal portfolio built with React and Bootstrap.
                  </p>
                  <a href="#" className="btn btn-outline-primary">View</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">browser extension</h5>
                  <p className="card-text">
                    Simple todo app with CRUD functionality.
                  </p>
                  <a href="#" className="btn btn-outline-primary">View</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">khilao.com</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero consequuntur consequatur magni ipsam fugit minima quidem nostrum dolorem ea quis? Velit nesciunt laboriosam, ducimus deleniti delectus modi aut cupiditate id.
                  </p>
                  <a href="#" className="btn btn-outline-primary">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Contact Me</h2>
          <p>Email: <strong>anujraj24go@gmail.com</strong></p>
          <p>GitHub: <strong>github.com/anujrajincludemyself</strong></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        © 2026 Anuj | All Rights Reserved
      </footer>
    </>
  );
};

export default App;
