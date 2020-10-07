import React, { Component } from 'react';
import  "./Component Styles/Projects.css";
import github from '../assets/jpg/git.jpg';
import whiner from '../assets/jpg/whiner.jpg';
import chatroom from '../assets/jpg/chat.jpg';
import gitIcon from '../assets/svg/github.svg';
import foreign from '../assets/svg/foreign.svg';
const root = document.documentElement;

class Projects extends Component {
    showVideo = (ch, e) => {
        const x = e.pageY - parseInt((window.innerHeight / 2));
        root.style.setProperty('--height-control', x);
        document.getElementById('overlay').classList.add('overlay-display');
        if(ch === 'whiner'){
            document.getElementById('mainplayer').setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/whiner.webm?alt=media&token=6dcc2115-a68a-4fa3-9316-e588cd69a887');
        }
        if(ch === 'git'){
            document.getElementById('mainplayer').setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/github.webm?alt=media&token=6884dacc-c8f9-4e6d-8e3a-eb7d14726a48');
        }
        if(ch === 'chat'){
            document.getElementById('mainplayer').setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/chatroom.mp4?alt=media&token=bffb6d8b-dbdb-48bd-928b-2d36b5b2ea30');
        }
    }
    render() {
        return (
            <div className="projects-wrapper" id="projects-wrapper">
                <div className="heading-wrapper left-heading">
                    <h3 className="about-me-heading hi-message">
                        Some of my Projects
                    </h3>
                </div>
                <main className="project-container">
                    <div className="project-item">
                        <div className="heading-wrapper right-heading">
                        <h3 className="project-name hi-message"><span>#1 </span> Whiner - A social media App</h3>
                        </div>
                        <div className="project-inner-flex">
                            <div className="project-desc">
                                Whiner is a full stack social media application which allows users to create posts, follow users, receive engagement notification and many other interactive things.
                               <div className="languages">
                               <span className="language">HTML/CSS</span>
                                <span className="language">Javascript</span>
                                <span className="language">React</span>
                                <span className="language">Redux</span>
                                <span className="language">Node.js</span>
                                <span className="language">Firebase</span>
                               </div>
                               <div className="live-version">
                                    <img src={foreign} alt="live-link" width="15"/>
                                    <a href="https://whiner2-82d5e.web.app/"><span className="live-text">Live version here</span></a>
                              </div>
                              <div className="live-version">
                                    <img src={gitIcon} alt="live-link" width="15"/>
                                    <a href="https://github.com/msx47/twitter-clone-react-frontend"><span className="live-text">Also on Github</span></a>
                              </div>
                            </div>
                            <div className="project-thumbnail" onClick={(e) => this.showVideo('whiner', e)}>
                               <img src={whiner} alt="pic" width="300" height="200" />
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="heading-wrapper right-heading">
                        <h3 className="project-name hi-message"><span>#2 </span> Retro Public Chatroom</h3>
                        </div>
                        <div className="project-inner-flex">
                            <div className="project-desc">
                               A simple relatime public chatroom. Users can join different rooms and change their names on joining. This is an SPA made with only Vanilla JS w/o any frameworks.
                               <div className="languages lg-ch">
                               <span className="language">HTML/CSS</span>
                                <span className="language">Javascript</span>
                                <span className="language">Firebase</span>
                               </div>
                               <div className="live-version">
                                    <img src={foreign} alt="live-link" width="15"/>
                                    <a href="https://dummy-project-242d5.web.app/"><span className="live-text">Live version here</span></a>
                              </div>
                              <div className="live-version">
                                    <img src={gitIcon} alt="live-link" width="15"/>
                                   <a href="https://github.com/msx47/firebase-open-chatroom"> <span className="live-text">Also on Github</span></a>
                              </div>
                            </div>
                            <div className="project-thumbnail" onClick={(e) => this.showVideo('chat', e)}>
                               <img src={chatroom} alt="pic" width="300" height="200" />
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="heading-wrapper right-heading">
                        <h3 className="project-name hi-message"><span>#3 </span> Github Profile Stats</h3>
                        </div>
                        <div className="project-inner-flex">
                            <div className="project-desc">
                              A web app for retrieving relevant github stats such as stars, followers, repositories etc. and displaying them in an organized manner.
                               <div className="languages">
                               <span className="language">HTML/CSS</span>
                                <span className="language">Javascript</span>
                                <span className="language">Bootstrap</span>
                                <span className="language">GitHub API</span>
                               </div>
                               <div className="live-version">
                                    <img src={foreign} alt="live-link" width="15"/>
                                   <a href="https://msx47.github.io/Github-Profile-stats/"> <span className="live-text">Live version here</span></a>
                              </div>
                              <div className="live-version">
                                    <img src={gitIcon} alt="live-link" width="15"/>
                                    <a href="https://github.com/msx47/Github-Profile-stats"><span className="live-text">Also on Github</span></a>
                              </div>
                            </div>
                            <div className="project-thumbnail" onClick={(e) => this.showVideo('git', e)}>
                                <img src={github} width="300" height="200" alt="pic" ></img>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="heading-wrapper right-heading">
                        <h3 className="project-name hi-message"><span>#4 </span> More Projects</h3>
                        </div>
                        <div className="project-inner-flex">
                            <div className="project-desc panel-class">
                              <div className="panels">
                                  <div className="front div">
                                       <span>
                                       CSS Netflix Clone
                                       </span>
                                       <p>A Netflix landing page clone in CSS and HTML.</p>
                                  </div>
                                  <div className="back div">
                                    <div className="live-version cards">
                                        <img src={foreign} alt="live-link" width="15"/>
                                       <a href="https://msx47.github.io/netflix_landing_page_css3/">
                                       <span className="live-text ll">Live version here</span>
                                       </a>
                                    </div>
                                    <div className="live-version cards">
                                        <img src={gitIcon} alt="live-link" width="15"/>
                                       <a href="https://github.com/msx47/netflix_landing_page_css3">
                                       <span className="live-text ll">Also on Github</span>
                                       </a>
                                     </div>
                                  </div>
                              </div>
                            </div>
                            <div className="project-desc panel-class">
                              <div className="panels">
                                  <div className="front div">
                                       <span>
                                       Twitter @ mentions
                                       </span>
                                       <p>A javascript app to check @ mentions with run time parsing.</p>
                                  </div>
                                  <div className="back div">
                                    <div className="live-version cards">
                                        <img src={gitIcon} alt="live-link" width="15"/>
                                       <a href="https://github.com/msx47/twitter-user-mentions/">
                                       <span className="live-text ll">Also on Github</span>
                                       </a>
                                     </div>
                                  </div>
                              </div>
                            </div>
                            <div className="project-desc panel-class">
                              <div className="panels">
                                  <div className="front div">
                                       <span>
                                       Puzzle Solver
                                       </span>
                                       <p>A problem solver I made for a discord challenge.</p>
                                  </div>
                                  <div className="back div">
                                    <div className="live-version cards">
                                        <img src={foreign} alt="live-link" width="15"/>
                                        <a href="https://msx47.github.io/die-hard-3-jug-problem-solver/">
                                        <span className="live-text ll">Live version here</span>
                                        </a>
                                    </div>
                                    <div className="live-version cards">
                                        <img src={gitIcon} alt="live-link" width="15"/>
                                       <a href="https://github.com/msx47/die-hard-3-jug-problem-solver">
                                       <span className="live-text ll">Also on Github</span>
                                       </a>
                                     </div>
                                  </div>
                              </div>
                            </div>
                            <div className="project-desc panel-class">
                              <div className="panels">
                                  <div className="front div">
                                       <span>
                                       WeatherOrNot
                                       </span>
                                       <p>Simple weather App to demonstrate the use of AccuWeather API</p>
                                  </div>
                                  <div className="back div">
                                    <div className="live-version cards">
                                        <img src={foreign} alt="live-link" width="15"/>
                                       <a href="https://msx47.github.io/WeatherOrNot/">
                                       <span className="live-text ll">Live version here</span>
                                       </a>
                                    </div>
                                    <div className="live-version cards">
                                        <img src={gitIcon} alt="live-link" width="15"/>
                                       <a href="https://github.com/msx47/WeatherOrNot">
                                       <span className="live-text ll">Also on Github</span>
                                       </a>
                                     </div>
                                  </div>
                              </div>
                            </div>
                            <div className="project-desc panel-class">
                              <div className="panels">
                                  <div className="front div">
                                       <span>
                                        C++ Games with DirectX
                                       </span>
                                       <p>C++ was my first programming language and in my spare time I like to learn/make simple games with minimal physics. This repo is an archive for the same</p>
                                  </div>
                                  <div className="back div">
                                    <div className="live-version cards">
                                        <img src={gitIcon} alt="live-link" width="15"/>
                                       <a href="https://github.com/msx47/chilli-framework-games">
                                       <span className="live-text ll">Also on Github</span>
                                       </a>
                                     </div>
                                  </div>
                              </div>
                            </div>
                            <div className="project-desc panel-class">
                              <div className="panels">
                                  <div className="front div">
                                       <span>
                                        Secure Authentication with XOR encryption
                                       </span>
                                       <p>A C++ console application for creating user accounts and storing the password and other relevant data by encrypting with XOR</p>
                                  </div>
                                  <div className="back div">
                                    <div className="live-version cards">
                                        <img src={gitIcon} alt="live-link" width="15"/>
                                       <a href="https://github.com/msx47/c_plus_plus_simple_login_system">
                                       <span className="live-text ll">Also on Github</span>
                                       </a>
                                     </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Projects
