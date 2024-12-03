import { useState, useEffect } from 'react';

import HeaderLayout from '../HeaderLayout/HeaderLayout';
import BackgroundLayout from '../BackgroundLayout/BackgroundLayout';

function DefaultLayout(children:any) {

  const [theme, setTheme] = useState('emerald');


  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
  }, [theme]);

  return (
    <div>
      <BackgroundLayout theme={theme}/>
      <HeaderLayout theme={theme} setTheme={setTheme}/>
      <main className='flex h-[300vw]'>
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;