import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector.jsx";
import { CODE_SNIPPETS } from "../constants.js";
import Output from "./Output.jsx";

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    };

    const editorStyle = {
        border: '1px solid #000000', // 테두리 스타일 지정

    };

    return (
        <Box >
            <HStack spacing={8}>
                <ChakraProvider>
                    <Box>
                        <LanguageSelector language={language} onSelect={onSelect} />
                        <div style={editorStyle}>
                            <Editor
                                options={{
                                    minimap: {
                                        enabled: false,
                                    },
                                }}
                                width="30vw"
                                height="50vh"
                                // theme="vs-white"
                                borderRadius={4}
                                language={language}
                                defaultValue={CODE_SNIPPETS[language]}
                                onMount={onMount}
                                value={value}
                                onChange={(value) => setValue(value)}
                            />
                        </div>
                    </Box>
                    <Output editorRef={editorRef} language={language} />
                </ChakraProvider>
            </HStack>
        </Box>
    );
};
export default CodeEditor;