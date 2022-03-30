import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import './App.css'
import { Events} from './Events'
import { useAuth, logout,} from './Firebase';
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
   const currentUser = useAuth();

    async function handleLogout() {
        setLoading(true);
        try {
          await logout();
          navigate('/signup');
    
        } catch {
          alert('Error!');
        }
    
        setLoading(false);
     }

    return (
        <div style={{background:'linear-gradient(to right, rgb(0, 35, 117), rgb(32, 94, 238))'}}>
             <div className="end"> 
              <div className="m-2" style={{color:'white'}}>Currently logged in as: {currentUser?.email}</div> 
             <Button id="logout" onClick={handleLogout}>Log Out</Button>
             </div>
          
        <h1 className="center heading" style={{color:'white'}}>Events: </h1>
            <div>
                {Events.map(event => (
                    <div className="card d-flex justify-content-center align-items-center m-5 p-3" style={{minHeight:'40vh', background:"white"}}>
                        <div className="w-100 text-center" style={{maxWidth:'300px'}}> 
                        <h2>  {event.name} </h2>
                         <p> <strong>Starts:</strong>  {event.starts} </p>
                         <p><strong> Ends:</strong> {event.ends} </p>
                        <p> <strong>Location:</strong> {event.location} </p>
                        <p><strong>Description:</strong> {event.description} </p>

                        <form> 
                        <p><strong>Want to Join?</strong></p>
                        <input type="radio" id="Yes" name="attend" value="Yes" />
                            <label for="yes">Yes</label> 

                        <input type="radio" id="No" name="attend" value="No" />
                            <label for="No">No</label>    

                        <input type="radio" id="Maybe" name="attend" value="Maybe" />
                            <label for="Maybe">Maybe</label>                            
                            </form>
                        </div>        
                    </div>
                ))}
            </div>

           
            
             <div className="create-event d-flex justify-content-center align-items-center m-5 p-3" style={{minHeight:'40vh', background:'white'}}> 
                <Form>
                    <Form.Group>
                    <Form.Label> Name: </Form.Label>
                    <Form.Control type="text" name="name" />
                    </Form.Group>

                    <Form.Group> 
                    <Form.Label> Starting time </Form.Label>
                    <Form.Control type="time" name="startingtime" />
                    </Form.Group>
                        
                    <Form.Group> 
                    <Form.Label> Ends: </Form.Label>  
                    <Form.Control type="time" name="ends" />
                    </Form.Group>
                    
                    <Form.Group> 
                    <Form.Label>
                        <select id="locations" name="locations">
            
                        <option value="location">New Location</option>
                        </select>
                    </Form.Label>
                    </Form.Group>
                    




                    <Form.Group>
                    <Form.Label>
                        New location:
                    </Form.Label>
                        <Form.Control type="text" name="newLocation" />
                    </Form.Group>

                    <Form.Group> 
                    <Form.Label>
                        Description: 
                        <Form.Control type="text" name="name" />
                    </Form.Label>
                    </Form.Group>
                    <Button className="createButton" id="createEvent">Create an Event</Button>
                </Form>
             </div>
               
                    
             

                      
              
                  
                   
                    

                    

             
                
                

          
            
        </div>
    )
}