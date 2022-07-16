const ProjectArtBoard = ({ name, description, tools, site, sourceCode, image }) => {
  return (
    <div class="col-span-4 self-start justify-self-start flex flex-col items-center justify-center">
      <div class="w-full aspect-video mockup-window border border-zinc-700 rounded-b-none">
        <div class="relative overflow-hidden h-full w-full">
          <div class="opacity-0 hover:opacity-100 bg-zinc-900 bg-opacity-50 absolute top-0 left-0 w-full z-10 h-full flex gap-16 items-center justify-center peer">
            {site.length > 0 ? <a class="btn btn-primary" href={site} target="_blank">
              Visit Site
            </a> : null}
            <a class="btn btn-primary" href={sourceCode} target="_blank">
              Source Code
            </a>
          </div>
          <img src={image} alt="tienglong website screen capture" class="peer-hover:blur" />
        </div>
      </div>

      <div class="collapse w-full rounded-2xl rounded-t-none border border-zinc-700 shadow-xl collapse-arrow">
        <input type="checkbox" checked={true} />
        <div class="collapse-title text-xl font-medium border-b border-zinc-700">
          Project Details
        </div>
        <div class="collapse-content w-full ">


          <div class="flex flex-col w-full 2xl:flex-row items-center justify-center p-2 gap-6 2xl:gap-10 mx-auto">
            <div class="flex flex-col items-center 2xl:w-1/4 justify-center prose">
              <h2 class="text-center">
                {name}
              </h2>
              <h4 class="text-center">
                {tools.map(t => <span className="mx-1" key={t}>{t}</span>)}
              </h4>
            </div>

            <div class="text-base 2xl:w-1/2 prose px-2 2xl:py-6">
              <p class="text-center prose ">{description}</p>
            </div>

            <div class="flex 2xl:flex-col items-center justify-center gap-4">
              {site.length > 0 ? <a class="btn btn-primary" href={site} target="_blank">
                Visit Site
              </a> : null}
              <a class="btn btn-primary" href={sourceCode} target="_blank">
                Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectArtBoard
