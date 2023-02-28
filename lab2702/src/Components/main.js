import {BrowserRouter as Router, Route, Routes, Link, NavLink, useParams, Navigate, useNavigate} from 'react-router-dom';
import Artist from './artist';

const pics = [
    {id: 1, title: 'Mona Lisa', src: 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg'},
    {id: 2, title: 'Last supper', src: 'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg'},
    {id: 3, title: 'Self portrait', src: 'https://cdn.britannica.com/75/115475-050-9F9B00CE/Self-portrait-drawing-Leonardo-da-Vinci-Royal-Library.jpg'}
]

function HomePage(){
    return (
        <>
            <h3>HomePage</h3>
        </>
    );
}

function FamousPicture() {
    return(
        <>
            <h2>Mona Lisa</h2>
            <br />
            <img className="custom_img" src='https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg' alt='Mona Lisa' />
            <br/>
            <p>The world's most famous artwork, the Mona Lisa draws thousands of visitors to the Louvre Museum each day, many of whom are compelled by the sitter’s mysterious gaze and enigmatic smile. The seemingly ordinary portrait of a young woman dressed modestly in a thin veil, somber colors, and no jewelry might also confound its viewers, who may wonder what all the fuss is about. The painting’s simplicity belies Leonardo’s talent for realism. The subject’s softly modeled face shows his skillful handling of sfumato, an artistic technique that uses subtle gradations of light and shadow, rather than line, to model form. The delicately painted veil, the finely wrought tresses, and the careful rendering of folded fabric reveal Leonardo’s tireless patience in recreating his studied observations.</p>
        </>
    );
}

function Gallery(){
    return(
        <div className='custom_div'>
            {pics.map(function (item){
                return(
                        <div key={item.id}>
                            <NavLink to = {`/gallery/${item.id}`}>{item.title}</NavLink>
                        </div>
                );
            })}
        </div>

    );
}

function Picture(){
    const params = useParams();
    const picId = params.id;
    const pic = pics.find(q=>q.id == picId);
    if (pic === undefined) return <h2>Picture not found</h2>
    else{
        return(
            <>
                <h2>{pic.title}</h2>
                <img className='custom_img' src={pic.src} alt={pic.title}/>
            </>
        );
    }
}

export default function Main(){
    return(
        <Router>
            <div>
              <nav>
                <Link className='custom_link' to = '/'>Index</Link>
                <Link className='custom_link' to = '/artist'>To artist</Link>
                <Link className='custom_link' to = '/gallery'>To gallery</Link>
                <Link className='custom_link' to = '/famous-pic'>To famous picture</Link>
              </nav>

              <Routes>
                <Route exact path = '/' element={<HomePage />} />
                <Route exact path = '/artist' element={<Artist />} />
                <Route exact path = '/gallery' element={<Gallery />} />
                <Route exact path = '/famous-pic' element={<FamousPicture />} />
                <Route exact path = '/gallery/:id?' element={<Picture />} />
              </Routes>
            </div>
        </Router>
    );
}