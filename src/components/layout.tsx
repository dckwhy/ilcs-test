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
      <Footer />
    </div>
  );
};

export default Layout;
