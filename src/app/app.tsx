import { Colors } from "../utils";
import Circle from "../components/circle";


export function App() {
  return (
    <div>
      <Circle color={Colors.GREEN}/>
      <Circle color={Colors.PINK}/>
      <Circle color={Colors.PURPLE}/>
      <Circle color={Colors.TEAL1}/>
      <Circle color={Colors.TEAL2}/>
      <Circle color={Colors.YELLOW} isSelected={true}/>
    </div>
  );
}

export default App;
