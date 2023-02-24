import React, {Component} from 'react' ;
import {menuItem} from './menuItem.js'
import './menu.css'
class menu extends Component{
	state={clicked : false}
	render(){
		return(

			<nav className="menu">
				<h1 className="title">more..<i className="fab fa-react"></i></h1>
				<div className="list" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul>
					{menuItem.map((item,index) => {
						return(
							<li key ={index}>
								<a className={item.cName} href={item.url}>{item.title}</a>
							</li>
						)
					})}

				</ul>
			</nav>

		)
	}

}

export default menu
