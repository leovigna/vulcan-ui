import React from 'react';
import Moment from 'react-moment';
import EtherScan from "../Aggregator/EtherScan"
import { FeedTypes } from "../../store/types"

interface Props {
    responses: [FeedTypes.Response]
}

const FeedTable = ({ responses }: Props) =>
    <table className="table table-outline mb-0 d-sm-table table-responsive table-borderless" style={{ borderCollapse: 'collapse', border: 'none', borderSpacing: 0 }}>
        <thead>
            <tr>
                <th className='px-1 py-3' style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 400 }}>Oracle</th>
                <th className='px-1 py-3' style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 100 }}>Answer</th>
                <th className='px-1 py-3' style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 100 }}>Gas Price</th>
                <th className='px-1 py-3' style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 100 }}>Transaction</th>
                <th className='px-1 py-3' style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 240 }}>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                responses.map(({ transactionHash, address, answer, timestamp, gasPrice }) => {
                    return (<tr key={transactionHash}>
                        <td className='px-1 py-3'><EtherScan style={{ fontSize: 15, fontWeight: 300, color: '#000000' }} address={address} /></td>
                        <td className='px-1 py-3' style={{ fontSize: 15, fontWeight: 300, color: '#000000' }}>{answer}</td>
                        <td className='px-1 py-3' style={{ fontSize: 15, fontWeight: 300, color: '#000000' }}>{gasPrice}</td>
                        <td className='px-1 py-3'><EtherScan style={{ fontSize: 15, fontWeight: 300, color: '#000000' }} tx={transactionHash} /></td>
                        <td className='px-1 py-3' style={{ fontSize: 15, fontWeight: 300, color: '#000000' }}>
                            {timestamp ?
                                <Moment unix format="LLLL">
                                    {timestamp}
                                </Moment> : "Loading..."}
                        </td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>

export default FeedTable;