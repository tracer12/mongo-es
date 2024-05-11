import React from 'react'
import '../components_css/Header.css';

function Header({ OpenGuiPage, openGuiPageToggle }) {
    return (
        <div className='header shadow-md h-16 flex px-5 py-0'>
            <div className='pt-2 pb-1'>
                <button className="border border-1 rounded-md h-12 bg-gray-50 px-3" onClick={() => { OpenGuiPage() }}>
                    {openGuiPageToggle ? "GUI로 학습하기" : "홈으로 돌아가기"}
                </button>
            </div>
        </div>
    )
}

export default Header