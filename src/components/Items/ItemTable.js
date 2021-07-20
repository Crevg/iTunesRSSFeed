import React from "react";
import './ItemTable.css'

const ItemTable = ({ headers = null, rows = null, onSelectItem = () => {} }) => {
    return (
        <table className="table table-striped thead-hover">
            <thead className="thead-dark">
                <tr>
                    {headers ? headers.map((header, index) => <th width="100" key={index}>{header}</th>) : null}
                </tr>
            </thead>
            <tbody>
                {rows
                    ? rows.map((row, index) => (
                        <tr className="clickable" onClick={onSelectItem.bind(this, index)}
                            key={index}>
                            {row.map((cell, cell_index) => (
                                <td width="100" key={cell_index}>{cell}</td>
                            ))}
                        </tr>
                    ))
                    : null}
            </tbody>
        </table>
    );
};

export default ItemTable;