import React from "react";
import { MenuItem } from "./MenuItem";

type Props = {
    title : string;

}

export const Menu = (props:Props) => {

    console.log(props.title)
    return(
    <div>
        <MenuItem title='Home'/>
        <MenuItem title='Add todo'/>
        <MenuItem title='Todo list'/>
    </div>
    )
};