import { FaSearch } from "react-icons/fa";
import {useRef} from 'react';


function SearchBar(props){

    let value = useRef(null);

    let updateVals = ()=>{
        props.updateContent(value.current.value)
    }
    return(
        <div className="flex flex-row items-center relative m-3">
            <input
                type="text"
                placeholder="Search Games..."
                className="w-21 m-5 pl-10 pr-4 rounded-3xl searchClass transition duration-100"
                ref={value}
                onChange = {updateVals}
            />
            <FaSearch
                className="absolute left-8 top-1/2 -translate-y-1/2 text-cyan-300"
            />
        </div>
    )
}

export default SearchBar;