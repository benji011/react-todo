import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1 className="title">About</h1>
      <p>A simple todo app using ReactJS, Bulma CSS, Supabase & Vercel</p>
      <p>
        You can read more about it on GitHub{" "}
        <a href="https://github.com/benji011/react-todo">here</a>
      </p>
      <br />
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default About;
