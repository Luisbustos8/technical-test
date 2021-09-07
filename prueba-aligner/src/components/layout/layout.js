import React from 'react';

import Header from './header';
import './layout.css';

function Layout({className, children, title, ...props}) {
  return (
    <div >
      <Header className="layout-header bordered" {...props} />
      <main className="layout-main bordered">
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered"> Secret Aligner 2021 © Todos los derechos reservados </footer>
    </div>
  );
}

export default Layout;