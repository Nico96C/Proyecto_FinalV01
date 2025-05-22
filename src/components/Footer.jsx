function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container bg-gray-800 text-white p-4 flex flex-col items-center justify-center">
        <p>&copy; 2025 My Website. Talento Tech ~ React.</p>
        <p>
          Follow us on{' '}
          <a href="www.linkedin.com/in/nicolás-andres-cuello" className="link">
            LinkedIn
          </a>{' '}
          and{' '}
          <a href="https://github.com/Nico96C" className="link">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;