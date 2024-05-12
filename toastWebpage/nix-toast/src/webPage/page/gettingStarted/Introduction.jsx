import CodeBlock from "../../components/codeBlock"


const Introduction = () => {
    const code = `<NixToast 
 toastType="1"
 toastImg="https://react-toast-iota.vercel.app/normal.png" 
 position="top-center" 
 backgroundColor='white'  
 barPosition="bar-bottom" 
 barColor="#13bf19" 
/>`
    return (
        <div className="installationMain dark:text-gray-300">

            <h1 className="font-semibold text-4xl uppercase border-b pb-3 border-gray-300 mb-7">Nix Toast!</h1>

            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase mb-2">The Playground</h2>
                <CodeBlock code={code} />
            </div>
            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase mb-2">Positions</h2>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="top-left" name="hosting" value="top-left" className="hidden peer" />
                        <label htmlFor="top-left" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Top-left</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="top-center" name="hosting" value="top-right" className="hidden peer" />
                        <label htmlFor="top-center" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Top-center</div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Introduction