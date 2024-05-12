
import CodeBlock from '../../components/codeBlock';


const Configuration = () => {

  const code = `import { NixToast, UseNixToast } from 'nix-toast';
function App() {
  const { nixToast } = UseNixToast();
  return (
    <React.Fragment>
      <button onClick={() => nixToast('TOAST!!', 2)}>Trigger Success 4</button>
      <NixToast  position="top-center" backgroundColor='white'  barPosition="bar-bottom"/>
    </React.Fragment>
  )
}
export default App`



  return (
    <div className="configurationMain dark:text-gray-300">
      <h1 className="font-semibold text-4xl uppercase border-b pb-3 border-gray-300 mb-7 ">Configuration</h1>
      <CodeBlock code={code} />
    </div>
  )
}

export default Configuration