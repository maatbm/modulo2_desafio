import { useContext, useState } from "react";
import { RepoContext } from "../contexts/ReposContext";
import { useParams } from "react-router-dom";
import { Header } from "../components";

export function Repos(){
    const { repoID } = useParams();
    const repoContext = useContext(RepoContext);
    return(
        <h1>Repos</h1>
    );
}





