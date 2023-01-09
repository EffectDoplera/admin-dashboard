import '@/app/globals.css';

import { FC, PropsWithChildren } from 'react';
import FlowbiteContext from './context/FlowbiteContext';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
