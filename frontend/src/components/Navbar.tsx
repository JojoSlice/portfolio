import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-slate-800/20 flex items-center justify-around rounded-xl shadow-lg p-3 px-12 fixed top-0 right-20 z-50">
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="flex items-center p-2 rounded-xl text-slate-800 hover:shadow-lg"
        >
          <h6 className="NavText">Home</h6>
        </Link>
        <Link
          to="/about"
          className="flex items-center p-2 rounded-xl text-slate-800 hover:shadow-lg"
        >
          <h6 className="NavText">About</h6>
        </Link>
        <Link
          to="/projects"
          className="flex items-center p-2 rounded-xl text-slate-800 hover:shadow-lg"
        >
          <h6 className="NavText">Projects</h6>
        </Link>
        <Link
          to="/contact"
          className="flex items-center p-2 rounded-xl text-slate-800 hover:shadow-lg"
        >
          <h6 className="NavText">Contact</h6>
        </Link>
        <Link
          to="/cv"
          className="flex items-center p-2 rounded-xl text-slate-800 hover:shadow-lg"
        >
          <h6 className="NavText">CV</h6>
        </Link>
      </div>
    </nav>
  );
}
