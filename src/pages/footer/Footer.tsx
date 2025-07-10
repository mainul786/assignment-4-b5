function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 text-center py-4 mt-10 shadow-inner">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Library Management System. All rights
          reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Developed by Mainul Islam | Powered by React, TypeScript,Redux,
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default Footer;
