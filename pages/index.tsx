import type { NextPage } from "next";
import Link from "next/link";
import MainLayout from "../components/main-layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <Link href={"/products"} passHref>
          <a>Ir a products</a>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
