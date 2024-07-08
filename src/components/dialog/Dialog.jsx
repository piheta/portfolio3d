import React from 'react'
import './dialog.css'

function Dialog({ mode }) {
  return (
    <div className='dialog'>
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">

        { mode === 1 && (
          <>
            <h1><span className="errorcode">About me -</span> Programming</h1> 
            <br />
            <p className="output">I've been programming for nearly a decade now, started out with making static websites and game plugins, gradually shifted into more advanced things.</p>
            <p className="output">I enjoy making all kinds of systems, mainly working on the backend and <span style={{ color: 'yellow' }}>devops</span> side. My favourite stack is Golang and Svelte, although I'm mostly working with React, Java, and Python.</p>
            <p className="output">The frontend side is not too bad; it's fun to learn the different approaches of all the frameworks. (•‿•)</p>
            <p className="output">I also really like automation and infrastructure as code. Besides the occasional shell scripts, it's mostly just YAML files, but seeing an entire cluster of systems come to life with one command is pretty cool.</p>
            <p className="output"> </p>
            <p className="output"> </p>
            <p className="output"> </p>
            <p className="output">Check out my <a href="https://github.com/piheta" target="_blank">GitHub</a> and <a href="https://linkedin.com/in/mateusz-picheta" target="_blank">LinkedIn</a>.</p>
            <p className="output">Enjoy this website while you're here. ʕ•ᴥ•ʔ</p>
          </>
        )}

        { mode === 2 && (
          <>
            <h1><span className="errorcode">About me -</span> Cloud & IT Operations</h1> 
            <br />
            <p className="output">I started with IT Operations in 2016, Everything was on-prem so naturally I learned a lot about infrastructure, networking, hypervisors, <span style={{ color: 'yellow' }}>linux</span> and freebsd. \(^•◡•^)/</p>
            <p className="output">As I progressed in my career and changed jobs, I moved from on-prem environments to hybrid cloud setups, to fully working with cloud-native technologies and public clouds. </p>
            <p className="output">Currently i'm a cloud native devops and rarely touch physical infrastructure, my work is done mostly in azure and my private cloud where i use technologies such as kubernetes, ansible and terraform.</p>
            <p className="output">I'm glad most of the skills I learned in IT Operations transferred to my current position. Although sometimes I miss working with physical infrastructure and Linux. One of the reasons I take <span style={{ color: 'yellow' }}>certifications</span> is to not forget.</p>
            <p className="output">You can see my certs on my <a href="https://linkedin.com/in/mateusz-picheta" target="_blank">LinkedIn</a>.</p>
          </>
        )}

        { mode === 3 && (
          <>
            <h1><span className="errorcode">Projects -</span> Smidle</h1> 
            <br />
            <p className="output">Project Description: Smidle - A Mythological Gods Guessing Game</p>
            <p className="output">Smidle is a captivating word-guessing game inspired by Wordle, designed for Smite enthusiasts. Players guess the names of mythological gods from Smite, testing their knowledge and passion for the game.</p>
            <p className="output">The game launched to great success, attracting <span style={{ color: 'yellow' }}>20,000 visitors</span> on its first day.</p>
            <p className="output">Built with Svelte for the frontend and Java Spring Boot for the backend, Smidle offers a smooth, responsive experience. At first hosted on my home server before migrating to the cloud, it handled the traffic with no problems. </p>
            <p className="output">You can check it out <a href="https://smidle.net/" target="_blank">here</a></p>
          </>
        )}
        <p className='back'><a href="">back</a></p>
      </div>
    </div>
  )
}

export default Dialog
