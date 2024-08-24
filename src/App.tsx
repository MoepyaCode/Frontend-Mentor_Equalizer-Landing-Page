import React from 'react'
import { Body, Footer, Header, Main } from './components'
import { Assets } from './assets'

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const screenView = {
    mobile: width < 768,
    tablet: width >= 768 && width < 1280,
    desktop: width >= 1280
  }

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Main className='font-ibm-plex relative flex flex-col bg-[#FCFAF9] min-w-full pt-[40px] md:pt-[62px] pb-[80px] md:pb-[85px] overflow-hidden md:px-[40px] xl:px-[165px]'>

      {screenView.mobile && <img className='absolute top-[-104px] right-[-65.4px] min-w-[281.4px] min-h-[480]' src={Assets.bgMainMobile} alt="" /> }
      {screenView.tablet && <img className='object-contain absolute top-[112px] right-[39px]' src={Assets.bgMainTablet} alt="" />}
      {(screenView.tablet || screenView.desktop) && <img className='object-contain max-h-[400px] absolute top-[-32px] right-[-35.67px]' src={Assets.bgPattern1} alt="" />}

      <Header />
      <Body />
      <Footer />
    </Main>
  )
}