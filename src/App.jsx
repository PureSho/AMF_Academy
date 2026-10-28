import { NavLink, Route, Routes, Link } from "react-router-dom";
import { ArrowRight, Crosshair, Users, Trophy, Menu, X, Target, CalendarDays, MessageCircle } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Home", "/"],
  ["Leadership", "/leadership"],
  ["Training", "/training"],
  ["Events", "/events"],
  ["Contact", "/contact"]
];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <Link className="brand" to="/" onClick={() => setOpen(false)}>
      <span className="brand-mark">
        <img style={{ width: "50px", height: "50px" }} src="/AMF_Academy/images/AMF_Main_Logo.png" alt="AMF Academy Logo"/>
      </span>
    </Link>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav nav-open" : "nav"}>
      {nav.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}
    </nav>
  </header>;
}

function Footer() {
  return <footer className="footer"><span>AMF ACADEMY</span><span>POPULATION: ONE VR • TRAIN TOGETHER. ALWAYS MOVE FORWARD.</span></footer>;
}

function PageTitle({ eyebrow, title, text }) {
  return <section className="page-title"><p className="eyebrow">// {eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}

function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">// POPULATION: ONE VR COMMUNITY</p>
        <h1>ALWAYS<br/><span>MOVING FORWARD.</span></h1>
        <p className="hero-text">Description of the AMF Academy community and its mission...</p>
        <div className="actions"><Link className="button primary" to="/training">Explore training <ArrowRight size={17}/></Link><Link className="button outline" to="/contact">Join the community</Link></div>
        <div className="stats"><div><strong>01</strong><span>PLACEHOLDER</span></div><div><strong>02</strong><span>PLACEHOLDER</span></div><div><strong>03</strong><span>PLACEHOLDER</span></div></div>
      </div>
      <div className="hero-art" aria-label="Abstract blue and gold academy emblem"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="crest"><span>AMF</span><small>ACADEMY</small></div><div className="crosshair"><Crosshair size={42}/></div></div>
    </section>
    <section className="section"><p className="eyebrow">// WHAT WE STAND FOR</p><h2>PLACEHOLDER<span>PLACEHOLDER</span></h2>
      <div className="cards three">
        <article className="card"><Users/><h3>PLACEHOLDER</h3><p>PLACEHOLDER</p></article>
        <article className="card"><Target/><h3>PLACEHOLDER</h3><p>PLACEHOLDER</p></article>
        <article className="card"><Trophy/><h3>PLACEHOLDER</h3><p>PLACEHOLDER</p></article>
      </div>
    </section>
    <section className="banner"><div><p className="eyebrow">// YOUR NEXT STEP</p><h2>Ready to move forward?</h2><p>PLACEHOLDER</p></div><Link className="button primary" to="/contact">Get in touch <ArrowRight size={17}/></Link></section>
  </>;
}

function Leadership() {
  return <><PageTitle eyebrow="ROSTER" title="The team behind AMF Academy" text="Owners and leaders help guide the academy, coordinate activities, and support the community."/>
    <section className="section"><p className="eyebrow">// OWNERS</p><h2>Leadership...<span>...</span></h2><div className="cards two">
      {["Owner / Founder", "Owner / Co-Founder"].map((role, i) => <article className="card leader" key={role}><div className="avatar">{i ? "02" : "01"}</div><p className="eyebrow">OWNER</p><h3>{role}</h3><p>Profile details will be added when the official name, role, and bio are confirmed.</p><span className="tag">PROFILE TO BE COMPLETED</span></article>)}
    </div></section>
    <section className="section muted-section"><p className="eyebrow">// LEADERSHIP TEAM</p><h2>...<span>...</span></h2><p className="body-copy">Coaches, event organizers, and moderators help keep sessions running and support members. Official team details can be added here.</p></section>
  </>;
}

function Training() {
  const stages = [
    ["01", "PLACEHOLDER", "PLACEHOLDER"],
    ["02", "PLACEHOLDER", "PLACEHOLDER"],
    ["03", "PLACEHOLDER", "PLACEHOLDER"]
  ];
  return <><PageTitle eyebrow="THE ACADEMY" title="PLACEHOLDER" text="PLACEHOLDER"/>
    <section className="section"><p className="eyebrow">// THE PATH</p><h2>... <span>...</span></h2><div className="cards three">{stages.map(([num,title,desc])=><article className="card stage" key={num}><span className="stage-num">{num}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
    <section className="section muted-section"><p className="eyebrow">// GETTING STARTED</p><h2>...<span>...</span></h2><ol className="steps"><li>PLACEHOLDER</li><li>PLACEHOLDER</li><li>PLACEHOLDER</li></ol><Link className="button primary" to="/contact">PLACEHOLDER<ArrowRight size={17}/></Link></section>
  </>;
}

function Events() {
  return <><PageTitle eyebrow="COMMUNITY CALENDAR" title="PLACEHOLDER" text="PLACEHOLDER"/>
    <section className="section"><div className="event-placeholder"><CalendarDays size={34}/><p className="eyebrow">// UPCOMING EVENTS</p><h2>Schedule coming soon</h2><p>Official dates, times, formats, and sign-up details will appear here once confirmed. Check the community contact page for updates.</p><Link className="button outline" to="/contact">Ask about events</Link></div></section>
  </>;
}

function Contact() {
  return <><PageTitle eyebrow="CONTACT" title="PLACEHOLDER" text="PLACEHOLDER"/>
    <section className="section"><p className="eyebrow">// COMMUNITY CHANNELS</p><h2>...<span>...</span></h2><div className="cards two">
      <article className="card"><MessageCircle/><h3>Discord</h3><p Link href="https://discord.gg/amfacademy">Click here to join the AMF discord</p><span className="tag">Discord Needed</span></article>
      <article className="card"><ArrowRight/><h3>Email</h3><p>PLACEHOLDER</p><span className="tag">EMAIL NEEDED</span></article>
    </div></section>
    <section className="section muted-section"><p className="eyebrow">// BEFORE YOU MESSAGE</p><h2>Help us point you <span>in the right direction.</span></h2><ul className="tips"><li>PLACEHOLDER</li><li>PLACEHOLDER</li><li>PLACEHOLDER.</li></ul></section>
  </>;
}

function NotFound() {
  return <section className="page-title"><p className="eyebrow">// 404</p><h1>Page not found</h1><Link className="button primary" to="/">Return home</Link></section>;
}

export default function App() {
  return <><Header/><main><Routes>
    <Route path="/" element={<Home/>}/><Route path="/leadership" element={<Leadership/>}/><Route path="/training" element={<Training/>}/><Route path="/events" element={<Events/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/></>;
}
