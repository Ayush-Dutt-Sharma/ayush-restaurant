import React from "react";
import "./style.css"
import Menu from "../menuApi";
import MenuCart from "./MenuCart";
import Navbar from "./Navbar"

const uniqueList =[
    ...new Set(Menu.map((props)=>{
        return props.category;
    })),"All",]



const Home = () => {
    
    const [menuData,setMenuData]=React.useState(Menu);
    const [menuList, setMenuList]= React.useState(uniqueList)

    const filteritem=(category)=>{
        if(category==="All"){
            setMenuData(Menu)
        }
        else{
        const updatedList = Menu.filter((props)=>{
            return props.category===category;
        })
       setMenuData(updatedList); }
    }
    return (
        <>
        <Navbar filteritem={filteritem} menuList={menuList} />
       <MenuCart menuCart={menuData}/>
        </>
    )
}

export default Home
