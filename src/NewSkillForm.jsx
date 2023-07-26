import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm( {addSkill} ) {

    const [formData, setFormData] = useState({
        name:"",
        level: 3 
});

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(formData);
        setFormData({
            name: "",
            level: 3
        });
    }
    

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value};
        setFormData(newFormData);
    }

    return (
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            <label>
                Skill &nbsp; <input value={formData.name} onChange={handleChange} name="name" />
            </label><br />
            <label>
                Level &nbsp; <select value={formData.level} onChange={handleChange} name="level">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}

