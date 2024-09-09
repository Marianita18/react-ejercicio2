import "bootstrap/dist/css/bootstrap.min.css";
const Titulo = (props) => {
    console.log (props);
  return (
    <section className="container my-5 bg bg-success text-white text-center">
      <h1>HELLO {props.nombre}!</h1>
    </section>
  );
};
export default Titulo;
