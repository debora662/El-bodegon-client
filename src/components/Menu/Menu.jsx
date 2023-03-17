import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getAllDishes, getCategorys } from '../../redux/actions/actions';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '../Card/Card'
import Pagination from './Pagination'

export default function ResponsiveGrid() {
    const dispatch = useDispatch()
    const allDishesToShow = useSelector(state => state.allDishes)

    useEffect(() => {
        if (allDishesToShow.length === 0) {
            dispatch(getAllDishes())
            dispatch(getCategorys())
        }
    }, [dispatch, allDishesToShow.length])

    return (

        <Stack
            container='true'
            spacing={2}
            sx={{
                // border: '5px solid red',
                paddingTop: '2vh',
                paddingLeft: '1.5vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgray'
            }}
        >
            <Pagination/>

            <Grid container columns={{ xs: 3, sm: 4, md: 12 }}>
                {allDishesToShow.map((dish, i) => (
                    <Grid item xs={2} sm={4} md={3} key={dish.name}>
                        <Card dish={dish} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
