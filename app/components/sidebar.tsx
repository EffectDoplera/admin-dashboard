import clsx from 'clsx';
import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import type { FC, PropsWithChildren } from 'react';
import { useSidebarContext } from '../context/SidebarContext';

const Sidebar: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  const { isOpen } = useSidebarContext();

  return (
    <div
      className={clsx('fixed overflow-auto top-0 h-screen z-10 sticky', {
        hidden: !isOpen,
      })}
    >
      <FlowbiteSidebar>{children}</FlowbiteSidebar>
    </div>
  );
};

export default Object.assign(Sidebar, { ...FlowbiteSidebar });
