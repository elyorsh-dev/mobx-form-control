import {observer} from "mobx-react-lite";
import {FormControl} from "./form-control";

const formControl = new FormControl()

const App = observer(() => {

    console.log('render')

  return (
      <div>
          <input type="text" {...formControl.name.bind()}/>
          <input type="password" {...formControl.password.bind()}/>
      </div>
  )
})

App.displayName = 'App'

export default App
