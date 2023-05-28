import React from 'react';
import Content from './Content';
import Photoslide from './Photoslide'

function Home() {
  return (
    <div className="Home">
    {/* <Header/> */}
    {/* <Nav/> */}
    <Photoslide/>
    <Content/>
    {/* <Footer/> */}
</div>
  )
}

export default Home;
