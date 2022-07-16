const SKILLS = {
  languages: ['Javascript', 'Typescript', 'HTML', 'CSS'],
  frameworks: ['React.js', 'Next.js', 'React Native', 'Electron.js', 'Node,js'],
  databases: ['MongoDB', 'Redis', 'Firebase Firestore'],
  tools: ['Git/Github', 'Postman'],
  integration: ['Git/Github', 'Google Cloud Platform'],
};


export default function SkillSection() {
  return (
    <div class="p-4 text-zinc-200 grid lg:grid-cols-5 grid-rows-2 gap-4">
      <h1 className="font-bold text-red-400 text-2xl col-span-2 self-end justify-self-start lg:self-start lg:col-span-1">SKILLS</h1> 
      <List name="Languages" list={SKILLS.languages} />
      <List name="Frameworks" list={SKILLS.frameworks} />
      <List name="Databases" list={SKILLS.databases} />
      <List name="Tools" list={SKILLS.tools} />
    </div>
  )
}

function List({ name, list }) {
  return <div className="justify-start row-span-2">
    <h2 className="font-medium text-xl">
      {name}
    </h2>
    <div>
      {list.map(item =>
        <p className="prose text-zinc-300" key={item}>{item}</p>
      )}
    </div>
  </div>
}
