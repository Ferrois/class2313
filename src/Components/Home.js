import React from 'react'
import { Container } from 'react-bootstrap'
import GlobalLogs from './GlobalLogs'

export default function Home() {
  return (
      <>
    <GlobalLogs/>
    <Container className='mt-4'>brought to you by Further Math Gang</Container>
    </>
  )
}
