import * as React from "react";

export interface CardsProps {}

const Cards: React.FunctionComponent<CardsProps> = ({ children }) => {
        return <div className="flex flex-col items-center w-full mb-3 sm:justify-between sm:flex-row">{children}</div>;
};

export default Cards;
