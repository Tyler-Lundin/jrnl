import { Outlet } from 'react-router-dom';
import styled from 'styled-components'
import UserMenu from './menus/UserMenu';
import JrnlMenu from './menus/JrnlMenu';
import PageMenu from './menus/PageMenu';
import TagsMenu from './menus/TagsMenu';
import CreateMenu from './menus/CreateMenu';
import SettingsMenu from './menus/SettingsMenu';
import {AiOutlineClose} from 'react-icons/ai'
const S = {}
S.Menu = styled.div`
        width: 80vw;
        height: 80vh;
        background: rgb(50,50,50);
        position: absolute;
        left: 0; 
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 999;
`;
S.ExitButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    color: white;
`;

const Menu = (props) => {
    const {
        menuSelected,
        setIsMenuOpen,
        setJrnl,
        handleGetJrnlList
    } = props
    
    

    function closeMenu () {
        setIsMenuOpen(false)
    }
    function openMenu(menuSelected) {
        switch(menuSelected) {
            case 0 : return <UserMenu/>
            case 1 : return <JrnlMenu setJrnl={setJrnl} handleGetJrnlList={handleGetJrnlList} />
            case 2 : return <PageMenu/>
            case 3 : return <TagsMenu/>
            case 4 : return <CreateMenu/>
            case 5 : return <SettingsMenu/>
            
        }
    }
    return (
        <S.Menu>
            <S.ExitButton onClick={closeMenu}>
                <AiOutlineClose/>
            </S.ExitButton>
            {openMenu(menuSelected)}
        </S.Menu>
    )
}

export default Menu