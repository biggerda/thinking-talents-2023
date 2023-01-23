import React, { Component } from "react";
import { Skill } from "../entities/Skill";
import { skillsData } from "../entities/skillsData";

class Form extends Component {
  state = {
    skills: skillsData,
  };

  toggleSelectedSkill = (selectedIndex: number) => {
    const newSkillsState = this.state.skills.map((skill, currentIndex) => {
      if (currentIndex === selectedIndex) skill.checked = !skill.checked;
      return skill;
    });

    this.setState({ skills: newSkillsState }, () => {
      console.log("Skill selected: {}");
    });
  };

  render() {
    return (
      <div>
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
