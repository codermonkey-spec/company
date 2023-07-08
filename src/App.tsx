import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

import styles from './style.less'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

export default function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className='app-content'>{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
}
