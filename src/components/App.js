import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
    return (
        <div>
            <Header />
            <Note notes={notes}/>
            <Footer />
        </div>
    )
}

export default App;