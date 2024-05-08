import React from 'react'
import { BsJustify }
    from 'react-icons/bs'

import '../components_css/Header.css';
import { Button, ChakraProvider } from "@chakra-ui/react";

function Header({ OpenGuiPage, openGuiPageToggle }) {
    return (
        <div className='header shadow-md h-16 flex px-5 py-0'>
            <div className='pt-2 pb-1'>
                <Button className="border border-1 rounded-md h-12 bg-gray-50 px-3" onClick={() => { OpenGuiPage() }}>
                    {openGuiPageToggle ? "GUI로 학습하기" : "홈으로 돌아가기"}
                </Button>
            </div>
        </div>
    )
}

export default Header