import React, { Component } from "react";
import { Skill } from "../entities/Skill";
import { skillsData } from "../entities/skillsData";
import "./Form.css";

class Form extends Component {
  state = {
    skills: skillsData,
  };

  countSelectedSkills = () => {
    return this.state.skills.filter((skill) => skill.checked).length;
  };

  toggleSelectedSkill = (selectedIndex: number) => {
    if (this.countSelectedSkills() === 10) return;

    const newSkillsState = this.state.skills.map((skill, currentIndex) => {
      if (currentIndex === selectedIndex) skill.checked = !skill.checked;
      return skill;
    });

    this.setState({ skills: newSkillsState });
  };

  render() {
    return (
      <div id="form">
        <div id="form__selectedSkillsMsg">
          <div id="form__selectedSkillsMsg__main">
            You have selected {this.countSelectedSkills()} skills.
          </div>
          <div id="form__selectedSkillsMsg__sub">
            {this.countSelectedSkills() < 4
              ? "Choose at least 4 thinking talents"
              : "Please choose 10 talents at most"}
          </div>
        </div>

        {this.state.skills.map((skill: Skill, index) => (
          <button
            className={
              skill.checked
                ? "btn btn-primary m-2"
                : "btn btn-outline-primary m-2"
            }
            onClick={() => this.toggleSelectedSkill(index)}
          >
            {skill.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Form;
