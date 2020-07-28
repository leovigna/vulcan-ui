import React from 'react';
import {
    CCard as Card,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
} from '@coreui/react'

interface Props {
    href: string,
    active: boolean,
    name: string,
    description: string,
    img: string,
    feedCount: number,
    nodeCount: number,
    sponsorCount: number
}

const ProtocolCard = ({ href, active, name, description, img, feedCount, nodeCount, sponsorCount }: Props) => <Card style={{
    width: '260px',
    height: '290px',
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: '8px'
}} >
    <CardBody>
        <a href={href} className="stretched-link"></a>
        <Row>
            <Col className="py-2" sm="12">
                <div className="d-flex justify-content-center">
                    <img style={{ height: 75 }} src={img} alt='' />
                </div>
            </Col>
            <Col className="py-0" sm="12">
                <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 'normal', color: '#000000' }}>{name}</div>
            </Col>
            <Col className="py-0" sm="12">
                <div className="d-flex justify-content-center">
                    <p style={{ maxWidth: 160, height: 55, fontSize: 12, textAlign: 'center', marginBottom: 5 }}>{description}</p>
                </div>
            </Col>
            <Col sm="12">
                {active ? <div className="d-flex justify-content-center">
                    <p style={{ maxWidth: 160, fontSize: 16, textAlign: 'center', color: '#000000' }}>
                        {feedCount > 0 ? <>{feedCount} Feeds<br /></> : ''}
                        {nodeCount > 0 ? <>{nodeCount} Nodes<br /></> : ''}
                        {sponsorCount > 0 ? <>{sponsorCount} Sponsors</> : ''}
                    </p>
                </div> :
                    <div className="d-flex justify-content-center">
                        <p style={{ maxWidth: 160, fontSize: 16, textAlign: 'center', color: '#000000' }}>
                            Coming soon...
                    </p>
                    </div>
                }
            </Col>
        </Row>
    </CardBody>
</Card>

ProtocolCard.defaultProps = {
    feedCount: 0,
    nodeCount: 0,
    sponsorCount: 0
}

export default ProtocolCard;