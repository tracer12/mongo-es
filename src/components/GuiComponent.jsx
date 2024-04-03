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
import React from "react";
import { LANGUAGE_VERSIONS } from "../constants.js";
const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const GuiComponent = ({ language }) => {
    return (
        <div className="gui-button-box">
            <ChakraProvider>
                <Menu isLazy>
                    <MenuButton as={Button}>gui button</MenuButton>
                    <MenuList bg="white">
                        {languages.map(([lang, version]) => (
                            <MenuItem
                                key={lang}
                                color={lang === language ? ACTIVE_COLOR : ""}
                                bg={lang === language ? "white" : "transparent"}
                                _hover={{
                                    color: ACTIVE_COLOR,
                                    bg: "green",
                                }}

                            >
                                {lang}
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