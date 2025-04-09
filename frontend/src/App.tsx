import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
  interface RegisterRoute {
    routeTree: typeof routeTree
  }
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App