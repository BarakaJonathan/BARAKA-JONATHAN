import React, { useState } from 'react';
import { Theme } from './types';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<Theme>('space');

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </Layout>
  );
}

export default App;