//bekommt die Punkte Anzahl und liefert die Komponente zurück

import Circle from "./Circle";

// params: {
//   skill: string;
//   circles: string;
// }

export default function SkillCircles({ params }: { params: { skill: string; circles: number } }) {

  let content = []
  for(let i = 0; i < 10; i++) {
    if(i < params.circles) {
      content.push(<Circle key={params.skill} isBlack={true}></Circle>)
    } else {
      content.push(<Circle key={params.skill} isBlack={false}></Circle>)
    }
  }

  return(
    <li key={params.skill} className="flex items-center">
      <p className="text-xl w-48">{params.skill}</p>
      <div className="flex gap-1">
        {content}
      </div>
    </li>
  )
}
