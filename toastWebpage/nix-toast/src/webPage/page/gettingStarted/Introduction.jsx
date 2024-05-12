import { useState } from "react"
import CodeBlock from "../../components/codeBlock"
import { NixToast } from 'nix-toast';
import { UseNixToast } from 'nix-toast'

const Introduction = () => {
    const { nixToast } = UseNixToast();
    const code = `<NixToast 
 toastType="1"
 toastImg="https://react-toast-iota.vercel.app/normal.png" 
 position="top-center" 
 backgroundColor='white'  
 barPosition="bar-bottom" 
 barColor="#13bf19" 
/>`



    const [toastValue, setToastValue] = useState({
        toastPosition: 'top-center',
        barPosition: 'bar-bottom'
    })

    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setToastValue({ ...toastValue, [name]: value })
    }


    console.log(toastValue, 'toasss')
    return (
        <div className="installationMain dark:text-gray-300">

            <h1 className="font-semibold text-4xl uppercase border-b pb-3 border-gray-300 mb-7">Nix Toast!</h1>

            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase mb-2">The Playground</h2>
                <CodeBlock code={code} />
            </div>
            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase mb-2">Positions</h2>
                <ul className="flex gap-3">
                    <li>
                        <input type="radio" id="top-left" name="toastPosition" value="top-left" className="hidden peer" onChange={getInput} />
                        <label htmlFor="top-left" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">Top-left</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="top-center" name="toastPosition" value="top-center" className="hidden peer" onChange={getInput} />
                        <label htmlFor="top-center" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">Top-center</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="top-right" name="toastPosition" value="top-right" className="hidden peer" onChange={getInput} />
                        <label htmlFor="top-right" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">Top-right</div>
                            </div>
                        </label>
                    </li>
                </ul>
                <ul className="flex gap-3 mt-3">
                    <li>
                        <input type="radio" id="bottom-left" name="toastPosition" value="bottom-left" className="hidden peer" onChange={getInput} />
                        <label htmlFor="bottom-left" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">bottom-left</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="bottom-center" name="toastPosition" value="bottom-center" className="hidden peer" onChange={getInput} />
                        <label htmlFor="bottom-center" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">bottom-center</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="bottom-right" name="toastPosition" value="bottom-right" className="hidden peer" onChange={getInput} />
                        <label htmlFor="bottom-right" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">bottom-right</div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase mb-2">Bar Color</h2>

                <ul className="flex gap-3">
                    <li>
                        <input type="radio" id="bar-top" name="barPosition" value="bar-top" className="hidden peer" onChange={getInput} />
                        <label htmlFor="bar-top" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">Bar top</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="bar-bottom" name="barPosition" value="bar-bottom" className="hidden peer" onChange={getInput} />
                        <label htmlFor="bar-bottom" className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-sm font-semibold">Bar bottom</div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='mb-4'>
                <h2 className="font-semibold text-xl uppercase mb-2">Trigger!</h2>
                <button onClick={() => nixToast('normal toast', 10)} className="inline-flex items-center justify-between  p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                        <div className="w-full text-sm font-semibold">Nix Toast!</div>
                    </div>
                </button>
            </div>

            <NixToast toastType="1" position={toastValue.toastPosition} backgroundColor='white' barPosition={toastValue.barPosition} barColor="#13bf19" />
        </div>

    )
}

export default Introduction