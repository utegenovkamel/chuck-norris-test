import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import Layout from 'widgets/Layout'
import { Loader } from 'shared/UI'

const JokesPage = lazy(() => import('./Jokes'))
const LikedJokesPage = lazy(() => import('./LikedJokes'))

const Routing = () => {
  const routes = useRoutes([
    { index: true, element: <JokesPage /> },
    { path: '/liked', element: <LikedJokesPage /> },
  ])

  return (
    <Suspense fallback={<Loader center />}>
      <Layout>{routes}</Layout>
    </Suspense>
  )
}

export default Routing
