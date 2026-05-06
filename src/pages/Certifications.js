// src/pages/Certifications.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "../components/Overlay";

const mockCerts = [
  {
  id: 1,
  title: "Data Structures and Algorithms – Self-Paced Online Course",
  issuer: "GeeksforGeeks",
  year: "2025",
  image: "C:/Users/sabni/Desktop/TY Sem6/Projects/my-portfoli/public/image.png",
  description:
    "This course strengthened my understanding of core data structures and algorithms and helped me learn how to choose the right approach for different problem-solving scenarios. It covered important concepts such as arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching, along with where and how these concepts are applied in programming.",
  },

  {
  id: 2,
  title: "Java Course – Mastering the Fundamentals",
  issuer: "Scaler Topics",
  year: "2025",
  image: "C:/Users/sabni/Desktop/TY Sem6/Projects/my-portfoli/public/image1.png",
  description:
    "This course helped me strengthen my understanding of Java programming fundamentals and advanced concepts. It covered core Java syntax, object-oriented programming principles, problem-solving logic, and the practical structure needed to write clean and efficient Java programs.",
},
  {
  id: 3,
  title: "Power BI for Beginners",
  issuer: "Simplilearn",
  year: "2025",
  image: "C:/Users/sabni/Desktop/TY Sem6/Projects/my-portfoli/public/image2.png",
  description:
    "This course introduced me to the basics of Power BI and helped me understand how to create simple dashboards for data visualization and reporting. It covered beginner-level concepts such as working with data, building visual reports, and presenting insights in a more clear and structured format.",
},
];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <main
      style={{
        padding: "2.5rem 2rem 3.5rem",
        maxWidth: "1120px",
        margin: "0 auto",
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
            Certifications
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.94rem",
              maxWidth: "32rem",
            }}
          >
            All your completed certifications in one view. Click on any card to
            see the certificate larger with a short description.
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
          {mockCerts.length} items
        </div>
      </header>

      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.3rem",
          }}
        >
          {mockCerts.map((cert) => (
            <motion.button
              key={cert.id}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveCert(cert)}
              style={{
                textAlign: "left",
                borderRadius: "16px",
                border: "1px solid rgba(39,39,47,0.9)",
                background:
                  "linear-gradient(145deg, rgba(24,24,27,0.95), rgba(15,23,42,0.97))",
                padding: "0.9rem",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--shadow-soft)",
                color: "var(--text-main)",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(39,39,47,0.9)",
                  background:
                    "radial-gradient(circle at 0 0, rgba(250,250,250,0.08), rgba(15,23,42,1))",
                  padding: "0.5rem",
                  marginBottom: "0.2rem",
                  overflow: "hidden",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* certificate thumbnail area */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    background:
                      "repeating-linear-gradient(45deg, #18181b, #18181b 4px, #111827 4px, #111827 8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    fontSize: "0.78rem",
                    textAlign: "center",
                    padding: "0.5rem",
                  }}
                >
                  Thumbnail / image here
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    marginBottom: "0.12rem",
                  }}
                >
                  {cert.title}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {cert.issuer} • {cert.year}
                </div>
              </div>

              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "0.15rem",
                }}
              >
                Click to view certificate
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Overlay for active certificate */}
      <Overlay isOpen={!!activeCert} onClose={() => setActiveCert(null)}>
        {activeCert && (
          <>
            {/* Left: big certificate / placeholder */}
            <div
              style={{
                padding: "1.1rem",
                borderRight: "1px solid rgba(39,39,47,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle at 0 0, rgba(250,250,250,0.06), rgba(15,23,42,1))",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  background:
                    "repeating-linear-gradient(45deg, #18181b, #18181b 4px, #020617 4px, #020617 8px)",
                  border: "1px solid rgba(39,39,47,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Larger certificate preview or image goes here.
                <br />
                You can swap this area with an actual image later.
              </div>
            </div>

            {/* Right: text details */}
            <div
              style={{
                padding: "1.2rem 1.3rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
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
                      fontSize: "0.78rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Certification
                  </div>
                  <h2
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {activeCert.title}
                  </h2>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {activeCert.issuer} • {activeCert.year}
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(39,39,47,0.9)",
                    background:
                      "linear-gradient(130deg, #18181b, #020617)",
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
                  fontSize: "0.9rem",
                  color: "#e4e4e7",
                  lineHeight: 1.6,
                }}
              >
                {activeCert.description}
              </p>

              <div
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                You can add credential IDs, verification links, or notes about
                key learnings here.
              </div>
            </div>
          </>
        )}
      </Overlay>
    </main>
  );
};

export default Certifications;