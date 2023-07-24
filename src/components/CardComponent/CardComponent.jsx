import { Card } from "antd"
import React from "react"
import { StyleNameProduct } from "./style"

const CardComponent = ()=>{
    return(
        <Card
            hoverable
            style={{ width: 240 }}
            bodyStyle={{padding: '10px'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Mèo anh lông ngắn</StyleNameProduct>
      </Card>
    )
}

export default CardComponent