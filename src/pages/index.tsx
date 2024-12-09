import "@/styles/index.css";

import Layout from "@/components/layout";
import Menu from "@/components/menu";
import TabsWithForms from "@/components/tabs";

const Home = () => {
  return (
    <Layout>
      <main className="bg-[#FCFCFB]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Menu />
          <div className="flex flex-row justify-between items-center mt-5">
            <div>
              <p className="text-xl">Data Pemberitahuan</p>
              <hr className="w-8 border-t-4 border-blue-400 my-2" />
            </div>
            <div className="flex flex-row space-x-1 text-xs">
              <p>No Pengajuan: 20120B388FAE20240402000001|</p>{" "}
              <p>KSWP: VALID|</p>
              <p>Jenis API: 02</p>
            </div>
          </div>
          <div>
            <TabsWithForms />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
