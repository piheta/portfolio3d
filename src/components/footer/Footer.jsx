import './footer.css'

function Footer() {

  return (
    <div className='footer'>
        <div className="flexer">
        <div className="click-me">
            <div className="wrap">
                <svg className="fa" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 4l7.07 17l2.51-7.39L21 11.07z"/></svg>
            <div className="click"></div>
            </div>
        </div>
        <h2>click to read more</h2>
        </div>


        <span className="scroll-btn">
                <span className="mouse">
                    <span></span>
                </span>
        </span>
        <h2>scroll to explore</h2>

    </div>
  )
}

export default Footer
