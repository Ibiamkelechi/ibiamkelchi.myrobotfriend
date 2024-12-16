import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox'
import Scroll from './Scroll';
//import { robot } from './robot'; 
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robot: [],
			searchfield: ''
		} 
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robot: users }))
	}

	onSearchChange = (event) => {	
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robot, searchfield } = this.state;
		const filteredrobot = robot.filter(robot => {
			 return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robot.length ?
			<h1>Loading...</h1>:
			(
			<div className='tc'>
				<h1 className= 'f1'>RobotFriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
						<CardList robot={filteredrobot}/>
				</Scroll>
			</div>
		);
		
	}
}


export default App;