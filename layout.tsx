import "./globals.css";

export const metadata = {
  title: "SkillPath",
  description: "Personalized task-based learning platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <a className="logo" href="/">Skill<span>Path</span></a>
          <nav className="navlinks">
            <a href="/courses">Courses</a>
            <a href="/career-test">Career Test</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/admin">Admin</a>
            <a className="btn primary" href="/login">Login</a>
          </nav>
        </header>
        {children}
        <footer className="footer">SkillPath · Learn by doing · Build real skills</footer>
      </body>
    </html>
  );
}
