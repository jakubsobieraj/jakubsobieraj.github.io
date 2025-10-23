import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Some of my most recent work:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Social Media App</h3>
              <p className="text-gray-400 mb-4">
                Java swing application that mimics basic social media functions such as posting, liking and commenting. Using various data structures such as stacks, linked lists and queue users can create accounts, make posts and add people to their friends list.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Java.swing", "Data Structures", "Team collaboration", "User authentication", ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <img
                src="socialmedia.png"
                alt="Social Media App screenshot"
                className="rounded-lg mb-4 border border-white/10"
              />

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/asya-seag/Final_Group_Project_Data_Structures"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Java Scribble console game</h3>
              <p className="text-gray-400 mb-4">
                A final project from first-year CS from the Introduction to Software Development module, Scribble is a command-prompt based word game in Java. Users can save and load their games and the game features various word validation techniques while also integrating a dictionary.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Assessment", "Load/Save", "Word validation", "Dictionary integration"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <img
                src="scrabble.png"
                alt="Scrabble console game screenshot"
                className="rounded-lg mb-4 border border-white/10"
              />

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/jakubsobieraj/UoD-Scrabble-console-game"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Front-end group project</h3>
              <p className="text-gray-400 mb-4">
                The Flannan Isles Lighthouse is a front-end group project developed using Bootstrap. The project was heavily focused on collaboration and version control using GitHub issues to manage tasks and track progress within a 4 person team.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Bootstrap", "Version control", "Group project", "GitHub issues"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <img
                src="team9.jpg"
                alt="Team9webdev screenshot"
                className="rounded-lg mb-4 border border-white/10"
              />

              <div className="flex justify-between items-center">
                <a
                  href="https://team9webdev.github.io"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">First portfolio</h3>
              <p className="text-gray-400 mb-4">
                My first portfolio website created using HTML and CSS as part of the Pitman Training's final 1st year assessment. This project helped me understand the basics of web design and development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Bootstrap", "CSS", "HTML", "Portfolio"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <img
                src="firstpfolio.png"
                alt="Portfolio photo"
                className="rounded-lg mb-4 border border-white/10"
              />

              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};