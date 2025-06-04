import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="pb-6">Welecome to Waterlily</h1>
      <Link
        to="/intake-form"
        className="bg-black text-white px-4 py-4 inline-block rounded-[12px] hover:bg-gray-800 transition-colors duration-300"
      >
        Start Intake Form
      </Link>
    </div>
  );
};

export default Home;
