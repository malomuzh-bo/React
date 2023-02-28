import {BrowserRouter as Router, Route, Routes, Link, useParams, Navigate, useNavigate} from 'react-router-dom'

function Artist(){
    return(
      <>
        <h2>Leonardo da Vinci</h2>
        <br/>
        <p>He was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.[3] While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology. Leonardo is widely regarded to have been a genius who epitomized the Renaissance humanist ideal,[4] and his collective works comprise a contribution to later generations of artists matched only by that of his younger contemporary, Michelangelo.</p>
      </>  
    );
}

function Pictures(){
    return(
        <>
            <img src='https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg' alt='Mona Lisa' />
            <br/>
            <img src='https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg' alt='Last Supper' />
            <br/>
            <img src='https://cdn.britannica.com/75/115475-050-9F9B00CE/Self-portrait-drawing-Leonardo-da-Vinci-Royal-Library.jpg' alt='Self Portrait' />
        </>

    );
}

function FamousPic() {
    return(
        <>
            <img src='https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg' alt='Mona Lisa' />
            <br/>
            <p>The world’s most famous artwork, the Mona Lisa draws thousands of visitors to the Louvre Museum each day, many of whom are compelled by the sitter’s mysterious gaze and enigmatic smile. The seemingly ordinary portrait of a young woman dressed modestly in a thin veil, somber colors, and no jewelry might also confound its viewers, who may wonder what all the fuss is about. The painting’s simplicity belies Leonardo’s talent for realism. The subject’s softly modeled face shows his skillful handling of sfumato, an artistic technique that uses subtle gradations of light and shadow, rather than line, to model form. The delicately painted veil, the finely wrought tresses, and the careful rendering of folded fabric reveal Leonardo’s tireless patience in recreating his studied observations.</p>
        </>
    );
}