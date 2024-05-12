import CodeBlock from "../../components/codeBlock";

const Installation = () => {

    const code = `npm i nix-toast`;
    return (
        <div className="installationMain dark:text-gray-300">

            <h1 className="font-semibold text-4xl uppercase border-b pb-3 border-gray-300 mb-7">Installation</h1>

            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase  ">Requirements</h2>
                <p className='mb-2'>React version greater than or equals to 18 or above</p>
            </div>
            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase  ">Installation using npm</h2>
                <p className='mb-2'>To get started with NixToast</p>
            </div>
            <CodeBlock code={code} />
        </div>
    )
}

export default Installation