
export default function Navbar() {
  return <div class="navbar bg-base-300">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Trang Chủ</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a>Dự Án</a></li>
        <li tabindex="0">
          <a>
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
      <ToggleTheme />
    </div>
  </div>
}

function ToggleTheme() {
  return <label class="swap swap-flip text-xl">
    <input id='toggle-btn' type="checkbox" />
    <div class="swap-on">😃</div>
    <div class="swap-off">😎</div>
  </label>
}
