import PropTypes from 'prop-types';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaRegClipboard, FaClipboard  } from "react-icons/fa";
import useTheme from '../../globalStore/theme';
// import { FaClipboardCheck } from "react-icons/fa6";


const CodeBlock = ({ code }) => {
    const [isCopy, setIsCopy] = useState(false);
    const { theme } = useTheme()
    
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopy(true);
    };

    return (
        <div className="rounded-md overflow-hidden bg-gray-300 dark:bg-gray-700">
            <div className='flex justify-between px-4 py-3 dark:text-gray-300 text-xs items-center'> 
                <p>Example Code</p> 
                <button onClick={handleCopy}> 
                    {isCopy ? <div className='flex gap-2 items-center'><span>Copied!</span><FaClipboard /></div> :  <div className='flex gap-2 items-center'><span>Copy Code</span><FaRegClipboard /></div>} 
                </button> 
            </div>
            <SyntaxHighlighter language='javascript' style={theme === 'dark' ? atomOneDark : atomOneLight} customStyle={{ padding: "25px" }} wrapLongLines={true}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

CodeBlock.propTypes = {
    code: PropTypes.string.isRequired,
};

export default CodeBlock;
