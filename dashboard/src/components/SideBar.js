import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo-DH.png';

function SideBar() {
	return (
		<React.Fragment>
			{/*<!-- Sidebar -->*/}
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
				{/*<!-- Sidebar - Brand -->*/}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
						<img className="w-100" src={image} alt="Digital House" />
					</div>
				</a>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider my-0" />

				{/*<!-- Nav Item - Dashboard -->*/}
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard - DH movies</span>
					</Link>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider" />

				{/*<!-- Heading -->*/}
				<div className="sidebar-heading">Actions</div>

				{/*<!-- Generos -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/database">
						<i className="fas fa-fw fa-database"></i>

						<span>Películas</span>
					</Link>
				</li>

				{/*<!-- Generos -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/genres">
						<i className="fas fa-fw fa-theater-masks"></i>

						<span>Genres</span>
					</Link>
				</li>

				{/*<!-- Last Movie -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/last-movie">
						<i className="fas fa-fw fa-film"></i>

						<span>Last Movie</span>
					</Link>
				</li>

				{/*<!-- Nav Item - Pages -->*/}
				<li className="nav-item">
					<Link className="nav-link collapsed" to="/pages">
						<i className="fas fa-fw fa-folder"></i>
						<span>Pages</span>
					</Link>
				</li>

				{/*<!-- Nav Item - Charts -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/charts">
						<i className="fas fa-fw fa-chart-area"></i>
						<span>Charts</span>
					</Link>
				</li>

				{/*<!-- Nav Item - Tables -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/tables">
						<i className="fas fa-fw fa-table"></i>
						<span>Tables</span>
					</Link>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
			{/*<!-- End of Sidebar -->*/}
		</React.Fragment>
	);
}
export default SideBar;
