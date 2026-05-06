// src/pages/Projects.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
  name: "NexCell",
  role: "Backend Developer | ML Model Contributor",
  year: "2026",
  short:
    "A semi-hardware battery diagnostics project that determines battery health in just 2 minutes, significantly reducing the traditional testing time from nearly a full day.",
  description:
    "NexCell is a semi-hardware battery diagnostics project designed to quickly evaluate battery health through an efficient testing process. The system reduces the conventional battery health assessment time from nearly a full day to just 2 minutes, making the process faster and more practical for real-world use. I contributed on the backend side and helped build the machine learning model used in the system to support rapid and reliable battery health analysis.",
  tech: ["Python", "React.js", "Netlify", "AutoCAD", "Hardware Components"],
  github: "https://github.com/example/nexcell",
  live: "https://example.com/nexcell",
  },
  {
    id: 2,
  name: "SplitBuddy",
  role: "Full-Stack Developer",
  year: "2026",
  short:
    "A mobile expense-sharing application that helps users split bills, track payments, and verify whether each member has completed their share successfully.",
  description:
    "SplitBuddy is a mobile application built to simplify group expense management by allowing users to store bills, split costs among members, and keep track of who has paid and who still has pending dues. The app also includes a payment flow that redirects users to a payment application and helps verify whether the transaction was completed successfully on the receiver’s end. It was a two-person project, and I contributed equally by working on both the frontend and backend development of the application.",
  tech: ["JavaScript", "React Native", "Android Studio", "Netlify", "Supabase"],
  github: "https://github.com/Shriya-Sabnis/SplitBuddy",
  live: "https://example.com/splitbuddy",
  },
  {
    id: 3,
  name: "EVA",
  role: "Backend Developer | Intent Classification Model Contributor",
  year: "2025-26",
  short:
    "A voice-enabled virtual assistant that accepts audio commands from the user and performs desktop tasks, file access, and system-level actions through intelligent task understanding.",
  description:
    "EVA is an environment virtual assistant designed to accept voice commands from users and perform a wide range of tasks on a laptop. The assistant is built to understand user intent, access files, and automate system-level operations in a more natural and efficient way through voice interaction. My contribution focused on building the backend classifier model that helped the assistant understand what action it was expected to perform based on the user’s command.",
  tech: ["C", "Python", "Whisper", "Gemini API", "Computer Vision", "HTML", "CSS", "Netlify"],
  github: "https://github.com/Shriya-Sabnis/EVA_CODE_CRUSADERS",
  live: "https://example.com/eva",
  },
  {
  id: 4,
  name: "Fitzs.AI",
  role: "Backend Developer | Outfit Recommendation Model Designer",
  year: "2024",
  short:
    "An AI-powered fashion assistant that recommends outfits based on body type, skin undertone, hair color, eye color, occasion, and the clothing items a user already owns.",
  description:
    "Fitzs.AI is a personalized fashion assistant that helps users build better outfits using their physical features, personal wardrobe, and styling needs. The system keeps track of clothing items a user already owns and recommends outfits based on factors such as body type, skin undertone, hair color, eye color, and occasion. It also suggests purchasable items through clickable links to help users achieve a desired look and offers styling guidance so users can dress well with less effort. My contribution focused on designing the backend recommendation model that generated outfit suggestions based on these input parameters.",
  tech: ["Web Scraping", "Python", "Computer Vision", "Gemini API", "Netlify", "CNN Model"],
  github: "https://github.com/example/fitzs-ai",
  live: "https://example.com/fitzs-ai",
},
{
  id: 5,
  name: "Attendance Tracker",
  role: "Backend Developer",
  year: "2024",
  short:
    "A student attendance management system that helps teachers create classes, mark attendance digitally, export attendance records to Excel, and identify defaulters more efficiently.",
  description:
    "Attendance Tracker is a student attendance management application built to simplify attendance handling for teachers and college faculty. The platform allows teachers to create classes, mark student attendance digitally, download attendance records in Excel format for future reference, and automatically calculate defaulters to make attendance maintenance more efficient. I was responsible for building the backend of the application and implementing its core features and functionality.",
  tech: ["Python", "HTML", "CSS", "Supabase", "Netlify"],
  github: "https://github.com/Shriya-Sabnis/Attendance-Tracker",
  live: "https://example.com/attendance-tracker",
},
];

const drawerVariants = {
  hidden: { x: "105%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 30 },
  },
  exit: { x: "105%", opacity: 0 },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main
      style={{
        padding: "2.5rem 2rem 3.5rem",
        maxWidth: "1120px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <header
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "1.6rem",
              letterSpacing: "-0.03em",
              marginBottom: "0.4rem",
            }}
          >
            Projects
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.94rem",
              maxWidth: "32rem",
            }}
          >
            A selection of projects that show how you think, build, and ship.
            Click a project to open a detailed panel with stack and links.
          </p>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {projects.length} items
        </div>
      </header>

      {/* grid of project cards */}
      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.3rem",
            paddingRight: activeProject ? "320px" : 0,
            transition: "padding-right 220ms ease-out",
          }}
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveProject(project)}
              style={{
                textAlign: "left",
                borderRadius: "18px",
                border: "1px solid rgba(39,39,47,0.9)",
                background:
                  "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
                padding: "1rem 0.95rem 0.9rem",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--shadow-soft)",
                color: "var(--text-main)",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  marginBottom: "0.2rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      marginBottom: "0.12rem",
                    }}
                  >
                    {project.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {project.role} • {project.year}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "1.1rem",
                    opacity: 0.85,
                  }}
                >
                  ↗
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.86rem",
                  color: "#e4e4e7",
                  lineHeight: 1.6,
                }}
              >
                {project.short}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "0.25rem",
                }}
              >
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.74rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(39,39,47,0.9)",
                      background:
                        "linear-gradient(130deg, rgba(24,24,27,0.96), rgba(24,24,27,0.8))",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Half-window drawer on the right */}
      <AnimatePresence>
        {activeProject && (
          <motion.aside
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: "72px",
              right: 0,
              bottom: "1.5rem",
              width: "min(360px, 100%)",
              background:
                "linear-gradient(145deg, rgba(24,24,27,0.98), rgba(15,23,42,0.99))",
              borderLeft: "1px solid rgba(39,39,47,0.9)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.03)",
              padding: "1.1rem 1.05rem",
              zIndex: 35,
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.76rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.35rem",
                  }}
                >
                  Project
                </div>
                <h2
                  style={{
                    fontSize: "1.02rem",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.1rem",
                  }}
                >
                  {activeProject.name}
                </h2>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {activeProject.role} • {activeProject.year}
                </div>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                style={{
                  borderRadius: "999px",
                  border: "1px solid rgba(39,39,47,0.9)",
                  background: "linear-gradient(130deg, #18181b, #020617)",
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  padding: "0.25rem 0.6rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            <p
              style={{
                fontSize: "0.86rem",
                color: "#e4e4e7",
                lineHeight: 1.6,
              }}
            >
              {activeProject.description}
            </p>

            <div
              style={{
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.4rem",
                }}
              >
                Tech stack
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {activeProject.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.76rem",
                      padding: "0.26rem 0.65rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(39,39,47,0.9)",
                      background:
                        "linear-gradient(130deg, rgba(24,24,27,0.96), rgba(24,24,27,0.8))",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "0.8rem",
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
              }}
            >
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.78rem",
                    padding: "0.4rem 0.75rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(250,204,21,0.7)",
                    background:
                      "radial-gradient(circle at 0 0, rgba(250,204,21,0.1), #020617)",
                    color: "#facc15",
                    textDecoration: "none",
                  }}
                >
                  GitHub
                </a>
              )}
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.78rem",
                    padding: "0.4rem 0.75rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(34,197,94,0.7)",
                    background:
                      "radial-gradient(circle at 0 0, rgba(34,197,94,0.12), #020617)",
                    color: "#4ade80",
                    textDecoration: "none",
                  }}
                >
                  Live demo
                </a>
              )}
            </div>

            <div
              style={{
                marginTop: "auto",
                fontSize: "0.76rem",
                color: "var(--text-muted)",
              }}
            >
              Tip: you can add screenshots, metrics, or challenges you solved in
              this space to make the story stronger.
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;