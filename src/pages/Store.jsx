import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <div>Store</div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {storeItems.map(item=>(
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
        
      </Row>
    </>
  )
}