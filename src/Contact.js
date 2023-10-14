import { SocialIcon } from 'react-social-icons';
import './Contact.css'

export default function Contact(props){
    return(
        <div class="card" >
        <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h3 class="card-title">{props.name}</h3>
          <p class="card-text"><SocialIcon url="https://contacts.com/jaketrent" style={{ height: 35, width: 35 }}/>  <span>{props.phone}</span></p>
         <p className="pp"><SocialIcon url="https://email.com/jaketrent" style={{ height: 35, width: 35 }}/>  <span>{props.email}</span></p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
    )
}