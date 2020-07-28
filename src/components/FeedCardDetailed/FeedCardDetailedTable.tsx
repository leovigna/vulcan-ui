import React from 'react';
import { CButton as Button } from '@coreui/react';
import { FeedTypes } from '../../store/types';
import { renderAnswer } from '../../store/feed/actions';
import moment from 'moment';
import HeartFilled from '../../assets/img/icons/heart_filled.svg';
import HeartEmpty from '../../assets/img/icons/heart_empty.svg';
import { SetContractFavoriteActionInput, SetContractFavoriteAction } from '../../store/contractFavorite/types';

interface Props {
    feeds: FeedTypes.Feed[];
    setContractFavorite: (payload: SetContractFavoriteActionInput) => SetContractFavoriteAction;
}

const FeedCardDetailedTable = ({ feeds, setContractFavorite }: Props) => {
    return (
        <table
            className="table table-outline mb-0 d-sm-table table-responsive table-borderless"
            style={{ borderCollapse: 'collapse', border: 'none', borderSpacing: 0 }}
        >
            <thead>
                <tr>
                    <th
                        className="px-1 py-3"
                        style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 50 }}
                    >
                        Protocol
                    </th>
                    <th
                        className="px-1 py-3"
                        style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 100 }}
                    >
                        Name
                    </th>
                    <th
                        className="px-1 py-3"
                        style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', maxWidth: 400 }}
                    >
                        Address
                    </th>
                    <th
                        className="px-1 py-3"
                        style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 100 }}
                    >
                        Value
                    </th>
                    <th
                        className="px-1 py-3"
                        style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', minWidth: 100 }}
                    >
                        Last Update
                    </th>
                    <th
                        className="px-1 py-3"
                        style={{ border: 'none', fontSize: 16, fontWeight: 'bold', color: '#FA4706', maxWidth: 50 }}
                    >
                        Favorite
                    </th>
                </tr>
            </thead>
            <tbody>
                {feeds.map(
                    ({
                        id,
                        name,
                        protocol,
                        protocolInfo,
                        address,
                        networkId,
                        favorite,
                        state,
                        answerRenderOptions,
                    }) => {
                        const url = `#/feeds/${protocol}/${name}`;
                        const protocolUrl = `#/protocols/${protocol}`;
                        const hearted = favorite?.favorite || false;
                        const protocolImg = protocolInfo?.img || '';
                        const valueRender = state?.value ? renderAnswer(answerRenderOptions!, state!.value) : '';
                        const timestampRender = state?.timestamp
                            ? moment(state!.timestamp, 'X').format('MMMM D - h:mm A')
                            : '';

                        return (
                            <tr key={id}>
                                <td className="px-1 py-3">
                                    <a href={protocolUrl}>
                                        <img
                                            style={{ width: 37, objectFit: 'contain' }}
                                            src={protocolImg}
                                            alt={protocol}
                                        />
                                    </a>
                                </td>
                                <td className="px-1 py-3">
                                    <a href={url}>{name}</a>
                                </td>
                                <td className="px-1 py-3" style={{ fontSize: 15, fontWeight: 300, color: '#000000' }}>
                                    <a
                                        style={{ color: '#828282', fontStyle: 'italic' }}
                                        href={`https://etherscan.com/address/${address}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {address}
                                    </a>
                                </td>
                                <td className="px-1 py-3" style={{ fontSize: 15, fontWeight: 300, color: '#000000' }}>
                                    {valueRender || 'loading...'}
                                </td>
                                <td className="px-1 py-3" style={{ fontSize: 15, fontWeight: 300, color: '#000000' }}>
                                    {timestampRender || 'loading...'}
                                </td>
                                <td className="px-1 py-3">
                                    <Button
                                        onClick={() =>
                                            setContractFavorite({ id, address, networkId, favorite: !hearted })
                                        }
                                        style={{ padding: 0 }}
                                    >
                                        <img
                                            style={{ width: 31, objectFit: 'contain' }}
                                            src={hearted ? HeartFilled : HeartEmpty}
                                            alt=""
                                        ></img>
                                    </Button>
                                </td>
                            </tr>
                        );
                    },
                )}
            </tbody>
        </table>
    );
};

export default FeedCardDetailedTable;
