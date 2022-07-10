const style = {
  border: "solid 3px black",
  padding: 30,
  fontSize: 30,
};

export default function MainLayout({ children }: any) {
  return (
    <div>
      <header style={style}>Aca esta el HEADER</header>
      <div>{children}</div>
      <footer style={style}>Aca esta el FOOTER</footer>
    </div>
  );
}
