

import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: rgb(155 210 200);
    color: rgb(68 80 69);
	font-weight: 800;
    text-decoration: none;
	&:hover{
		background: rgb(135 210 200)
	}
`;


const categories = [
	{ id: 1, type: "Music" },
	{ id: 2, type: "Movies" },
	{ id: 3, type: "Sports" },
	{ id: 4, type: "Tech" },
	{ id: 5, type: "Fashion" }
];


const Categories = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');

	return (
		<>
			<Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
				<StyledButton variant="contained">Create Blog</StyledButton>
			</Link>

			<StyledTable>
				<TableHead>
					<TableRow>
						<TableCell>
								All Categories
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						categories.map(category => (
							<TableRow key={category.id}>
								<TableCell>
										{category.type}
								</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</StyledTable>
		</>
	)
}

export default Categories;