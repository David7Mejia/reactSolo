import './Footer.css'


export default function Footer() {
    return (
      <div className="footer-container">
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/david-mejia-349ba4154/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="linkedin"></svg>
          </a>
          <a
            href="https://github.com/David7Mejia"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="github"></svg>
          </a>
        </div>
      </div>
    );

}
