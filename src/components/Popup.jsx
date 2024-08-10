import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
export default function Popup({setIsPopupOpen, id}){
    const navigate = useNavigate()
    function onClose(){
        setIsPopupOpen(false)
    }
    // async function deleteCreator() {
    //     const { data, error } = await supabase
    //         .from('creators') 
    //         .delete()      
    //         .eq('id', id);
    
    //     if (error) {
    //         console.error('Error deleting user:', error);
    //     } else {
    //         navigate("/")
    //     }
    // }
    async function deleteCreator(){
        try {
            const response = await fetch(`${supabase.supabaseUrl}/rest/v1/creators?id=eq.${id}`, {
              method: 'DELETE',
              headers: {
                'apikey': supabase.supabaseKey,
                'Content-Type': 'application/json',
              },
            });
            navigate("/")
          } catch (error) {
            console.error('Error creating data:', error);
          }
    }
    return (
         
            <div className="popup">
                <div className="popup-content">
                    <h1 style={{color: "white"}}>WAIT</h1>
                    <h6 style={{color: "white"}}>Are you sure you want to delete ?</h6>
                    <button className="popup-btn" onClick={onClose}>NAH! NEVER MIND</button>
                    <button className="popup-btn" onClick={deleteCreator}>YES! TOTALLY SURE</button>
                </div>
            </div>
        );
}