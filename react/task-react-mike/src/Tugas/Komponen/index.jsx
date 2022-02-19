import React from "react";
import KomponenPertama from "./Hasil/KomponenPertama";
import KomponenKedua from "./Hasil/KomponenKedua";
import NewKomponen from "./new/NewKomponen";

class Komponen extends React.Component {
    render() {
        return (
            <div>
                <KomponenPertama />
                <KomponenKedua /> 
                <NewKomponen />     
            </div>
        );
    }
}


export default Komponen;