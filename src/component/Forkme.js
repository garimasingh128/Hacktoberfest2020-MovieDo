import React from 'react'

const Forkme = () => {
  return (
    <div style={{position: "absolute", zIndex: 100, right: 0}}>
      <a 
        href="https://github.com/garimasingh128/Hacktoberfest2020-MovieDo"
      >
        <img 
          loading="lazy" 
          width="149" 
          height="149" 
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" 
          alt="Fork me on GitHub" 
          data-recalc-dims="1" 
          />
      </a>
    </div>
  )
}

export default Forkme;
