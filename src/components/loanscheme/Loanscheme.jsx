// no space in file name
import React from 'react'

import './loanscheme.css'

const Loanscheme = () => {
    return (
        <div>
            <h1>Autolender/Loan schemes</h1>

            <table>

                <thead>
                    <tr>
                        <th rowSpan={2}>S.N.</th>
                        <th rowSpan={2}>Loan Type</th>
                        <th rowSpan={2}>Schema Name</th>
                        <th colSpan={2}>Amount upto</th>
                        <th rowSpan={2}>Interest Rate</th>
                        <th colSpan={2}>Duration</th>
                        <th rowSpan={2}>Compounding</th>
                    </tr>
                    <tr>
                        <th>[1000(Rs)]</th>
                        <th></th>
                        <th>Years</th>
                    </tr>

                </thead>


                <tbody>
                    <tr><td>1</td>
                        <td>Mortgage</td>
                        <td>Afno Ghar</td>
                        <td>30000</td>
                        <td></td>
                        <td>8%</td>
                        <td>15</td>
                        <td></td>
                        <td>Semiannualy</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Personnel</td>
                        <td>Sapati</td>
                        <td>10000</td>
                        <td></td>
                        <td>7%</td>
                        <td>5</td>
                        <td></td>
                        <td>Quaterly</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Student Loan</td>
                        <td>Sabai Lai Sikshya</td>
                        <td>8000</td>
                        <td></td>
                        <td>5%</td>
                        <td>10</td>
                        <td></td>
                        <td>Annualy</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Mortgage</td>
                        <td>Afno Ghar</td>
                        <td>30000</td>
                        <td></td>
                        <td>8%</td>
                        <td>15</td>
                        <td></td>
                        <td>Semiannualy</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Auto</td>
                        <td>Motor Gadi</td>
                        <td>10000</td>
                        <td></td>
                        <td>11%</td>
                        <td>15</td>
                        <td></td>
                        <td>Semiannualy</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Mortgage</td>
                        <td>Afno Ghar</td>
                        <td>30000</td>
                        <td></td>
                        <td>8%</td>
                        <td>15</td>
                        <td></td>
                        <td>Semiannualy</td>
                    </tr>
                </tbody>

            </table>





        </div>
    )
}

export default Loanscheme