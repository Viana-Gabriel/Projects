import React from 'react'

const Container = ({children,classname}) => {
  return (
    <div style={{maxWidth:'1200px', margin:'0 auto'}} className={classname}>
      {children}
    </div>
  )
}

export default Container