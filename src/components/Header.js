import React from 'react'

export const Header = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (window.scrollY > 70) {
          console.log(window.scrollY)
        document.getElementById("navbar").style.padding = "10px 5px";
        document.getElementById("navbar").style.boxShadow = "-5px 2px 12px black";
      } else if (window.scrollY == 0) {
          console.log("else", window.scrollY)
        document.getElementById("navbar").style.padding = "40px 10px";
        document.getElementById("navbar").style.boxShadow = "0px 0px 0px black";
      }
    }

    
  return (
    <div id="navbar">

        <span className="navbarHeader">Còmhradh</span>

    </div>
  )
}
