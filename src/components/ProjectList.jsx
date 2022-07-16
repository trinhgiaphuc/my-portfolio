import ProjectArtBoard from './ProjectArtBoard';
import { PROJECTS } from './ProjectSection';

export default function ProjectList() {
  return <div class="grid lg:grid-cols-11 grid-cols-1 gap-6 py-28 w-full h-1/4 border-opacity-50">
    <div />
    <ProjectArtBoard {...PROJECTS[0]} image="../tienglong-web.jpg" />
    <div />
    <ProjectArtBoard  {...PROJECTS[1]} image="../tienglong-desktop.jpg"/>
    <div />
    <div />
    <ProjectArtBoard {...PROJECTS[2]} image="../tienglong-mobile.jpg" />
    <div />
    <ProjectArtBoard {...PROJECTS[3]} image="../tienglong-web.jpg" />
    <div />
  </div>
}
