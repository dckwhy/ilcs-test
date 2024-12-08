import Navbar from "@/components/navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;
  return <Navbar />;
};

export default Layout;
