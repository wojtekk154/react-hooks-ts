import * as React from "react";
import { RouteComponentProps } from "react-router";
import ReusableTable from "../../components/components/ReusableTable/ReusableTable";
import { IPaggingList, IPlanet } from "../../utils/interfaces/planets";
import { IFilm } from "../../utils/interfaces/films";
import { useEffect } from "react";

interface IListProps extends RouteComponentProps {
    list: IPaggingList<IPlanet|IFilm>;
    listConfig: { name: string, key: string[] }[]
}

export const ListLayout: React.FC<IListProps> = (props: IListProps) => {
    useEffect(() =>{
        console.log(props);
    }, []);

    return (
        <div>
            <ReusableTable
                config={props.listConfig}
                totalItems={props.list.count}
                next={props.list.next}
                previous={props.list.previous}
                tableData={props.list.results}
                action={true}
            />
        </div>
    );
};