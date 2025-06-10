function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container bg-gray-800 text-white p-4 flex flex-col items-center justify-center">
        <p>&copy; 2025 My Website. Talento Tech ~ React.</p>
        <p>
          Follow us on{' '}
          <a href="https://linkedin.com/in/nicolás-andres-cuello" className="link" target="_blank">
            LinkedIn
          </a>{' '}
          and{' '}
          <a href="https://github.com/Nico96C" className="link" target="_blank">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;