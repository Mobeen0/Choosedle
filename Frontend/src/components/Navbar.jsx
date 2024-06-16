import choosedleLogo from '../assets/ChoosedleLogo.jfif';
import { FaGithub } from "react-icons/fa";

function Navbar(){

    return(
        <>
            <nav className = "w-screen flex flex-row grow justify-between items-center m-0 p-0 sticky top-0 left-0 z-10 navClass">
                <div className = "text-center basis 2 h-fit imageCont flex flex-row items-center">
                    <img src = {choosedleLogo} className = "logoimg" />
                    <span className= "pl-3 font-black text-3xl text-white tracking-widest">ChooseDle</span>
                </div>
                <div className = "text-center basis 6 flex flex-row items-center">
                    <a href= "https://github.com/Mobeen0" target = '_blank'>
                        <FaGithub className = "text-3xl text-white hover:text-cyan-400 duration-150" />
                    </a>
                    <span className = "pl-2 pr-1">Created by Muhammad Mobeen</span>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;