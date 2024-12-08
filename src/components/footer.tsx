const Footer = () => {
  return (
    <footer className="p-2 bg-[#D2D3D4] sm:p-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs sm:text-center">
            Copyright &copy; 2020 All Rights Reserved I
            <a href="#" className="text-[#102D61] hover:underline">
              {" "}
              Indonesia National Single Window
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
