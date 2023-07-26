import SkillListItem from "./SkillListItem";

export default function SkillList({skills}) {
    const skillListItems = skills.map((s, idx) => <SkillListItem skill={s} key={idx} />);
    return (
    <ul>
        {skillListItems}
    
    </ul>
    )
}