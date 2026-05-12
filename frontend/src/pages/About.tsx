import { Link } from "react-router-dom";

const skills = {
  Strongest: [".NET / C#", "ASP.NET Core", "REST APIs", "SQL", "Git"],
  "Currently learning": ["Go", "TypeScript", "React"],
};

export default function About() {
  return (
    <div className="min-h-screen w-screen bg-slate-800/40 flex items-center justify-center py-32 px-8">
      <div className="w-full max-w-2xl flex flex-col gap-10">

        <div>
          <h1 className="headlineSemi text-slate-800 leading-tight">About</h1>
          <h1 className="headlineBold text-slate-800 leading-tight">me</h1>
        </div>

        <p className="text-slate-800 text-lg leading-relaxed">
          I'm a junior .NET developer who just graduated from the Systems
          Developer program at Campus Nyköping. During my studies I served as a
          student representative on the program's management board — a role that
          taught me as much about communication and responsibility as coding
          taught me about problem-solving.
        </p>

        <p className="text-slate-800 text-lg leading-relaxed">
          My passion is backend development, but I thrive when challenged by
          something new. Right now I'm learning Go and TypeScript to broaden my
          skill set and become a more well-rounded developer.
        </p>

        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/20 rounded-xl px-7 py-5">
              <span className="NavText text-sm text-slate-800 opacity-60 block mb-3">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="NavText text-slate-800 bg-slate-800/20 rounded-lg px-4 py-1.5 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-800 text-lg leading-relaxed">
          I'm looking for a job where I can keep growing — with a team that
          values curiosity as much as competence.
        </p>

        <div className="flex gap-4">
          <Link
            to="/projects"
            className="NavText bg-slate-800/20 text-slate-800 rounded-xl px-6 py-3 hover:shadow-lg hover:bg-slate-800/30 transition-all duration-200"
          >
            See my projects →
          </Link>
          <Link
            to="/contact"
            className="NavText bg-slate-800/20 text-slate-800 rounded-xl px-6 py-3 hover:shadow-lg hover:bg-slate-800/30 transition-all duration-200"
          >
            Get in touch →
          </Link>
        </div>

      </div>
    </div>
  );
}
