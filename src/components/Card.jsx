import { FaUserEdit } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Card({id, name, imageURL, description, instagram, youtube, twitter}){
    const card = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${imageURL})`,
        width: '100%',
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        gridColumn: 2 / 3
    }
    return(
        <div style={card} className="item">
            <div className="card-header">
                <h3 className="name">{name}</h3>
                <div className="icon card-header-links">
                    <Link className="link" to={`/view/${id}`}><BsFillInfoCircleFill style={{marginRight: "14px"}} /></Link>
                    <Link className="link" to={`/edit/${id}`}><FaUserEdit /></Link>
                </div>
            </div>
            <div className="icon card-social-media">
                {instagram? <Link className="link" to={`https://www.instagram.com/${instagram}`} target="_blank"><AiFillInstagram /></Link> : null }
                {twitter? <Link className="link" to={`https://x.com/${twitter}`}  target="_blank"><FaSquareXTwitter /></Link> : null }
                {youtube? <Link className="link" to={`https://www.youtube.com/user/${youtube}`} target="_blank"><GrYoutube /></Link> : null }
            </div>
            <h4 className="description">{description.length < 200 ? description: `${description.slice(0,200)} ... `}</h4>
        </div>
    )
}
