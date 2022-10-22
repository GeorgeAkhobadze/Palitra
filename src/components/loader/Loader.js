import loaderSvg from "../../assets/loader.svg";

const Loader = () => {
  return <div>{<img src={loaderSvg} alt="loader" className="loader" />}</div>;
};

export default Loader;
