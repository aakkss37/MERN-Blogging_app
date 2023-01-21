import { styled, Box, Typography } from '@mui/material';

export const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

export const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
	margin:2px;
	padding:2px;
`;