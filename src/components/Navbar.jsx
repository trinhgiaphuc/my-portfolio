export default function Navbar() {
  return <div class="navbar fixed z-50 bg-base-200">
    <div class="navbar-start lg:hidden">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li class="border border-primary">
            <a href="/my-portfolio" class="uppercase text-xl">trinhgiaphuc</a>
          </li>
          {/* <li class="border border-primary" tabindex="0"> */}
          {/*   <a class="justify-between text-xl"> */}
          {/*     Language */}
          {/*     <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
          {/*   </a> */}
          {/*   <ul class="p-2 bg-base-100"> */}
          {/*     <li><a>Tiếng Việt</a></li> */}
          {/*     <li><a>English</a></li> */}
          {/*   </ul> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex flex-grow justify-between">
      <a class="uppercase font-medium justify-self-start hover:link-primary" href="/my-portfolio">trinhgiaphuc</a>
      <ul class="menu menu-horizontal p-0">
        <li><a href="/my-portfolio/blog" class="link hover:link-primary uppercase font-medium">Blogs</a></li>
        <li><a href="/my-portfolio/projects" class="link hover:link-primary uppercase font-medium">Projects</a></li>
      </ul>
    </div>
    <div class="flex-grow flex gap-4 item-center justify-center">
      <a href="/my-portfolio/blog" class="btn uppercase font-medium lg:hidden">Blogs</a>
      <a href="/my-portfolio/projects" class="btn uppercase font-medium lg:hidden">Projects</a>
    </div>
    <div class="ml-1">
      <ToggleTheme />
      {/* <LanguageSeletor /> */}
    </div>
  </div>
  return
}




function ToggleTheme() {
  return <label class="swap swap-indeterminate ml-auto text-xl p-2 hover:bg-zinc-400 rounded-full">
    <input id='toggle-btn' type="checkbox" />
    <div class="swap-on">😃</div>
    <div class="swap-off">😎</div>
  </label>
}

function LanguageSeletor() {
  return <div class="lg:dropdown hidden">
    <label tabindex="0" class="btn m-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" aria-hidden="true" viewBox="0 0 88.6 77.3"><path fill="currentColor" d="M61 25h8l19 51h-8l-5-15H54l-5 15h-8l20-51zm12 30-8-23-9 23h17z" /><path fill="currentColor" d="M54 61c-10-4-16-9-22-14 0 0 1 1 0 0L12 60l-4-6 19-13c-2-2-12-13-13-19h8c4 9 10 14 10 14 10-8 10-19 10-19h8s-1 13-12 24c5 5 10 9 19 13l-3 7zM2 17h56V9H35V2h-9v7H2v8z" /></svg>
      <span class="ml-2">
        Language
      </span>
    </label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li class="uppercase font-medium">Tiếng Việt</li>
      <li class="uppercase font-medium">English</li>
    </ul>
  </div>
}
