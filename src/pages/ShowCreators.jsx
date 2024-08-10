import Card from "../components/Card"
import { supabase } from "../client"
import { useEffect, useState } from "react"

export default function ShowCreators(){

    const [creators, setCreators] = useState([])

    async function fetchCreators(){
        try {
            const response = await fetch(`${supabase.supabaseUrl}/rest/v1/creators?select=*`, {
              headers: {
                'apikey': supabase.supabaseKey,
              },
            });
        
            const data = await response.json();
            setCreators(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(()=>{
        fetchCreators()
    },[])
    
    return(
        <div className="container">
            <div className="creators">
                {
                    creators && creators.length ?
                    creators.map((creator)=>{
                        return <Card 
                        key={creator.id}
                        id={creator.id} 
                        name={creator.name} 
                        imageURL={creator.imageURL} 
                        description={creator.description} 
                        instagram={creator.instagram}
                        twitter={creator.twitter}
                        youtube={creator.youtube} 
                        />
                    }) : <div>No Content Creators in Database</div>
                }
            </div>
        </div>
    )
}