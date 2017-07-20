import React from 'react';
import MarkdownEditor from 'react-markdown-editor'

class Markdown extends React.Component{

    render(){
        return(
            <MarkdownEditor initialContent="Test" iconsSet="font-awesome"/>
        )
    }
}



export default Markdown;