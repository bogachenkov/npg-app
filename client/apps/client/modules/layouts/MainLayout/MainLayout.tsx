import { AppShell, Header } from '@mantine/core';
import NavbarMain from '@modules/common/NavbarMain';
import ThemeToggler from '@modules/common/ThemeToggler';
import React, { PropsWithChildren } from 'react';

const HEADER_HEIGHT = 70;

const MainLayout:React.FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return (
    <AppShell
      header={
        <Header height={HEADER_HEIGHT} p="xs">
          <NavbarMain />
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`
        }
      })}
    >
      {children}
      <ThemeToggler />
    </AppShell>
  )
};

export default MainLayout;