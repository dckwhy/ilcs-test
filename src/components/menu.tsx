const Menu = () => {
  return (
    <div className="container flex flex-1 items-center justify-center space-x-4">
      <div className="flex flex-col items-center">
        <img
          className="w-6/12"
          src="/icons/pemberitahuan.png"
          alt="pemberitahuan"
          srcSet=""
        />
        <p className="text-xs text-red-400">Pemberitahuan</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-6/12"
          src="/icons/transportasi.png"
          alt="transportasi"
          srcSet=""
        />
        <p className="text-xs text-[#8a8a8b]">Transportasi</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-6/12"
          src="/icons/dokumen.png"
          alt="dokumen"
          srcSet=""
        />
        <p className="text-xs text-[#8a8a8b]">Dokumen</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-6/12"
          src="/icons/komoditi.png"
          alt="komoditi"
          srcSet=""
        />
        <p className="text-xs text-[#8a8a8b]">Komoditi</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-6/12"
          src="/icons/layanan.png"
          alt="layanan"
          srcSet=""
        />
        <p className="text-xs text-[#8a8a8b]">Layanan</p>
      </div>
    </div>
  );
};

export default Menu;
