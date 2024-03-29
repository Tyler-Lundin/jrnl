import styled from "styled-components";
import {useState, useRef} from 'react'


const S = {}
S.Page = styled.div`
    background: repeating-linear-gradient(lightyellow, lightyellow 1.8em, #9198e5 1.9em, #9198e5 2em);
    height: 100%;
    width: 100%;
    padding: 0;
    overflow: hidden;
`;
S.LeftMargin = styled.div`
    float: left;
    width: 100px;
    height: 100%;
    border-right: 2px solid pink;
`;
S.RightMargin = styled.div`
    float: right;
    width: 100px;
    height: 100%;
    border-left: 2px solid pink;
`;
S.Text = styled.textarea`
    /* text-align: center; */
    background:none;
    resize: none;
    border: none;
    width: calc(100vw - 210px);
    height: calc(100% - 55px);
    font-size: 2em;
    line-height: 123%;
    overflow:hidden;
    padding: 62px 105px 0 105px;
`;
S.PageContent = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 99;
`;
S.SaveButton = styled.button`
    margin: auto;
    width: 100px;
    height: 100vh;
    position: absolute;
    bottom: 0; right: 0;
    border: none;
    background: rgba(60,60,60,.5);
    color: white;
    font-size: 2rem;
    :hover {
        background: rgb(100,100,100);
    }
    transition: 250ms;
    line-height: 14vh;
`;

const Page = (props) => {
    const {
        jrnl,
        page,
        setPage
    } = props


    
    const textRef = useRef()
    function handleSave() {
        setPage(textRef.current.value)
    }
    return(
        <>
            <S.Page id='Page'>
                
                <S.PageContent id='PageContent'>
                    <S.Text id='PageText' ref={textRef} defaultValue={page} onBlur={handleSave}/>
                </S.PageContent>
                
                <S.LeftMargin id='PageLeftMargin'/>
                <S.RightMargin id='PageRightMargin'/>
            </S.Page>
        </>
    )
}

export default Page