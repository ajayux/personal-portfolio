import SkillCircles from "../components/reusables/SkillCircles"

export default function skillsPage() {
  return (
    <>
      <h2 className="text-3xl font-bold my-16">programming languages</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "Java",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "C#",
            circles: 7,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "JavaScript",
            circles: 8,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "TypeScript",
            circles: 8,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Kotlin",
            circles: 4,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Swift",
            circles: 3,
          }}
        ></SkillCircles>
      </ul>
      <h2 className="text-3xl font-bold my-16">Frameworks</h2>
      <ul className="flex flex-col gap-6">
        <SkillCircles
          params={{
            skill: "React",
            circles: 8,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "NextJs",
            circles: 7,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Dotnet Blazor",
            circles: 6,
          }}
        ></SkillCircles>
        <SkillCircles
          params={{
            skill: "Angular",
            circles: 4,
          }}
        ></SkillCircles>
      </ul>
    </>
  )
}
