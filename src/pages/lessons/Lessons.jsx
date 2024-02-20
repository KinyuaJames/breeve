import "./lessons.css";
import { SectionHead } from "../../components";
import { Programs } from "../../data";
import Card from "../../UI/Card";
// import { Link } from "react-router-dom";
import { SiGitbook } from "react-icons/si";
import { VscMortarBoard } from "react-icons/vsc";
import "./lessons.css";

const Lessons = () => {
  return (
    <section id="lessons" className="programs ">
      <div className="mainContainer">
        <div className="lesson-container">
          <SectionHead
            icon={<VscMortarBoard />}
            title="Lessons"
            className={`lesson-section`}
          />
          <div className="card__wrapper">
            {Programs.map(({ id, icons, title, info, path }) => {
              return (
                <Card className="prog-card" key={id}>
                  <span>{icons}</span>
                  <h4>{title} </h4>
                  <small>{info} </small>
                  <a to={path} className="button">
                    Get started
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
