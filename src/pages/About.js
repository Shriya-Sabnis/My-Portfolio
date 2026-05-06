// src/pages/About.js
import React from "react";

const About = () => {
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
            More about you
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.94rem",
              maxWidth: "32rem",
            }}
          >
            Education, soft skills, sports and achievements that give context to
            your technical work.
          </p>
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.3rem",
        }}
      >
        {/* Education */}
<div
  style={{
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(39,39,47,0.9)",
    background:
      "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
    padding: "1.1rem 1.05rem",
    boxShadow: "var(--shadow-soft)",
  }}
>
  <div
    style={{
      fontSize: "0.84rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "0.5rem",
    }}
  >
    Higher Education
  </div>

  <div
    style={{
      fontSize: "0.92rem",
      marginBottom: "0.2rem",
      color: "#f4f4f5",
      fontWeight: 500,
      lineHeight: 1.5,
    }}
  >
    Integrated B.Tech in Computer Science and Engineering (AI & Data Science)
  </div>

  <div
    style={{
      fontSize: "0.8rem",
      color: "var(--text-muted)",
      marginBottom: "0.45rem",
      lineHeight: 1.6,
    }}
  >
    MIT World Peace University, Pune • 2023–2029
  </div>

  <p
    style={{
      fontSize: "0.86rem",
      color: "#e4e4e7",
      lineHeight: 1.7,
    }}
  >
    I am currently pursuing an Integrated B.Tech in Computer Science and
    Engineering with a specialization in AI and Data Science at MIT World Peace
    University, Pune. I have maintained a CGPA of 9.52 and have taken up both
    leadership and extracurricular responsibilities, including serving as Class
    Representative in my first year, being a year topper, captaining the
    polytechnic basketball team, and being nominated as the best outgoing
    student from my class.
  </p>
</div>
{/* Schooling */}
<div
  style={{
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(39,39,47,0.9)",
    background:
      "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
    padding: "1.1rem 1.05rem",
    boxShadow: "var(--shadow-soft)",
  }}
>
  <div
    style={{
      fontSize: "0.84rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "0.5rem",
    }}
  >
    Schooling
  </div>

  <div
    style={{
      fontSize: "0.92rem",
      marginBottom: "0.2rem",
      color: "#f4f4f5",
      fontWeight: 500,
      lineHeight: 1.5,
    }}
  >
    Vidya Pratishthan’s Magarpatta City Public School
  </div>

  <div
    style={{
      fontSize: "0.8rem",
      color: "var(--text-muted)",
      marginBottom: "0.45rem",
      lineHeight: 1.6,
    }}
  >
    ICSE Board • 10th Grade • 96.4%
  </div>

  <p
    style={{
      fontSize: "0.86rem",
      color: "#e4e4e7",
      lineHeight: 1.7,
    }}
  >
    I completed my schooling at Vidya Pratishthan’s Magarpatta City Public
    School under the ICSE board. I studied there for 13 years and scored 96.4%
    in my 10th board examinations. During my school journey, I also took on
    leadership responsibilities as House Captain, which helped me strengthen my
    confidence, discipline, and team management skills.
  </p>
</div>
        {/* Soft skills */}
<div
  style={{
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(39,39,47,0.9)",
    background:
      "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
    padding: "1.1rem 1.05rem",
    boxShadow: "var(--shadow-soft)",
  }}
>
  <div
    style={{
      fontSize: "0.84rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "0.5rem",
    }}
  >
    Soft skills
  </div>

  <p
    style={{
      fontSize: "0.86rem",
      color: "#e4e4e7",
      lineHeight: 1.6,
      marginBottom: "0.8rem",
    }}
  >
    I value clear communication, teamwork, and problem solving while working on
    projects and academic responsibilities. Along with leadership and
    adaptability, I also consider responsibility, discipline, and quick
    learning to be some of my key strengths that help me contribute effectively
    in both individual and team environments.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
    }}
  >
    {[
      "Communication",
      "Problem Solving",
      "Leadership",
      "Teamwork",
      "Adaptability",
      "Responsibility",
      "Discipline",
      "Quick Learning",
    ].map((item) => (
      <span
        key={item}
        style={{
          fontSize: "0.78rem",
          padding: "0.28rem 0.7rem",
          borderRadius: "999px",
          border: "1px solid rgba(39,39,47,0.9)",
          background:
            "linear-gradient(130deg, rgba(24,24,27,0.96), rgba(24,24,27,0.8))",
          color: "var(--text-muted)",
        }}
      >
        {item}
      </span>
    ))}
  </div>
</div>

        {/* Sports / achievements */}
<div
  style={{
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(39,39,47,0.9)",
    background:
      "linear-gradient(145deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
    padding: "1.1rem 1.05rem",
    boxShadow: "var(--shadow-soft)",
  }}
>
  <div
    style={{
      fontSize: "0.84rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "0.5rem",
    }}
  >
    Sports & achievements
  </div>

  <p
    style={{
      fontSize: "0.86rem",
      color: "#e4e4e7",
      lineHeight: 1.7,
      marginBottom: "0.8rem",
    }}
  >
    I actively play basketball and have served as the Captain of the
  Polytechnic Team, which has helped me develop leadership, teamwork,
  discipline, and confidence in competitive environments. Along with my
  team, I won the interdepartmental tournament and participated in events
  such as the Zest Basketball Summit. I have also participated in multiple
  hackathons and project showcases, including Smart India Hackathon (where
  my team was selected for Round 2), HackMIT, and project expos such as
  Vishwanova and Innovision, which strengthened my ability to collaborate,
  build under pressure, and present ideas effectively.

  </p>

  <ul
    style={{
      listStyle: "none",
      fontSize: "0.84rem",
      color: "var(--text-muted)",
      lineHeight: 1.7,
      display: "grid",
      gap: "0.25rem",
    }}
  >
     <li>• Sport: Basketball</li>
  <li>• Position: Captain of the Polytechnic Team</li>
  <li>• Achievement: Won the interdepartmental tournament</li>
  <li>• Event: Participated in Zest Basketball Summit</li>
  </ul>
</div>
      </section>
    </main>
  );
};

export default About;