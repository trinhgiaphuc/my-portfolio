export const PROJECTS = [
  { name: 'TiengLong Web Application', description: 'Website of TiengLong project', tools: ['React.js', 'Next.js,', 'TailwindCSS', 'Vercel'], site: 'https://tienglong.vercel.app', sourceCode: 'https://github.com/trinhgiaphuc/tienglong' },
  { name: 'TiengLong Native Application', description: 'Native application of TiengLong project for desktop', tools: ['React.js', 'Electron.js', 'TailwindCSS', 'Node.js', 'Typescript'], site: '', sourceCode: 'https://github.com/trinhgiaphuc/tienglong-desktop' },
  { name: 'TiengLong Mobile Application', description: 'Cross-platform mobile application of TiengLong project for all operation system', tools: ['React Native', 'Expo', 'Redux toolkit', 'Typescript'], site: '', sourceCode: 'https://github.com/trinhgiaphuc/tienglong-mobile' },
  { name: 'TiengLong Server', description: 'Server for all Front-End applications of TiengLong project', tools: ['Next.js', 'REST API', 'Firebase/Firebase Admin', 'Redis-om'], site: '', sourceCode: 'https://github.com/trinhgiaphuc/tienglong' },
];

export default function ProjectSection() {
  return (
    <div class="p-4 text-zinc-200 grid lg:grid-cols-5 grid-rows-8 gap-2">
      <h1 className="font-bold text-red-400 text-2xl self-end justify-self-start lg:self-start lg:col-span-full">PROJECTS</h1>
      <div className="font-semibold lg:col-span-full lg:self-start self-center justify-self-center pb-5">
        <h1 className="text-yellow-400 text-center text-xl uppercase tracking-wider">
          TiengLong
        </h1>
        <p className="font-normal prose text-white text-center">
          Multi-platform application to store new words and slangs, share and vote for definitions
        </p>
      </div>
      {PROJECTS.map(p => <List key={p.name} {...p} />)}
    </div>
  )
}

function List({ name, description, tools, site, sourceCode }) {
  return <div className="justify-start row-span-4 lg:col-span-full pb-5">
    <div className="flex items-center justify-between">
      <h2 className="font-medium text-md text-green-400 uppercase leading-relaxed tracking-wide">
        {name}
      </h2>
      <div className="flex items-center justify-center gap-4">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <a href={sourceCode} target="_blank">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" class="fill-current"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
        </a>
      </div>
    </div>
    <p className="my-1">
      {description}
    </p>
    <div className="flex items-center gap-2 flex-wrap">
      {tools.map(item =>
        <p className="text-base text-primary-focus rounded-md bg-base-300 p-2" key={item}>{item}</p>
      )}
    </div>
  </div>
}
