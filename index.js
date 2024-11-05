// Define the Header component
function Header() {
  return (
    <header>
      <h1>Arpita Basu</h1>
      <p>Full Stack Developer | Java Enthusiast | Open Source Contributor</p>
      <p>Haldia Institute of Technology, 3rd Year, IT</p>
    </header>
  );
}

// Define the Section component to handle each resume section
function Section({ title, children }) {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

// Define the Resume component to hold the entire resume structure
function Resume() {
  return (
    <div className="container">
      <Header />

      <Section title="Professional Summary">
        <p>
          Enthusiastic and dedicated IT student with hands-on experience in Java, SQL, 
          and full-stack web development. Skilled in HTML, CSS, JavaScript, React.js, 
          and passionate about creating impactful digital solutions.
        </p>
      </Section>

      <Section title="Education">
        <ul>
          <li><strong>Haldia Institute of Technology</strong> - B.Tech in IT (3rd Year)</li>
        </ul>
      </Section>

      <Section title="Technical Skills">
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React.js</li>
          <li>Backend: Java, SQL</li>
        </ul>
      </Section>

      <Section title="Projects">
        <ul>
          <li><strong>Salesforce Website Project</strong>: Created two interactive pages using HTML and CSS.</li>
          <li><strong>To-Do List Application</strong>: Developed a task management app using HTML, CSS, and JavaScript.</li>
          <li><strong>Movie Details Website</strong>: Built a website that provides movie details based on user input.</li>
        </ul>
      </Section>

      <Section title="Experience and Involvement">
        <ul>
          <li><strong>Open Source Contributor</strong> - GirlScript Summer Code</li>
          <li><strong>Generation Green Campaign</strong> - Engaged over 100 people in sustainable initiatives</li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>Email: arpita.basu@example.com</p>
        <p>LinkedIn: linkedin.com/in/arpita-basu</p>
        <p>GitHub: github.com/arpita-basu</p>
      </Section>
    </div>
  );
}

// Render the Resume component into the root div
ReactDOM.render(<Resume />, document.getElementById("root"));
