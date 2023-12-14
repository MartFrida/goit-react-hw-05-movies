import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
	return (
		<StyledWrapper>
			<header>
				<StyledNav>
					<StyledNavLink to='/'>Home</StyledNavLink>
					<StyledNavLink to='/movies'>Movies</StyledNavLink>
				</StyledNav>
			</header>
			<StyledMainContent>
				<Outlet />
			</StyledMainContent>
		</StyledWrapper>

	)
}

export default Layout

const StyledWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`

const StyledNav = styled.nav`
background-color:#919191;
padding:20px;
`

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: #3d3d3d;
	font-weight: 700;
	font-size: 1.5rem;
	margin-right: 15px;
	&.active {
		color: white;
		
	}
`
const StyledMainContent = styled.div`
	flex-grow: 1;
	padding: 10px;
	background-color: lightgray;
`

