import { useState } from 'react'
import './App.css'

const documents = [
  {
    id: 1,
    title: 'Remote work policy',
    category: 'HR',
    date: '2026-05-12',
    isImportant: true,
  },
  {
    id: 2,
    title: 'Login instruction',
    category: 'IT',
    date: '2026-05-09',
    isImportant: false,
  },
  {
    id: 3,
    title: 'Security guidelines',
    category: 'Security',
    date: '2026-05-06',
    isImportant: true,
  },
  {
    id: 4,
    title: 'Access request form',
    category: 'IT',
    date: '2026-05-02',
    isImportant: false,
  },
]

const news = [
  {
    id: 1,
    title: 'New internal portal version',
    text: 'The portal layout has been updated to improve access to documents and support requests.',
  },
  {
    id: 2,
    title: 'Security reminder',
    text: 'Remember to use strong passwords and report suspicious messages to the IT team.',
  },
]

function App() {
  const [searchText, setSearchText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formMessage, setFormMessage] = useState('')

  const filteredDocuments = documents.filter((document) =>
    document.title.toLowerCase().includes(searchText.toLowerCase())
  )

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage('Please fill in all fields.')
      return
    }

    setFormMessage('Your request has been sent successfully.')
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

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
            <a href="#dashboard" className="nav-link active">
              Dashboard
            </a>
            <a href="#documents" className="nav-link">
              Documents
            </a>
            <a href="#news" className="nav-link">
              News
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </aside>

        <main className="main-content">
          <section id="dashboard" className="welcome-card">
            <div>
              <p className="eyebrow">Overview</p>
              <h2>Welcome back</h2>
              <p>
                Manage internal documents, company updates and support requests
                from one place.
              </p>
            </div>
          </section>

          <section className="cards-grid">
            <article className="card">
              <p>Documents</p>
              <strong>{documents.length}</strong>
            </article>

            <article className="card">
              <p>New updates</p>
              <strong>{news.length}</strong>
            </article>

            <article className="card">
              <p>Open requests</p>
              <strong>3</strong>
            </article>
          </section>

          <section id="documents" className="section">
            <div className="section-header">
              <div>
                <p className="eyebrow">Documents</p>
                <h2>Company documents</h2>
              </div>

              <input
                type="text"
                placeholder="Search documents..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>

            <div className="document-list">
              {filteredDocuments.map((document) => (
                <article className="document-item" key={document.id}>
                  <div>
                    <h3>{document.title}</h3>
                    <p>
                      {document.category} • {document.date}
                    </p>
                  </div>

                  {document.isImportant && (
                    <span className="badge">Important</span>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="news" className="section">
            <div className="section-header">
              <div>
                <p className="eyebrow">News</p>
                <h2>Company updates</h2>
              </div>
            </div>

            <div className="news-grid">
              {news.map((item) => (
                <article className="news-card" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <div className="section-header">
              <div>
                <p className="eyebrow">Support</p>
                <h2>Contact IT support</h2>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your issue..."
                />
              </label>

              <button type="submit">Send request</button>

              {formMessage && <p className="form-message">{formMessage}</p>}
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App