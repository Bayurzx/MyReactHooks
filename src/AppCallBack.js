import './App.css';

import ParentComponent from './callBackComponents/ParentComponent'

function AppCallBack() {
  return (
    <div className="App">
      Hello
      <ParentComponent />
    </div>
  );
}

export default AppCallBack;
