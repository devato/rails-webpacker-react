import React from 'react';
import MainNavbar from '../MainNavbar'

const PageWrapper = (props) => (
  <div>
    <MainNavbar />
    { props.children }
  </div>
)

export default PageWrapper
