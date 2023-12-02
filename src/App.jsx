import { useState } from 'react'
import Scale from "./utils/scale.class.js";
import Degree from "./components/Degree.jsx";
import Selector from "./components/Selector.jsx";
import TonePlayer from "./utils/tone-player.class.js";
import { createBrowserRouter, Outlet, Router, RouterProvider, useRouteError } from 'react-router-dom';
import MainContent from './components/MainContent.jsx';
import DegreeList from './components/DegreeList.jsx';

function ErrorView() {
  const error = useRouteError()
  return <>
    <h2 className='error'>
      <strong>Erreur:</strong> {error?.message}
    </h2>
  </>
}

function App() {
  const [key, setKey] = useState({
    fonda: 'C',
    type: 'major',
    view: 'degree',
    scale: new Scale('C'),
  })

  const router = createBrowserRouter([
    {
      path: "easy-music-key-react/",
      element: <>
        <aside>
          <Selector></Selector>
        </aside>
        <section>
          <article>
            <Outlet />
          </article>
        </section>
      </>,
      errorElement: <ErrorView />,
      children: [
        {
          path: '',
          element: <MainContent />
        },
        {
          path: ':key',
          element: <MainContent />,
          children: [
            { path: '', element: <DegreeList /> },
            { path: ':view', element: <DegreeList /> }
          ]
        },
      ]
    }

  ])

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
