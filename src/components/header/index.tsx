import { Assets } from '../../assets'

export default function Header() {
  return (
    <header className='z-10 px-[24px] mb-[64px] md:mb-[95px] xl:mb-[127px] md:px-0 '>
      <img src={Assets.logo} alt="" />
    </header>
  )
}
