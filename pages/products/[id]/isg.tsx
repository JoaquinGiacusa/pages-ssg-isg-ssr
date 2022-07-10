import MainLayout from "../../../components/main-layout";

const ProductPage = ({ data }: any) => {
  return <MainLayout>{JSON.stringify(data)}</MainLayout>;
};

export default ProductPage;

async function pullData(id: string) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const data = await res.json();
  return data;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // false or blocking
  };
}

//abajo de una pege tengo que agregar estas funciones
export async function getStaticProps(context: any) {
  const productId = context.params.id;
  const data = await pullData(productId as string);

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}
