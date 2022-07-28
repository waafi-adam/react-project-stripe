import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const [collumns, setCollumns] = useState('')
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const submenuEl = useRef(null)
  useEffect(() => {
    const { center, bottom } = location
    const currSubmenu = submenuEl.current
    currSubmenu.style.left = `${center}px`
    currSubmenu.style.top = `${bottom}px`

    const newCollumns = `col-${links.length}`
    setCollumns(newCollumns)
  }, [page, links, location])
  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={submenuEl}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${collumns}`}>
          {links.map((link, idx) => {
            const { label, icon, url } = link
            return (
              <a href={url} key={idx}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
