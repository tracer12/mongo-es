import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'

import '../components_css/Header.css';
import { Button, ChakraProvider } from "@chakra-ui/react";

function Header({ OpenSidebar }) {

    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                <ChakraProvider>
                    <Button onClick={() => console.log("asdf")}>GUI로 학습하기</Button>
                </ChakraProvider>
            </div>

        </header>
    )
}

export default Header