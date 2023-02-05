import React, { useState } from "react";
import { Skill } from "../entities/Skill";
import { skillsData } from "../entities/skillsData";
import closeButton from "../assets/images/close-icon.png";
import useOutsideClick from "../hooks/useOutsideClick";
import "./Form.css";

const Form = (props: any) => {
  const [skills, setSkills] = useState(skillsData);

  const handleClose = () => {
    props.handleClose();
  };

  const countSelectedSkills = () => {
    return skills.filter((skill) => skill.checked).length;
  };

  const clearSelectedSkills = () => {
    const clearedSkillsState = skills.map((skill) => {
      skill.checked = false;
      return skill;
    });

    setSkills(clearedSkillsState);
  };

  const toggleSelectedSkill = (selectedIndex: number) => {
    if (countSelectedSkills() === 10) return;

    const newSkillsState = skills.map((skill, currentIndex) => {
      if (currentIndex === selectedIndex) skill.checked = !skill.checked;
      return skill;
    });

    setSkills(newSkillsState);
  };

  const ref = useOutsideClick(() => {
    handleClose();
  });

  return (
    <div id="form_container">
      <div id="form" ref={ref}>
        <img
          className="exit-form"
          src={closeButton}
          alt="Close form"
          onClick={handleClose}
        />

        <h3 id="form__title">New Teammate</h3>

        <div id="form__selectedSkillsMsg">
          <div id="form__selectedSkillsMsg__main">
            Please look over the following thinking talents and select the top
            4-10 that you feel represent you the most.
          </div>
          <div id="form__selectedSkillsMsg__counter">
            {countSelectedSkills()}
          </div>
          <div id="form__selectedSkillsMsg__sub">
            {countSelectedSkills() < 4
              ? "Choose at least 4 thinking talents"
              : "Please choose 10 talents at most"}
          </div>
        </div>

        <div>
          <input type="text" />
        </div>

        <div id="form__skillBox">
          {skills.map((skill: Skill, index) => (
            <button
              className={
                skill.checked
                  ? "btn btn-primary m-1"
                  : "btn btn-outline-primary m-1"
              }
              onClick={() => toggleSelectedSkill(index)}
            >
              {skill.name}
            </button>
          ))}
        </div>

        <div>
          <button
            className="btn btn-dark m-2"
            onClick={() => clearSelectedSkills()}
          >
            Clear
          </button>
          <button className="btn btn-dark m-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
