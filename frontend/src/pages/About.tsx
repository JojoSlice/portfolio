import { useState } from "react";
import { Link } from "react-router-dom";

const skills = {
  Strongest: [".NET / C#", "ASP.NET Core", "REST APIs", "SQL", "Git"],
  "Currently learning": ["Go", "TypeScript", "React"],
};

const tabs = ["About me", "About this site"] as const;
type Tab = (typeof tabs)[number];

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("About me");

  return (
    <div className="min-h-screen w-screen bg-slate-800/40 flex items-center justify-center py-32 px-8">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <div>
          <h1 className="headlineSemi text-slate-800 leading-tight">About</h1>
          <h1 className="headlineBold text-slate-800 leading-tight">
            {activeTab === "About me" ? "me" : "this site"}
          </h1>
        </div>

        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`NavText text-sm rounded-lg px-5 py-2 transition-all duration-200 ${
                activeTab === tab
                  ? "bg-slate-800/40 text-slate-800"
                  : "bg-slate-800/10 text-slate-800/50 hover:bg-slate-800/20 hover:text-slate-800/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "About me" ? (
          <>
            <p className="text-slate-800 text-lg leading-relaxed">
              I'm a junior .NET developer who just graduated from the Systems
              Developer program at Campus Nyköping. During my studies I served
              as a student representative on the program's management board — a
              role that taught me as much about communication and responsibility
              as coding taught me about problem-solving.
            </p>

            <p className="text-slate-800 text-lg leading-relaxed">
              My passion is backend development, but I thrive when challenged by
              something new. Right now I'm learning Go and TypeScript to broaden
              my skill set and become a more well-rounded developer.
            </p>

            <div className="flex flex-col gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-slate-800/20 rounded-xl px-7 py-5"
                >
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
          </>
        ) : (
          <>
            <p className="text-slate-800 text-lg leading-relaxed">
              This site serves a dual purpose. On the surface it's a portfolio —
              a single place where employers can find my CV, projects and ways
              to reach me.
            </p>

            <p className="text-slate-800 text-lg leading-relaxed">
              But it's also a playground. My background is in backend
              development, and frontend is territory I'm actively exploring.
              Rather than following a tutorial in isolation, I learn by building
              something real — this site. That means things will change here as
              I pick up new concepts, try out libraries, and get more
              comfortable with React and TypeScript.
            </p>

            <div className="bg-slate-800/20 rounded-xl px-7 py-5 flex flex-col gap-3">
              <span className="NavText text-sm text-slate-800 opacity-60">
                Built with
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vite",
                  "React Router",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="NavText text-slate-800 bg-slate-800/20 rounded-lg px-4 py-1.5 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-800 text-lg leading-relaxed">
              If something looks unfinished or experimental, it probably is.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
