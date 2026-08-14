export default function Home(){
  return <main>
    <section className="hero"><div className="container">
      <span className="pill">TASK-BASED LEARNING PLATFORM</span>
      <h1>Learn by doing. Build real skills.</h1>
      <p>Career assessment, personalized learning paths, practical tasks, AI feedback, XP, certificates and an admin learning system — connected in one platform.</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:25}}>
        <a className="btn primary" href="/career-test">Take Career Test</a>
        <a className="btn outline" href="/courses">Explore Courses</a>
      </div>
    </div></section>
    <section className="section"><div className="container grid grid3">
      {[
        ["🎯","Career Profile","Discover your strongest career direction with a 20-question assessment."],
        ["🧭","Personalized Path","Move from course to lesson to task with sequential unlocking."],
        ["🚀","Practical Tasks","Submit real work instead of only watching videos."],
        ["🤖","AI Feedback","Get rubric-based feedback and improvement suggestions."],
        ["⭐","XP & Gamification","Earn XP as you complete tasks and projects."],
        ["🏆","Certificates","Issue verifiable course certificates after completion."]
      ].map(x=><div className="card" key={x[1]}><div style={{fontSize:34}}>{x[0]}</div><h2>{x[1]}</h2><p className="muted">{x[2]}</p></div>)}
    </div></section>
  </main>
}
