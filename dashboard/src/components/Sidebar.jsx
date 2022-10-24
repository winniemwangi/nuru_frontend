import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import image from "../image/nuru.png";
import { BiSearch } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import prof from "../image/profile.jpeg";
import { VscBell } from "react-icons/vsc";
import Sms from "./sms/Sms";
import Profile from "./profile/Profile";
// import {Link, useNavigate} from 'react-router-dom'


export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    const [navbarState, setNavbarState] = useState(false);
    const html = document.querySelector("html");
    // const navigate = useNavigate()  
    // const movetoProfile = () =>navigate('/profile')
    



    return (
        <>
            <Nav>
                <div className="title">
                    <h1>
                        <span></span>
                    </h1>

                    <div className="search">
                        <BiSearch />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="notification">
                    <VscBell />
                </div>
                <div className="icon">
                    <IoSettings />
                </div>
                <div className="image">
               
                  <img src={prof} alt="" />
                  
                   
                </div>
            </Nav>

            <Section>
                <div className="top">
                    <div className="brand">

                        <div className="nuruimage">
                            <img src={image} alt="" />
                        </div>
                        <span>NuruCare</span>
                    </div>
                    <div className="toggle">
                        {navbarState ? (
                            <VscChromeClose onClick={() => setNavbarState(false)} />
                        ) : (
                            <GiHamburgerMenu
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setNavbarState(true);
                                }}
                            />
                        )}
                    </div>
                    <div className="links">
                        <ul>
                            <li
                                className={currentLink === 1 ? "active" : "none"}
                                onClick={() => setCurrentLink(1)}
                            >
                                <a href="#">
                                    <MdSpaceDashboard />
                                    <span> Dashboard</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 2 ? "active" : "none"}
                                onClick={() => setCurrentLink(2)}
                            >
                                <a href="/sms">
                                    <RiDashboard2Fill />
                                    <span> SMS</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 3 ? "active" : "none"}
                                onClick={() => setCurrentLink(3)}
                            >
                                <a href="#">
                                    <FaAddressCard />
                                    <span> Users</span>
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
                <div className="logout">
                    <a href="#">
                        <FiLogOut />
                        <span className="logout">Logout</span>
                    </a>
                </div>
            </Section>
            <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
                <div className="responsive__links">
                    <ul>
                        <li
                            className={currentLink === 1 ? "active" : "none"}
                            onClick={() => setCurrentLink(1)}
                        >
                            <a href="#">
                                <MdSpaceDashboard />
                                <span> Dashboard</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 2 ? "active" : "none"}
                            onClick={() => setCurrentLink(2)}
                        >
                            <a href="/sms">
                                <RiDashboard2Fill />
                                <span> SMS</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 3 ? "active" : "none"}
                            onClick={() => setCurrentLink(3)}
                        >
                            <a href="#">
                                <FaAddressCard />
                                <span> Users</span>
                            </a>
                        </li>



                    </ul>
                </div>
            </ResponsiveNav>
            {/* <Sms/> */}
           
        </>

    );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #05277C;
  margine-bottom:50%;
  height: 100vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      height:80px;
      margin-top:-98px;
      background:white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 10px;
      }
      span {
        font-size: 20px;
        color: black;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: white;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: white;
          a {
            color: black;
          }
        }
      }
    }
  }
  .nuruimage img
  {
    width: 125%;
    height: 15vh;
  }

  .logout {
    margin-top:101px;
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    a {
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      color: white;
      margine-top:120px;
      span{
        margine-top:150px;
        color:white;
      }
    }  
  }
  .image {
    height:5px;
    width:5px;
    margine-right:20px;
        img {
          height: 5px
          width: 10px;
        }
       
      }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  margine-left:90%;
  .title {
    display: flex;
    h1 {
      span{
        margin-left: 40rem;
      }

    }
  }
  .search {
    margin-top:2%
    align-items: center;
    padding: 35px;
    margin-right: 180px;
    border-radius: 2px;
    input {
      background:lightgrey;
      border: none;
      height:30px;
      width:200%;
      // padding:0px;
      // margin-left:10px;
      // letter-spacing: 0.3rem;
      // &::placeholder {
      //   margine-left:100%;
      //   // color: black;
      // }
    }
  }
    input {
      background:lightgrey;
      border: none;
      margin-left:10px;
      letter-spacing: 0.3rem;
      &::placeholder {
        margine-lef:100%;
        color: black;
      }
    }
  }
  .image {
        max-height: 10rem;
        border-radius: 20rem;
        margine-right:30px;
        width:100px;
        margin-top:2.5%;

        img {
          height: 2.3rem;
          width: 2.3rem;
          object-fit: cover;
          border-radius: 20rem;
        }
       
      }
  .icon{
    color:black;
    margin-top:3%;
    svg {
      color: grey;
      width:25px;
      height:25px;
    }
  }
  .notification{
    color:black;
    margin-top:3%;
    svg {
      color: grey;
      width:25px;
      height:25px;
    }
  }

  }
  )
  `;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  
`;