import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsFillCaretRightFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import CodeEditor from './CodeEditor.jsx';
import '../components_css/Home.css'
import ExplainModal from './ExplainModal.jsx';
import SaveButton from './SaveButton.jsx';
import GuiComponent from './GuiComponent.jsx';

function Home() {
    return (
        <main className='btn-main-container'>
            <div className='main-btns'>
                <ExplainModal />
                <SaveButton />
            </div>
            <GuiComponent />
            <CodeEditor />

        </main>
    )
}

export default Home