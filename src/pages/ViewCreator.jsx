import { useEffect, useState } from "react"
import { supabase } from "../client"
import { useNavigate, useParams } from "react-router-dom"
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";


export default function ViewCreator(){
    const {id} = useParams()
    const [ creator, setCreator ] = useState({})
    const navigate = useNavigate()
    const [ isPopupOpen, setIsPopupOpen] = useState(false)

    async function fetchCreator(){
        try {
            const response = await fetch(`${supabase.supabaseUrl}/rest/v1/creators?id=eq.${id}`, {
              headers: {
                'apikey': supabase.supabaseKey,
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            setCreator(data[0]);
          } catch (error) {
            console.error('Error creating data:', error);
          }
    }
    useEffect(()=>{
        fetchCreator()
    },[id])

    return(
        <div className="creator-container">
            { isPopupOpen? <Popup setIsPopupOpen = {setIsPopupOpen} id={id}/> : null}
            <div className="creator-content">
                <img src={creator.imageURL} alt={creator.name} className="creator-img"/>
                <div>
                    <h3 className="name">{creator.name}</h3>
                    <div className="description" style={{marginBottom: "20px"}}>{creator.description}</div>
                    <div className="icon creator-links">
                        {creator.twitter? <Link to={`https://x.com/${creator.twitter}`}  target="_blank"
                         className="link"><FaSquareXTwitter size={30} 
                         style={{ marginRight:"10px"}}
                        /> @{creator.twitter}
                        </Link> : null }
                        {creator.instagram? <Link to={`https://www.instagram.com/${creator.instagram}`} target="_blank"
                         className="link"><AiFillInstagram size={30} 
                         style={{ marginRight:"10px"}}
                        />@{creator.instagram} 
                        </Link> : null }
                        {creator.youtube? <Link to={`https://www.youtube.com/user/${creator.youtube}`} target="_blank"
                         className="link"><GrYoutube size={30} 
                         style={{marginRight:"10px"}}
                        />@{creator.youtube}
                        </Link> : null }
                    </div>
                </div>
            </div>
            <div className="creator-btns">
                <button className="edit-page-btn" onClick={()=>{navigate(`/edit/${creator.id}`)}}>EDIT</button>
                <button className="edit-page-btn" style={{backgroundColor: "red"}} onClick={()=>setIsPopupOpen(true)}>DELETE</button>
            </div>
            
        </div>
    )
}
