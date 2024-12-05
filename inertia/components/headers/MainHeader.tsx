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
        <div className="flex-none">
        { user && <p>Welcome {user.firstName} {user.lastName}</p> }
          <ul className="menu menu-horizontal px-1">
            <li>
              { user ?
                <Link className='btn btn-ghost' href="/logout">Logout</Link> :
                <Link className='btn btn-ghost' href="/login">Login</Link>
              }
            </li>
            <li></li>
          </ul>
          <ThemeController theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;