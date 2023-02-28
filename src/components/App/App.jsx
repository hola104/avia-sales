import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(555);
  }, []);

  return <div className="main">AviaSales</div>;
}
export default App;

// export default class App extends Component {
//   componentDidMount() {
//     ticketList().then((tickets) => {
//       console.log(tickets);
//     });
//   }

//   render() {
//     return <div className="main">Avia</div>;
//   }
// }
