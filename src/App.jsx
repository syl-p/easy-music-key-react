import Selector from "./components/Selector.jsx";
import {createBrowserRouter, Outlet, RouterProvider, useParams, useRouteError} from 'react-router-dom';
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
  const router = createBrowserRouter([
    {
      path: "easy-music-key-react/",
      element: <>
        <aside>
          <Selector></Selector>
        </aside>
        <Outlet />
      </>,
      errorElement: <ErrorView />,
      children: [
        {
          path: '',
          element: <MainContent />,
          children: [
            { path: ':view', element: <DegreeList /> }
          ]
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
    <RouterProvider router={router} />
  )
}

export default App
