import style from './index.module.css'
import { Link } from 'react-router-dom'
const NAVBAR = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="LOGO" />
      </div>
      <div className={style.links}>
        <Link className={style.link} to='/'>HOME</Link>
        <Link className={style.link} to='/add-product'>ADD PRODUCT</Link>
        <Link className={style.link}>ABOUT</Link>
        <Link className={style.link}>SERVICES</Link>
        <Link className={style.link}>PORTFOLIO</Link>
        <Link className={style.link}>TEAM</Link>
        <Link className={style.link}>SKILL</Link>
        <Link className={style.link}> CLIENTS</Link>
        <Link className={style.link}>PRICING</Link>
        <Link className={style.link}>BLOG</Link>
        <Link className={style.link}>CONTACT</Link>

      </div>
    </div>
  )
}

export default NAVBAR
