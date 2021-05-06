import 'semantic-ui-css/semantic.min.css'
import { Container, Image, List } from 'semantic-ui-react';


const Contact = () => {
    const linkedIn = "https://www.linkedin.com/in/janellewong999/"
    const gitHub = "https://github.com/janellewong"
    const instagram = "https://www.instagram.com/jnell__/"
    const email = "mailto:janellewong112@gmail.com"
    const phone = "tel:604-704-4966"
    const location = "https://www.google.com/maps/place/355+E+24th+Ave,+Vancouver,+BC+V5V+1Z8/@49.2495057,-123.1062875,15z/data=!3m1!4b1!4m5!3m4!1s0x548673f9a279f63f:0xf34299d331914451!8m2!3d49.249506!4d-123.0975327"
    
    return (
        <div className="footer">
            <List horizontal>
                <List.Item>
                    <a href= {linkedIn}>
                        <Image avatar src='https://img.icons8.com/fluent/344/linkedin.png' />
                    </a>
                </List.Item>

                <List.Item>
                    <a href= {instagram}>
                        <Image avatar src='https://img.icons8.com/fluent/344/instagram-new.png' />
                    </a>
                </List.Item>

                <List.Item>
                    <a href= {gitHub}>
                        <Image avatar src='https://img.icons8.com/nolan/344/ffffff/github.png' />
                    </a>
                </List.Item>

                <List.Item>
                    <a href= {email}>
                        <Image avatar src='https://img.icons8.com/fluent/344/gmail.png' />
                    </a>
                </List.Item>

                <List.Item>
                    <a href= {phone}>
                        <Image avatar src='https://img.icons8.com/color/344/phone-not-being-used.png' />
                    </a>
                </List.Item>

                <List.Item>
                    <a href= {location}>
                        <Image avatar src='https://img.icons8.com/color/344/worldwide-location.png' />
                    </a>
                </List.Item>

            </List>
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} made with &#128151; by Janelle Wong |  All rights reserved  |  Terms Of Service  | Privacy
                </p>
            </div>
        </div>
    );
}
 
export default Contact;