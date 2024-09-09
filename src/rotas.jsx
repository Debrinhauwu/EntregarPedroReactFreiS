import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from './pages/pagina-inicio'
import Exec01 from "./pages/exec01";
import Exec02 from "./pages/exec02";
import Exec03 from "./pages/exec03";
import Exec04 from "./pages/exec04";
import Exec05 from "./pages/exec05";
import Exec06 from "./pages/exec06";
import Exec07 from "./pages/exec07";
import Exec08 from "./pages/exec08";
import Exec09 from "./pages/exec09";
import Exec10 from "./pages/exec10";
import Exec11 from "./pages/exec11";
import Exec12 from "./pages/exec12";
import PaginaSobre from "./pages/pagina-sobre";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/exec01' element={<Exec01 />} />
                <Route path='/exec02' element={<Exec02 />} />
                <Route path='/exec03' element={<Exec03 />} />
                <Route path='/exec04' element={<Exec04 />} />
                <Route path='/exec05' element={<Exec05 />} />
                <Route path='/exec06' element={<Exec06 />} />
                <Route path='/exec07' element={<Exec07 />} />
                <Route path='/exec08' element={<Exec08 />} />
                <Route path='/exec09' element={<Exec09 />} />
                <Route path='/exec10' element={<Exec10 />} />
                <Route path='/exec11' element={<Exec11 />} />
                <Route path='/exec12' element={<Exec12 />} />
                <Route path='/sobre' element={<PaginaSobre />} />
            </Routes>
        </BrowserRouter>
    )
}