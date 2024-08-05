import React from 'react'
import {Dropdown} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {FaUser,FaCartPlus} from 'react-icons/fa'
import { CgMenuGridO } from "react-icons/cg"
// import {MdShoppingCart} from 'react-icons/md'

function Header() {
  return (
    <>
       <header className='header-top-strip py-3'>
         <div className='container-xxl'>
            <div className='row'>
               <div className='col-9'>
                <p className='text-white mb-0'>free shopping over $100 && free returns</p>
               </div>
                <div className='col-3'> 
                <p className='text-center text-white mb-0'>Hotline : <a  className='text-white'  href='tel : +216 55 640 320'>+216 55 640 320</a></p>  
                </div>
            </div>
         </div>
       </header>

       <header className='header-upper py-3'>
         <div className='container-xxl'>
           <div className='row align-items-center'>
             <div className='col-2'>
              <h2>
                <Link className='text-white'>Dev Corner</Link>
              </h2>
             </div>
              <div className='col-5'>
              <div className="input-group">
                  <input 
                   type="text" 
                   className="form-control py-2" 
                   placeholder="Search Product..." 
                   aria-label="Search Product..." 
                   aria-describedby="basic-addon2"/>
                  
                       <span className="input-group-text " id="basic-addon2">
                        <BsSearch/>
                       </span>
                   
              </div>
              </div>
              <div className='col-5'>
                  <div className='header-upper-links d-flex align-items-center justify-content-between'>
                  <div>
                      <Link className='d-flex align-items-center gap-10 text-white '>
                          <FaCartPlus style={{fontSize:'40px' , color:'white'}}/>
                          <div className='d-flex flex-column'>
                              <span className='badge bg-white text-dark'>0</span>
                              <p className='mb-0'>$500</p>
                          </div>
                      </Link>
                  </div>
                      <div>
                        <Link className='d-flex align-items-center gap-10 text-white'>
                            <FaUser style={{fontSize:'40px' , color:'white'}}/>
                            <p className='text-white mb-0'>Login<br/>My Account</p>
                        </Link>
                      </div>
                      
                      

                  </div>
              </div>

           </div>
         </div>
       </header>

        <header className='header-bottom py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                      <div className='menu-bottom d-flex align-items-center gap-30'>
                    <div>
                      <Dropdown>
                          <Dropdown.Toggle type='button' className='header-botom dropdown bg-transparent border-5 gap-15 d-flex align-items-center' variant="secondary" id="dropdown-basic" >
                              <CgMenuGridO /><span className='me-5 d-inline-block'>Shop Categories</span>
                          </Dropdown.Toggle>

                          <Dropdown.Menu className='dropdown-menu'>
                             <Dropdown.Item className='text-white dropdown-item' href="#/action-1">Action</Dropdown.Item>
                             <Dropdown.Item className='text-white dropdown-item' href="#/action-2">Another action</Dropdown.Item>
                             <Dropdown.Item className='text-white dropdown-item' href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </div>
                        <div className='menu-links'>
                          <div className='d-flex align-items-center gap-15'>
                               <NavLink className="text-white" to="/">Home</NavLink>
                               <NavLink className="text-white" to="/store">Our Store</NavLink>
                               <NavLink className="text-white" to="/blogs">Blogs</NavLink>
                               <NavLink className="text-white" to="/contact">Contact</NavLink>
                                
                          </div>
                        </div>

                      </div>
                    </div>
                </div>
            </div>
        </header>

    </>
  )
}

export default Header