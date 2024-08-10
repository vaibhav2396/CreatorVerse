import { useState } from "react"
import { supabase } from "../client"
import { useNavigate } from "react-router-dom"

export default function AddCreator(){
    const [creator, setCreator] = useState({
        name: "",
        description: "",
        imageURL: "",
        twitter: "",
        instagram: "",
        youtube: ""
    })

    const navigate = useNavigate()

    async function addCreator(){
        if (!(creator.name.length && creator.imageURL.length && creator.description.length &&
            (creator.twitter.length || creator.instagram.length || creator.youtube.length))){
            alert("Enter all the required values")
        }

        try {
            const response = await fetch(`${supabase.supabaseUrl}/rest/v1/creators`, {
              method: 'POST',
              headers: {
                'apikey': supabase.supabaseKey,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(creator),
            });
            navigate("/")
          } catch (error) {
            console.error('Error creating data:', error);
          }
    }

    return(
        <div className="container">
            <div className="edit-card">
                <label className="label" htmlFor="name">Name</label>
                <input 
                onChange={(e)=>{setCreator({...creator, name: e.target.value})}}
                id="name"
                className="input"
                type="text"
                />
                <label className="label" htmlFor="image">
                    Image
                    <span className="subtext">  ( Provide a link to an image of your creator. Be sure to include the http:// )</span>
                </label>
                <input 
                onChange={(e)=>{setCreator({...creator, imageURL: e.target.value})}}
                id="image"
                className="input"
                type="text"
                />
                <label className="label" htmlFor="description">
                    Description
                    <span className="subtext">  ( Provide a description of the creator )</span>
                </label>
                <textarea
                onChange={(e)=>{setCreator({...creator, description: e.target.value})}}
                className="input"
                id="description"
                />
                <label className="label">
                    <span>Social Media Links</span> <br />
                    <span className="subtext">Provide at least one of the creator's social media links.</span>
                </label>
                <label className="label" htmlFor="youtube">
                    YouTube
                    <span className="subtext">  ( The creator's YouTube handle (without the @) )</span>
                </label>
                <input
                onChange={(e)=>{setCreator({...creator, youtube: e.target.value})}}
                className="input"
                id="youtube"
                type="text"
                />
                <label className="label" htmlFor="twitter">
                    Twitter
                    <span className="subtext">  ( The creator's Twitter handle (without the @) )</span>
                </label>
                <input
                onChange={(e)=>{setCreator({...creator, twitter: e.target.value})}} 
                className="input"
                id="twitter"
                type="text"
                />
                <label className="label" htmlFor="instagram">
                    Instagram
                    <span className="subtext">  ( The creator's Instagram handle (without the @) )</span>
                </label>
                <input
                onChange={(e)=>{setCreator({...creator, instagram: e.target.value})}}
                className="input"
                id="instagram"
                type="text"
                />
                <button onClick={addCreator} className="btn">Add Creator</button>
            </div>
        </div>
    )
}