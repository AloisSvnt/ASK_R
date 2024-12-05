import { Link, usePage } from '@inertiajs/react';
import ThemeController from '../themeController/ThemeController';
import type { User } from '#types/User';

interface HeaderLayoutProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function HeaderLayout({ theme, setTheme }: HeaderLayoutProps) {
  const { user } = usePage<{ user: User }>().props;

  return (
    <header>
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">Adonis JS</Link>
        </div>
        <div className="flex-none gap-2">
        { user && <p>Welcome {user.firstName} {user.lastName}</p> }
          <ul className="menu menu-horizontal px-1 gap-2">
              { user ?
              (
                <li>
                  <Link className='btn btn-ghost' href="/logout">Logout</Link>  
                </li>
              ) :
                (<>
                  <li>
                    <Link className='btn btn-ghost' href="/login">Login</Link>
                  </li>
                  <li>
                    <Link className='btn btn-ghost' href='/register'>Register</Link>
                  </li>
                </>)
              }
          </ul>
          <ThemeController theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;