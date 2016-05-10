import React from 'react';
import {render} from 'react-dom';
import ContactsList from "./ContactsList";

let contacts =[
	{
		id:1,
		name: 'Uma',
		phone: '9963066422'
	},
	{
		id:2,
		name: 'ByreGowda',
		phone: '9966422630'
	},
	{
		id:3,
		name: 'Sundar',
		phone: '9963022664'
	},
	{
		id:4,
		name: 'KP',
		phone: '9964223066'
	},

]
class App extends React.Component{

	render(){
		return(
          <div>
             <h1>Contacts List</h1>
             <ContactsList  contacts={this.props.contacts}/>
          </div>
		)
	}
}

render(<App contacts={contacts} />, document.getElementById('app'));