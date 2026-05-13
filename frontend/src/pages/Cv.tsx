import lw from "../assets/logos/lw.jpg";
import campus from "../assets/logos/campuslogo.jpg";

const workExperience = [
  {
    label: "LearningWell",
    date: "2025-08 - 2025-10 && 2026-01 - 2026-05",
    responsibilities: "Developer (Internship)",
    description: `Full-stack development with a focus on .NET and React.
Experience with system integration, containerized environments Docker, reverse proxies Nginx, as well as automated CI/CD and deployment processes.`,
    icon: (
      <img src={lw} alt="LearningWell" className="w-8 h-8 object-contain" />
    ),
  },
];
const education = [
  {
    label: "Software development .Net, Campus Nyköping",
    date: "2024 - 2026",
    description: `Practical vocational higher education in software development with a focus on C#, .NET, databases, web applications, and agile development.
Basic knowledge of backend and frontend development.
Student representative for the System class of 2024.`,
    icon: (
      <img
        src={campus}
        alt="Campus Nyköping"
        className="w-8 h-8 object-contain"
      />
    ),
  },
];
const competencies = [
  {
    field: "Programming Languages",
    values: ["C#", "TypeScript", "Lua", "Go"],
  },
  {
    field: "Backend",
    values: [".NET", "REST APIs", "Entity Framework", "LINQ"],
  },
  {
    field: "Databases",
    values: ["SQL Server", "Postgres", "MongoDB", "CouchbaseDB"],
  },
  {
    field: "Testing",
    values: ["xUnit", "Vitest", "Playwright"],
  },
  {
    field: "AI & Integration",
    values: ["MCP servers", "Azure AI Foundry", "Claude Code"],
  },
  {
    field: "Cloud Platforms",
    values: ["Azure"],
  },
  {
    field: "Tools",
    values: ["Git", "Visual Studio", "Neovim"],
  },
  {
    field: "Methodologies",
    values: ["Scrum", "OOP", "Agile Development", "Asynchronous Programming"],
  },
];
export default function Cv() {
  return (
    <div className="min-h-screen w-screen bg-slate-800/40 flex items-center justify-center py-32 px-8">
      <div className="flex flex-col items-center gap-12">
        <div>
          <h1 className="headlineSemi text-slate-800 text-center">
            Curriculum
          </h1>
          <h1 className="headlineBold text-slate-800 text-center">Vitae</h1>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <h6>Work experience:</h6>
          {workExperience.map(
            ({ label, date, responsibilities, description, icon }) => (
              <div
                key={label}
                className="flex items-start gap-5 bg-slate-800/20 rounded-xl px-7 py-5 text-slate-800 hover:shadow-lg hover:bg-slate-800/30 transition-all duration-200"
              >
                <span className="shrink-0">{icon}</span>

                <div className="flex flex-col gap-1">
                  <span className="NavText text-base font-semibold">
                    {label}
                  </span>

                  <span className="NavText text-sm opacity-60 leading-none mb-2">
                    {date}
                  </span>

                  <span className="NavText text-base">{responsibilities}</span>

                  <span className="NavText text-base opacity-80">
                    {description}
                  </span>
                </div>
              </div>
            ),
          )}
          <h6>Education:</h6>
          {education.map(({ label, date, description, icon }) => (
            <div
              key={label}
              className="flex items-start gap-5 bg-slate-800/20 rounded-xl px-7 py-5 text-slate-800 hover:shadow-lg hover:bg-slate-800/30 transition-all duration-200"
            >
              <div className="shrink-0">{icon}</div>

              <div className="flex flex-col gap-1">
                <span className="NavText text-base font-semibold">{label}</span>

                <span className="NavText text-sm opacity-60 leading-none mb-2">
                  {date}
                </span>

                <span className="NavText text-base opacity-80 whitespace-pre-line">
                  {description}
                </span>
              </div>
            </div>
          ))}
          <h6>Competencies:</h6>

          {competencies.map(({ field, values }) => (
            <div
              key={field}
              className="flex flex-col gap-3 bg-slate-800/20 rounded-xl px-7 py-5 text-slate-800 hover:shadow-lg hover:bg-slate-800/30 transition-all duration-200"
            >
              <span className="NavText text-base font-semibold">{field}</span>

              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="text-sm px-3 py-1 rounded-full bg-slate-800/10 text-slate-800/80 border border-slate-800/10"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
