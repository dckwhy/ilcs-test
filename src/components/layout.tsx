import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div
        className="container mx-auto grow p-4 flex flex-col bg-[#D2D3D4]"
        data-testid="content-container"
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
