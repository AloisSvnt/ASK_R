import ThemeController from '../ThemeController/ThemeController';

function HeaderLayout({theme, setTheme}:any) {
  return (
    <header>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
          <ThemeController theme={theme} setTheme={setTheme}/>
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;