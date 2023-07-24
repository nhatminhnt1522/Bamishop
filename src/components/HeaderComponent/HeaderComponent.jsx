import { Col } from "antd"
import React from "react"
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeader1 } from "./style"
import { Input } from 'antd'
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = ()=>{
    return(
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>BAMISHOP</WrapperTextHeader>
                </Col>
                <Col span={12}>
                 <ButtonInputSearch 
                    size="large"
                    bordered={false}
                    textButton="Tìm kiếm" 
                    placeholder="input search text" 
                  />
                </Col>
                <Col span={6} style={{display: 'flex', gap:'40px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize:'30px'}}/>
                        <div>
                            <WrapperTextHeader1>Đăng nhập/ Đăng kí</WrapperTextHeader1>
                            <div>
                                <WrapperTextHeader1>Tài khoản</WrapperTextHeader1>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{fontSize:'30px'}}/>
                        <WrapperTextHeader1>Giỏ hàng</WrapperTextHeader1>                       
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent