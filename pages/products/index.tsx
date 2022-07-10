import { log } from "console";
import { NextPageContext } from "next";
import MainLayout from "../../components/main-layout";

const ProductsPage = ({ data }: any) => {
  return (
    <MainLayout>
      <h1>Productos:</h1>
      <div>{JSON.stringify(data)}</div>
    </MainLayout>
  );
};

export default ProductsPage;

async function pullData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

export async function getStaticProps(context: NextPageContext) {
  const data = await pullData();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

// //abajo de una pege tengo que agregar estas funciones
// export async function getServerSideProps(context: NextPageContext) {
//   const productId = context.query.productId;
//   const data = await pullData(productId as string);

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
