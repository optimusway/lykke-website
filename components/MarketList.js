import React from 'react';
import styled, {css} from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';

const MarketList = styled.div`
  background-color: ${p => p.theme.colors.greyPale};
  padding-top: ${rem('9px')};
  padding-bottom: ${rem('9px')};
  
  @media all and (max-width: 991px) {
    background-color: transparent;
    position: fixed;
    z-index: 201;
    right: 0;
    top: ${rem('8px')};
    transition: 
      opacity ${p => p.theme.transition.primary},
      visibility ${p => p.theme.transition.primary};

    .menu-opened & {
      opacity: 0;
      visibility: 0;
    }
  }
  
  @media all and (max-width: 767px) {
    top: 4px;
  }
`;

const Wrapper = styled.div`
  padding-left: ${rem('12px')};
  padding-right: ${rem('12px')};
  
  @media all and (max-width: 991px) {
    padding: 0;
  }
`;

const Title = styled.div`
  font-size: ${rem('15px')};
  font-weight: 600;
  line-height: 1;
  color: ${p => p.theme.colors.greyBluey};
`;

const Value = styled.span`
  font-weight: 600;
  margin-left: ${rem('8px')};
    
  ${(p) => p.green &&
    css`
      color: ${p => p.theme.colors.green}
    `
  }
    
  ${(p) => p.red &&
    css`
      color: ${p => p.theme.colors.orangeRed}
    `
  }
`;

const Desc = styled.div`
  font-size: ${rem('14px')};
  line-height: 1;
  color: ${p => p.theme.colors.greyBluey};
  margin-top: ${rem('2px')};

  ${Value} {
    display: inline-block;
    vertical-align: middle;
    margin-top: ${rem('-1px')};
    font-size: ${rem('12px')};
  }
`;

const Label = styled.span`
  font-weight: 600;
  font-size: ${rem('12px')};
  letter-spacing: 0.8px;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  padding: ${rem('5px')} ${rem('7px')} ${rem('4px')};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.primary};

  ${(p) => p.green &&
    css`
      background-color: ${p => p.theme.colors.green};
    `
  }
`;

const ListItem = styled.div`
  ${(p) => p.accent &&
    css`
      ${Desc} {
        font-size: ${rem('11px')};
        color: ${p => p.theme.colors.slate};
        opacity: .6;
        line-height: 1;
        margin-top: ${rem('5px')};
      }
      
      ${Title} {
        font-size: ${rem('16px')};
        color: ${p => p.theme.colors.dark};
      }
    `
  }
`;

export default () => (
  <MarketList>
    <Grid>
      <Wrapper>
        <Row className="justify-content-between align-items-center">
          <Col>
            <ListItem accent>
              <Row className="align-items-center">
                <Col>
                  <Title>LyCI <Value green>1280.71</Value></Title>
                  <Desc>Lykke Crypto Index</Desc>
                </Col>
                <Col className="clear-height">
                  <Label green>+ 2.14%</Label>
                </Col>
              </Row>
            </ListItem>
          </Col>
          <Col className="d-none d-lg-block">
            <ListItem>
              <Title>Bitcoin</Title>
              <Desc>$ 2280.71 <Value green>+200.14%</Value></Desc>
            </ListItem>
          </Col>
          <Col className="d-none d-lg-block">
            <ListItem>
              <Title>Ethereum</Title>
              <Desc>$ 2280.71 <Value red>-2.14%</Value></Desc>
            </ListItem>
          </Col>
          <Col className="d-none d-lg-block">
            <ListItem>
              <Title>LKK</Title>
              <Desc>$ 2280.71 <Value green>+2.14%</Value></Desc>
            </ListItem>
          </Col>
          <Col className="d-none d-lg-block">
            <ListItem>
              <Title>Litecoin</Title>
              <Desc>$ 2280.71 <Value red>-2.14%</Value></Desc>
            </ListItem>
          </Col>
          <Col className="d-none d-lg-block">
            <ListItem>
              <Title>Dash</Title>
              <Desc>$ 2280.71 <Value green>+2.14%</Value></Desc>
            </ListItem>
          </Col>
          <Col className="d-none d-lg-block">
            <ListItem>
              <Title>Ethereum Classic</Title>
              <Desc>$ 2280.71 <Value green>+2.14%</Value></Desc>
            </ListItem>
          </Col>
        </Row>
      </Wrapper>
    </Grid>
  </MarketList>
);
