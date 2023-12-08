import React from 'react';

const Navbar = () => {
  return (
    <div style={{display:'flex',padding:'5px 10px',justifyContent:'space-between',background:"black",color:'white'}}>
        <div>
        App
        </div>
        <div style={{display:'flex',padding:'5px 10px'}}>
            <div>
                Link1 
            </div>
            <div>
                Link2
            </div>
        </div>
    </div>
  )
}

export default Navbar;