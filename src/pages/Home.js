// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const technicalSkills = [
  "Machine Learning",
  "Full-Stack Development",
  "React / React Native",
  "FastAPI / Node",
  "Cloud & DevOps",
  "Data Engineering",
  "CI/CD Pipelines",
];
const programmingLanguages = [
  "C",
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "SQL",
];
const toolsPlatforms = [
  "GitHub",
  "Netlify",
  "AWS",
  "Claude",
  "Perplexity",
  "GitHub Copilot",
];
const Home = () => {
  const navigate = useNavigate();

  return (
    <main
      style={{
        padding: "2.5rem 2rem 3.5rem",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2.2fr)",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        {/* Left side: name, tagline, resume button */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.75rem",
                borderRadius: "999px",
                background: "var(--accent-soft)",
                border: "1px solid rgba(234, 179, 8, 0.28)",
                marginBottom: "1.1rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle at 30% 0%, #bef264 0, #22c55e 40%, #14532d 100%)",
                  boxShadow: "0 0 18px rgba(74, 222, 128, 0.7)",
                }}
              />
              <span
                style={{
                  fontSize: "0.74rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Open to opportunities
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.3rem, 4vw, 3.2rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginBottom: "0.9rem",
              }}
            >
              Shriya Sabnis
              <span
                style={{
                  background:
                    "linear-gradient(120deg, #facc15, #f97316, #facc15)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                .
              </span>
            </h1>
            <div
          style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.7rem",
              marginBottom: "1rem",
              color: "var(--text-muted)",
              fontSize: "0.88rem",
              }}
>
              <span>AI & Data Science Student</span>
              <span>•</span>
              <span>Full-Stack Developer</span>
              <span>•</span>
              <span>MIT World Peace University, Pune</span>
            </div>

            <p
              style={{
                maxWidth: "34rem",
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: "1.7rem",
              }}
            >
              I am a diploma student and aspiring developer with a strong interest
              in full-stack development, machine learning, and artificial
               intelligence. I enjoy building practical projects in these fields and
              am actively looking for internship opportunities where I can learn,
              contribute, and grow as a developer.

            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.9rem",
                alignItems: "center",
              }}
            >
              <a
                 href="/Shriya_Sabnis_Resume.pdf"
                  download
                style={{
                  padding: "0.75rem 1.4rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(250, 204, 21, 0.6)",
                  background:
                    "radial-gradient(circle at 0 0, #facc15 0, #ca8a04 40%, #854d0e 100%)",
                  color: "#020617",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.85)",
                  transform: "translateY(0)",
                  transition:
                    "transform 160ms ease-out, box-shadow 160ms ease-out, filter 160ms ease-out",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 22px 40px rgba(0,0,0,0.95)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 30px rgba(0,0,0,0.85)";
                }}
              >
                <span>Download resume</span>
                <span
                  style={{
                    fontSize: "1rem",
                    transform: "translateY(1px)",
                  }}
                >
                  ↓
                </span>
              </a>

              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right side: animated card with moving elements */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
          }}
        >
          {/* Floating glow circle */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: "-18%",
              background:
                "radial-gradient(circle at 10% 0%, rgba(250, 204, 21, 0.23), transparent 55%)",
              filter: "blur(4px)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(39,39,47,0.9)",
              background:
                "linear-gradient(135deg, rgba(24,24,27,0.9), rgba(15,23,42,0.95))",
              boxShadow:
                "var(--shadow-soft), 0 0 0 1px rgba(250,250,250,0.02)",
              padding: "1.4rem 1.3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Moving accent strip */}
            <motion.div
              animate={{ x: ["-20%", "40%"] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: "-15%",
                right: "-30%",
                width: "70%",
                height: "65%",
                background:
                  "linear-gradient(130deg, transparent, rgba(250, 204, 21, 0.2), transparent)",
                opacity: 0.7,
                filter: "blur(4px)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "1.1rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Focus
                </div>
                <div
                  style={{
                    fontSize: "0.93rem",
                    fontWeight: 500,
                  }}
                >
                  Portfolio, ML, Product builds
                </div>
              </div>
              <div
                style={{
                  padding: "0.45rem 0.75rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(39,39,47,0.9)",
                  background:
                    "radial-gradient(circle at 0 0, rgba(250, 250, 250, 0.08), rgba(15,23,42,1))",
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "var(--text-muted)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle at 30% 0%, #facc15 0, #f97316 45%, #7c2d12 100%)",
                  }}
                />
                Available for work
              </div>
            </div>

            <div
              style={{
                borderRadius: "var(--radius-md)",
                background:
                  "linear-gradient(145deg, rgba(15,23,42,0.85), rgba(15,23,42,0.3))",
                border: "1px solid rgba(39,39,47,0.9)",
                padding: "0.95rem 0.95rem 0.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.6rem",
                }}
              >
                Snapshot
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#e4e4e7",
                  lineHeight: 1.6,
                }}
              >
                Use this block to give a one-line summary of your core value prop
                as an engineer. Something that you want recruiters to notice
                immediately.
              </p>

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: "82px",
                  height: "82px",
                  borderRadius: "999px",
                  border: "1px dashed rgba(63,63,70,0.9)",
                  right: "-18px",
                  bottom: "-18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle at 20% 0%, #facc15 0, #f97316 45%, #7c2d12 100%)",
                    boxShadow: "0 0 16px rgba(248, 250, 252, 0.7)",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
{/* SKILLS SECTION */}
<section style={{ marginTop: "3rem" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      marginBottom: "1.2rem",
      flexWrap: "wrap",
      alignItems: "flex-end",
    }}
  >
    <h2
      style={{
        fontSize: "0.95rem",
        letterSpacing: "0.26em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
      }}
    >
      Skillset
    </h2>
    <p
      style={{
        fontSize: "0.85rem",
        color: "var(--text-muted)",
        maxWidth: "24rem",
      }}
    >
      A combination of development, programming, and modern tools that I use to
      build practical and scalable solutions.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.2rem",
    }}
  >
    <div style={skillCardStyle}>
      <h3 style={skillHeadingStyle}>Technical Skills</h3>
      <div style={skillListStyle}>
        {technicalSkills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            style={skillPillStyle}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>

    <div style={skillCardStyle}>
      <h3 style={skillHeadingStyle}>Programming Languages</h3>
      <div style={skillListStyle}>
        {programmingLanguages.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            style={skillPillStyle}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>

    <div style={skillCardStyle}>
      <h3 style={skillHeadingStyle}>Tools & Platforms</h3>
      <div style={skillListStyle}>
        {toolsPlatforms.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            style={skillPillStyle}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* HIGHLIGHT CARDS SECTION */}
      <section style={{ marginTop: "3.1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "1.3rem",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <h2
            style={{
              fontSize: "0.95rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Explore
          </h2>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              maxWidth: "20rem",
            }}
          >
            Cards navigate to deeper pages with more details.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.3rem",
          }}
        >
          {/* Certifications card */}
          <motion.button
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate("/certifications")}
            style={cardStyle("#facc15")}
          >
            <div style={cardHeaderStyle}>
              <span style={cardLabelStyle}>Certifications</span>
              <span style={cardArrowStyle}>↗</span>
            </div>
            <p style={cardBodyTextStyle}>
              View all your completed certifications in a clean grid and open
              each one with more context.
            </p>
            <div style={cardFooterTextStyle}>Click to open</div>
          </motion.button>

          {/* Projects card */}
          <motion.button
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate("/projects")}
            style={cardStyle("#f97316")}
          >
            <div style={cardHeaderStyle}>
              <span style={cardLabelStyle}>Projects</span>
              <span style={cardArrowStyle}>↗</span>
            </div>
            <p style={cardBodyTextStyle}>
              Tiled view of your projects with tech stack, description, GitHub
              links, and live demos.
            </p>
            <div style={cardFooterTextStyle}>Click to open</div>
          </motion.button>

          {/* Personal info card */}
           <motion.button
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => navigate("/about")}
            style={cardStyle("#22c55e")}
          >
            <div style={cardHeaderStyle}>
              <span style={cardLabelStyle}>More about you</span>
            </div>
            <p style={cardBodyTextStyle}>
              Education, soft skills, sports, achievements, and other things
              that define you beyond code.
            </p>
            <div style={cardFooterTextStyle}>Click to open</div>
          </motion.button>
        </div>
      </section>
    </main>
  );
};

const cardStyle = (accent) => ({
  textAlign: "left",
  borderRadius: "var(--radius-lg)",
  border: "1px solid rgba(39,39,47,0.9)",
  background:
    "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.96))",
  padding: "1.2rem 1.15rem 1.05rem",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  boxShadow: "var(--shadow-soft)",
  color: "var(--text-main)",
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  outline: "none",
});

const cardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
};

const cardLabelStyle = {
  fontSize: "0.84rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
};
const skillCardStyle = {
  borderRadius: "var(--radius-lg)",
  border: "1px solid rgba(39,39,47,0.9)",
  background:
    "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
  padding: "1.1rem 1rem",
  boxShadow: "var(--shadow-soft)",
};

const skillHeadingStyle = {
  fontSize: "0.84rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.85rem",
};

const skillListStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.55rem",
};

const skillPillStyle = {
  fontSize: "0.8rem",
  padding: "0.4rem 0.9rem",
  borderRadius: "999px",
  border: "1px solid rgba(39,39,47,0.9)",
  background:
    "linear-gradient(130deg, rgba(24,24,27,0.9), rgba(24,24,27,0.7))",
  color: "var(--text-main)",
  boxShadow: "var(--shadow-subtle)",
};
const cardArrowStyle = {
  fontSize: "1.1rem",
  opacity: 0.85,
};

const cardBodyTextStyle = {
  fontSize: "0.92rem",
  color: "#e4e4e7",
  lineHeight: 1.6,
};

const cardFooterTextStyle = {
  marginTop: "0.2rem",
  fontSize: "0.78rem",
  color: "var(--text-muted)",
};

export default Home;