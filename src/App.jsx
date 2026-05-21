import './App.css'

function App() {
  return (
    <div className="app">

      <header className="header">

        <div>
          <p className="eyebrow">Internal Web Portal</p>
          <h1>Company Dashboard</h1>
        </div>

        <div className="user-box">

          <span className="user-avatar">F</span>

          <span>Fabian</span>

        </div>

      </header>

      <div className="layout">
        <aside className="sidebar">
          <nav className="nav">
            <a href="#" className="nav-link active">Dashboard</a>
            <a href="#" className="nav-link">Documents</a>
            <a href="#" className="nav-link">News</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
        </aside>

        <main className="main-content">
          <section className="welcome-card">
            <h2>Welcome back</h2>
            <p>Manage internal documents, company updates and support requests from one place.</p>
          </section>
        </main>

      </div>
      

    </div>
  )
}

export default App