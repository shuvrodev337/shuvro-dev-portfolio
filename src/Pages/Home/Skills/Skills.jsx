import SectionTitle from "../../../components/SectionTitle";
import { technologies } from "../../../constants";
import SkillCard from "./SkillCard";
const Skills = () => {
    return (
        <div className="w-9/12 mx-auto" id="skills">
            <SectionTitle sectionHeader={'My skills'}></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    technologies.map((technology,i)=><SkillCard key={i} technology={technology}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;