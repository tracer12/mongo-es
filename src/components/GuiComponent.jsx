import {
    Box,
    Button,
    Menu,
    MenuButton,
    ChakraProvider,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import '../components_css/GuiComponent.css'
import React, { useState } from "react";

/* */
import { LANGUAGE_VERSIONS } from "../constants.js";
const languages = Object.entries(LANGUAGE_VERSIONS);

const ACTIVE_COLOR = "blue.400";
/* */

const GuiComponent = () => {

    const [List, setList] = useState("test");
    const guiList = {
        match: "1",
        sort: "2",
        example: "3",

    }
    const onSelect = (exList) => {
        setList(exList);
    };
    const exampleList = Object.entries(guiList);

    return (
        <div className="gui-button-box">
            <ChakraProvider>
                <Menu isLazy>
                    <MenuButton as={Button}>{List}</MenuButton>
                    <MenuList bg="white">
                        {exampleList.map(([exList, version]) => (
                            <MenuItem
                                key={exList}
                                color={exList === exampleList ? ACTIVE_COLOR : ""}
                                bg={exList === exampleList ? "white" : "transparent"}
                                _hover={{
                                    color: ACTIVE_COLOR,
                                    bg: "green",
                                }}
                                onClick={() => onSelect(exList)}
                            >
                                {exList}
                                &nbsp;
                                <Text as="span" color="black" fontSize="sm">
                                    ({version})
                                </Text>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </ChakraProvider>
        </div>
    );
}

export default GuiComponent;