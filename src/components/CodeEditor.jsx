import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { ChakraProvider, Button, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { default_VALUE } from "../constants.js"
import Output from "./Output.jsx";


const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };
    const editorStyle = {
        border: '1px solid #000000', // 테두리 스타일 지정

    };

    return (
        <Box >
            <HStack spacing={8}>
                <ChakraProvider>
                    <Box>
                        {/* <LanguageSelector /> */}
                        <Box ml={2} mb={4}>
                            <Text mb={2} fontSize="lg">
                                Input
                            </Text>
                            <Button>파이프라인</Button>
                        </Box>
                        <div style={editorStyle}>
                            <Editor
                                options={{
                                    minimap: {
                                        enabled: false,
                                    },
                                }}
                                width="30vw"
                                height="50vh"
                                theme="vs-white"
                                borderRadius={4}
                                language="json"
                                defaultValue={default_VALUE["json"]}
                                onMount={onMount}
                                value={value}
                                onChange={(value) => setValue(value)}
                            />
                        </div>
                    </Box>
                    <Output editorRef={editorRef} />
                </ChakraProvider>
            </HStack>
        </Box>
    );
};
export default CodeEditor;