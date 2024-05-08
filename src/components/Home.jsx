import React from 'react'
import CodeEditor from './CodeEditor.jsx';
import '../components_css/Home.css'
import ExplainModal from './ExplainModal.jsx';
import SaveButton from '../components/Buttons/SaveButton.jsx';
import HistoryButton from '../components/Buttons/HistoryButton.jsx';

function Home() {
    return (
        <main className='Home-main-container pt-6 pl-9'>
            <div className="grid grid-cols-[9.5fr,0.5fr,5fr] p-2 mb-10 mt-5">
                <ExplainModal />
                <div className='pr-4'>
                    <SaveButton />
                </div>
                <HistoryButton />
            </div>
            <CodeEditor />

        </main>
    )
}

export default Home