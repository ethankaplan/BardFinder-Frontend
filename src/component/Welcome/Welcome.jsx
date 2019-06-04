import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class Welcome extends Component{


    render(){
        return(
            <div>
                <h2>Welcome to</h2><br/>
                <h1>Bard Finder</h1><br/>
                <p>Are you an adventuring party needing to earn some extra gold?
                    Do you have a basement full of giant rats and need some mercenaries to clear it out?
                    Or a grand quest that need to be taken care of?<br/>
                    Bard Finder is what you need! We support both DMs and PCs, so if you are looking for a group to tell your story, or looking for a party to join up with, we've got you covered.
                </p>
                <Button primary>Register</Button><Button secondary>Log In</Button>

            </div>
        )
    }
}

export default Welcome