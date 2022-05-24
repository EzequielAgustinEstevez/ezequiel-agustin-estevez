//@ts-check
import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tooltip } from '@mui/material';
import { GeneralContext } from '../../context/GeneralContext';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function CustomizedBadges() {
	const { contadorCarrito } = React.useContext(GeneralContext);
	return (
		<Tooltip title="Tu Carrito">
			<Link to={'/cart'}>
				<IconButton
					aria-label="cart"
					sx={{ margin: { xs: '0', sm: '0 0.8rem' } }}>
					<StyledBadge badgeContent={contadorCarrito} color="secondary">
						<ShoppingCartIcon sx={{ color: '#fff' }} />
					</StyledBadge>
				</IconButton>
			</Link>
		</Tooltip>
	);
}
