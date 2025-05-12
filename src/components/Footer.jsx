function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container bg-gray-800 text-white p-4 flex flex-col items-center justify-center">
        <p>&copy; 2023 My Website. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com" className="link">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://github.com" className="link">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;