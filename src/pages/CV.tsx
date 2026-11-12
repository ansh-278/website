import "./CV.css";

const CV_FILE = "/Shresthansh_Nayak_CV.pdf";

export default function CV() {
  return (
    <main className="cv">
      <header className="cv-head">
        <div>
          <h1>Shresthansh Nayak</h1>
          <p className="cv-meta">
            Odisha, India ·{" "}
            <a href="mailto:shresthansh278@gmail.com">shresthansh278@gmail.com</a>
            {" · "}
            <a href="https://github.com/ansh-278" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
        <div className="cv-actions">
          <a className="cv-btn cv-btn-primary" href={CV_FILE} download>
            Download PDF
          </a>
          <a className="cv-btn" href={CV_FILE} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
        </div>
      </header>

      <section>
        <h2>Profile</h2>
        <p>
          Undergraduate Physics student with a strong interest in theoretical and
          mathematical physics, computational science, and astronomy. Interested in
          understanding physical systems through mathematical reasoning,
          programming, and independent study.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul className="cv-list">
          <li>
            <strong>B.Sc. (Hons.) in Physics</strong> — S.K.C.G. Autonomous
            College, Paralakhemundi <span className="cv-date">2025–2028 (Pursuing)</span>
          </li>
          <li>
            <strong>Class XII</strong> — Centurion Public School{" "}
            <span className="cv-date">86%</span>
          </li>
          <li>
            <strong>Class X</strong> — New Life English Medium School{" "}
            <span className="cv-date">90%</span>
          </li>
        </ul>
      </section>

      <section>
        <h2>Academic Interests</h2>
        <ul className="cv-tags">
          {[
            "Theoretical Physics",
            "Mathematical Physics",
            "Quantum Mechanics",
            "Special and General Relativity",
            "High Energy and Particle Physics",
            "Astronomy and Cosmology",
            "Computational Physics",
          ].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <dl className="cv-skills">
          <dt>Programming</dt>
          <dd>Python, Java, NumPy, SQL</dd>
          <dt>Foundations</dt>
          <dd>
            Calculus, Linear Algebra, Differential Equations, Mathematical
            Methods, Classical Mechanics, Modern Physics
          </dd>
          <dt>General</dt>
          <dd>Problem solving, mathematical analysis, scientific reasoning</dd>
        </dl>
      </section>

      <section>
        <h2>Selected Projects</h2>
        <article className="cv-item">
          <h3>Pendulum Simulation</h3>
          <p>
            Python-based numerical simulation exploring pendulum motion and its
            dynamics, including a double-pendulum simulation using the
            fourth-order Runge–Kutta (RK4) method to study coupled, nonlinear
            motion.
          </p>
          <a
            className="cv-link"
            href="https://github.com/ansh-278/oscillating_pendulum"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </article>
        <article className="cv-item">
          <h3>Projectile Motion Simulator</h3>
          <p>
            Python simulation of projectile motion, including the effect of air
            resistance, to explore how forces influence trajectories.
          </p>
          <a
            className="cv-link"
            href="https://github.com/ansh-278/projectile-motion"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </article>
      </section>

      <section>
        <h2>Independent Research &amp; Exploration</h2>
        <p>
          Explored basic mathematical conjectures such as the Riemann Hypothesis
          and the Collatz conjecture. Recent interest in Little Red Dots (LRDs)
          spotted by the James Webb Space Telescope, and in black-hole stars.
        </p>
        <p className="cv-note">
          These are independent learning and exploration activities, not
          peer-reviewed publications.
        </p>
      </section>

      <section className="cv-two">
        <div>
          <h2>Hobbies &amp; Interests</h2>
          <p>Music · Movies · Online Games · Badminton · Writing</p>
        </div>
        <div>
          <h2>Languages</h2>
          <p>English · Hindi · Odia</p>
        </div>
      </section>
    </main>
  );
}
