import React, { useEffect } from 'react';

import { FILM_ACTIONS } from "../../utils/constants";
import useReducerAndSaga from "../../utils/useReduxAndSaga";
import { Card, CardContent, Typography } from "@material-ui/core";
import { schemeInitState, schemeReducer } from "./reducer";
import { ISchema } from "../../utils/interfaces/scheme";


const SchemeCard = (props: ISchema) => (
    <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
                <small>{props.type}</small>
            </Typography>
            <Typography component="p">
                {props.description}
            </Typography>
            <ul>
                {
                    Object.entries(props.properties).map((item: any[], index: number) => (
                        <li key={'props' + index}>{item[0]} - <strong>{item[1].type}</strong></li>
                    ))
                }
            </ul>

            <p>{JSON.stringify(props)}</p>
        </CardContent>
    </Card>
);

const Scheme: React.FC<ISchema> = (props: any) => {
    // const [state, dispatch] = useReducerAndSaga<ISchema>(schemeReducer, schemeInitState, filmSchemeSaga, {});

    useEffect(() => {
        // update();
        // console.log(props);
    }, []);

    const update = () => {
        const payload: any = { url: "/films/schema" };
        // @ts-ignore
        // dispatch({ type: FILM_ACTIONS.FETCH_FILM_SCHEME_ACTION, payload });
    };

    return (
        <div>
            {/*{!!state && <SchemeCard {...(state as ISchema)} />}*/}
        </div>
    );
};
export default Scheme;
