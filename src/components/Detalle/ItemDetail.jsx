import { Button, Container } from '@mui/material';
import React, { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { GeneralContext } from '../../context/GeneralContext';
import { ItemCount } from '../Listado/ItemCount';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';

const ItemDetail = (props) => {
	const { agregarItem } = useContext(GeneralContext);

	const [tenemosItem, setTenemosItem] = useState(0);
	const onAdd = (sumaCarrito) => {
		agregarItem(props.id, sumaCarrito);
		/* Verifica que tengamos al menos 1 item para que el boton comprar aparezca */
		setTenemosItem(tenemosItem + 1);
	};

	return (
		<Container>
			{/* Nombre */}
			<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<h1>{props.name}</h1>
			</Box>
			{/* Imagen */}
			<Box sx={{ p: 2, border: '1px dashed grey' }} margin={4}>
				<Box display={'flex'} paddingY={3}>
					<CardMedia
						component="img"
						image={props.image}
						alt="cat"
						sx={{ maxHeight: '30rem' }}
					/>
					{/* Descripcion */}
					<Box
						container
						spacing={1}
						justifyContent="center"
						alignItems="center"
						padding={2}
						alignContent="center">
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores debitis deleniti, quasi nisi aliquid non culpa
							voluptatum quos iste veniam aperiam quaerat iure ab. Illum animi
							sequi modi sunt ut quisquams alias autem repellendus quaerat illum
							voluptatibus, itaque facilis excepturi quia quam iure explicabo
							cupiditate consequatur dicta temporibus. Quod aspernatur sed
							nesciunt repellat deleniti ullam fugit recusandae, dicta
							necessitatibus repellendus vero accusamus nobis magnam quia!
						</Typography>
						{/* CONTADOR - ItemCount */}
						<ItemCount
							itemStock={props.stock}
							initial={props.initial}
							onAdd={onAdd}
						/>
						{/* BOTON COMPRAR */}
						<Box display={'flex'} justifyContent={'center'} paddingY={2}>
							{tenemosItem > 0 && (
								<Link to={'/cart'} style={{ textDecoration: 'none' }}>
									<Button
										variant="contained"
										color="primary"
										disabled={props.stock === 0}>
										<ShoppingBasketIcon />
										<Typography paddingX={1}>Ir al Carrito</Typography>
									</Button>
								</Link>
							)}
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
export { ItemDetail };
