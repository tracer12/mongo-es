import React from 'react'
import CodeEditor from './CodeEditor.jsx';
import '../components_css/Home.css'
import ExplainModal from './ExplainModal.jsx';
import SaveButton from './SaveButton.jsx';
import GuiComponent from './GuiComponent.jsx';

function Home() {
    return (
        <main className='button-main-container'>
            <div className='main-buttons'>
                <ExplainModal />
                <SaveButton />
            </div>
            <GuiComponent />
            <CodeEditor />

        </main>
    )
}

export default Home