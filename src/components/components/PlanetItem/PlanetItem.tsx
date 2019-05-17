import React, { useEffect, useState } from "react";

import { Avatar, Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText, Paper } from "@material-ui/core";

import { IPlanet } from "../../../utils/interfaces/planets";

import "./style.css";

const PlanetItem: React.FC<IPlanet> = (props) => {
    const [residents, setResidents] = useState([] as any[]);
    const [films, setFilms] = useState([] as any[]);

    useEffect(() => {
        for (const resident of props.residents) {
            fetch(resident)
                .then((response) => response.json())
                .then((data) => setResidents([...residents, data]));
        }
        for (const film of props.films) {
            fetch(film)
                .then((response) => response.json())
                .then((data) => setFilms([...films, data]));
        }
    }, []);

    return (
        <Card className="PlanetItem">
            <CardHeader
                title={props.name}
                avatar={<Avatar aria-label="Recipe">{props.name[0]}</Avatar>}
            />
            <CardContent>
                <Grid container={true} spacing={24}>
                    <Grid item={true} xs={6}>
                        <Paper>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText
                                        primary={"Rotation period: " + props.rotation_period}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Orbital period: " + props.orbital_period}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Diameter: " + props.diameter}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Climate: " + props.climate}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Gravity: " + props.gravity}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Terrain: " + props.terrain}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Surface water: " + props.surface_water}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"Population: " + props.population}
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Paper>
                            <h4>Filmy</h4>
                            {films.map((item: any, index: number) => <p key={index}>{item.title}</p>)}

                            <h4>Residents</h4>
                            {residents.map((item: any, index: number) => <p key={index}>{item.name}</p>)}
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

// PlanetItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     rotation_period: PropTypes.string.isRequired,
//     orbital_period: PropTypes.string.isRequired,
//     diameter: PropTypes.string.isRequired,
//     climate: PropTypes.string.isRequired,
//     gravity: PropTypes.string.isRequired,
//     terrain: PropTypes.string.isRequired,
//     surface_water: PropTypes.string.isRequired,
//     population: PropTypes.string.isRequired,
//     residents: PropTypes.arrayOf(PropTypes.string).isRequired,
//     films: PropTypes.arrayOf(PropTypes.string).isRequired,
//     created: PropTypes.string.isRequired,
//     edited: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// };

export default PlanetItem;
