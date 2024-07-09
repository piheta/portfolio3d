import React, { useState } from 'react'
import './dialog.css'

function Dialog({ mode }) {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < 3) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const fakeBack = () => {
    const mouseEvent = new MouseEvent('mousedown', {
      button: 3, // Specify button 3
      bubbles: true,
      cancelable: true
  });
  document.dispatchEvent(mouseEvent);
  };

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
            {page === 1 && (
              <>
                <h1><span className="errorcode">Projects -</span> Smidle</h1> 
                <br />
                <p className="output">Smidle is a captivating word-guessing game inspired by Wordle, designed for Smite enthusiasts. Players guess the names of mythological gods from Smite, testing their knowledge and passion for the game.</p>
                <p className="output">The game launched to great success, attracting <span style={{ color: 'yellow' }}>20,000 visitors</span> on its first day.</p>
                <p className="output">Built with Svelte for the frontend and Java Spring Boot for the backend, Smidle offers a smooth, responsive experience.</p>
                <p className="output">At first hosted on my home server before migrating to the cloud, it handled the traffic with no problems.</p>
                <p className="output">You can check it out <a href="https://smidle.net/" target="_blank">here</a></p>
              </>
            )}
            {page === 2 && (
              <>
                <h1><span className="errorcode">Projects -</span> Private Cloud</h1> 
                <br />
                <p className="output">In this project, I automated the setup of a private cloud using Ansible, Kubernetes and Alpine Linux. <a href="https://github.com/piheta/ansible_cloud" target="_blank">The script</a> sets up QEMU hypervisors and creates Kubernetes nodes.</p>
  <p className='output'>It also installs Prometheus Node Exporter on all machines to monitor performance. Using Alpine Linux makes the system lightweight and secure.</p>
  <p className='output'>I experimented with numerous versions of my private cloud, including Proxmox and OpenStack, but ultimately settled on this custom solution for its customizability and efficiency.</p>
</>
            )}
            {page === 3 && (
              <>
                <h1><span className="errorcode">Projects -</span> Warehouse System</h1> 
                <br />
                <p className="output">My bachelor <a href="https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3076971" target="_blank">thesis</a> project involved the development of a comprehensive system for efficient product plucking in a warehouse setting.</p>
                <p className='output'>Our application incorporated a unique concept where employees could simultaneously utilize voice and touch interfaces for seamless plucking operations.</p>
                <p className='output'>The system consisted of a <a href="https://gitlab.com/IDATA-2900-Group-1/voice-pick-frontend" target="_blank">SwiftUI</a> interface, which supports both iPhone and WatchOS, and a robust <a href="https://gitlab.com/IDATA-2900-Group-1/voice-pick-backend" target="_blank">Spring Boot API</a> for backend operations.</p>
                <p className='output'>Additionally, the app featured user authentication, speech recognition, text-to-speech, and warehouse management capabilities, making it a versatile tool for modern warehouses.</p>
                <p className='output'>Overall, our bachelor thesis project was a significant achievement, both in terms of technical implementation and fulfilling the needs of warehouse employees. You can watch our <a href="https://www.youtube.com/watch?v=ldt2QxZ4jbU" target="_blank">demo</a>. </p>
              </>
            )}
            <div className="navigation-buttons">
                {page > 1 && <p onClick={prevPage}> <a>back</a> </p>}{page < 3 && <p onClick={nextPage}> <a>Next</a> </p>}
            </div>
          </>
        )}
        <p className='back' onClick={fakeBack}><a>exit</a></p>

      </div>
    </div>
  )
}

export default Dialog
