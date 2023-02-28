import {BrowserRouter as Router, Route, Routes, Link, NavLink, useParams, Navigate, useNavigate} from 'react-router-dom';

export default function Gallery(props){
    return(
        <div className='custom_div'>
            {props.pics.map(function (item){
                return(
                    <>
                        <div key={item.id}>
                            <NavLink to = {`/products/${item.id}`}>{item.title}</NavLink>
                        </div>
                    </>
                );
            })}
        </div>

    );
}