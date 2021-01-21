import * as React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import styled from "styled-components";

const GridGenerator = (props) => {
    return (
        <Grid justify="center">
            <MyRow bla={props.bla}></MyRow>
            <MyRow bla={props.bla}></MyRow>
            <MyRow bla={props.bla}></MyRow>
            <MyRow bla={props.bla}></MyRow>
            <MyRow bla={props.bla}></MyRow>
        </Grid>
    );
}

export const MyGrid = styled(GridGenerator)`
  position: fixed;
`;

const MyQuad = styled(Col)`
    border: 1px solid white;
    background-color: black;
    :hover {
        background: lightgray
    }
`;

const MyRow = (props) => {
    const styleName = "col-md";

    return (
        <Row className="xs">
            <MyQuad className={styleName}>
                
            </MyQuad>
            <MyQuad className={styleName}>
                
            </MyQuad>
            <MyQuad className={styleName}>
                
            </MyQuad>
            <MyQuad className={styleName}>
                
            </MyQuad>
            <MyQuad className={styleName}>
                
            </MyQuad>
        </Row>
    )
}

export default GridGenerator;
