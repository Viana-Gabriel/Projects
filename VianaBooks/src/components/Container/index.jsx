/* eslint-disable react/prop-types */
import style from './Container.module.css'
export default function Container({children}) {
  return (
    <main className={style.Container}>
      {children}
    </main>
  )
}
