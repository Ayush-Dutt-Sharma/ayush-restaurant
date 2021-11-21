import React from 'react'

const Navbar = ({filteritem, menuList}) => {
    return (<>
        
        <nav className="navbar">
            <div className="btn-group">
            {menuList.map((props)=>{
               return( <button className="btn-group__item" onClick={()=>filteritem(props)}>{props}</button>); 
            })}
                
                
               
            </div>
        </nav>
        
        </>
    )
}

export default Navbar
