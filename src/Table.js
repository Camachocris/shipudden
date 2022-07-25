import React from "react";

const vehicles = [
    { ruta: "1-2", bike: 2, motorcycle: 45, car: 30, bus: 18, truck: 3  },
  ];
  
function Table() {
    return (
        <div>
            <table className="tabla" >
                <tr>
                    <th>Ruta</th>
                    <th>Bike</th>
                    <th>Motorcycle</th>
                    <th>Car</th>
                    <th>Bus</th>
                    <th>Truck</th>
                </tr>
                {vehicles.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.ruta}</td>
                            <td>{val.bike}</td>
                            <td>{val.motorcycle}</td>
                            <td>{val.car}</td>
                            <td>{val.bus}</td>
                            <td>{val.truck}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export { Table };