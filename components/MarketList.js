import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';
import config from '../config';
import fetch from 'isomorphic-unfetch';

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
    transition: opacity ${p => p.theme.transition.primary},
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
  color: ${p =>
    p.dir === 'up' ? p.theme.colors.green : p.theme.colors.orangeRed};
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

export const Label = styled.span`
  font-weight: 600;
  font-size: ${rem('12px')};
  letter-spacing: 0.8px;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  padding: ${rem('5px')} ${rem('7px')} ${rem('4px')};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.primary};
  background-color: ${p =>
    p.dir === 'up' ? p.theme.colors.green : p.theme.colors.orangeRed};

  ${p =>
    p.big &&
    css`
      font-size: ${rem('24px')};
      letter-spacing: 1.7px;
      padding: ${rem('6px')} ${rem('12px')} ${rem('5px')};
      border-radius: ${p => p.theme.corners.secondary};
    `}
`;

const AccentDesc = styled(Desc)`
  font-size: ${rem('11px')};
  color: ${p => p.theme.colors.slate};
  opacity: 0.6;
  line-height: 1;
  margin-top: ${rem('5px')};
`;

const AccentTitle = styled(Title)`
  font-size: ${rem('16px')};
  color: ${p => p.theme.colors.dark};
`;

const ListItem = styled.div``;

// TODO: find me the better place to live
export const mapToProduct = x => ({
  ticker: x.AssetPair,
  price: x.LastPrice,
  change: x.PriceChange24H
});

export default class extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.BASE_API_URL}/markets`),
      fetch(`${config.SELF_URL}/api/products/lyci`)
    ])
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(([rawQuotes, lyci]) => {
        let quotes = [mapToProduct(lyci)];
        for (let i = 0; i < config.PRODUCTS.length; i++) {
          const {ticker, name} = config.PRODUCTS[i];
          const idx = rawQuotes.findIndex(x => x.AssetPair === ticker);
          if (idx > -1) {
            quotes.push({
              ...mapToProduct(rawQuotes[idx]),
              name
            });
          }
        }
        this.setState({
          quotes
        });
      });
  }

  render() {
    const {
      quotes: [lyci, ...rest]
    } = this.state;
    return (
      <MarketList>
        <Grid>
          <Wrapper>
            <Row className="justify-content-between align-items-center">
              {lyci && (
                <Col>
                  <ListItem>
                    <Row className="align-items-center">
                      <Col>
                        <AccentTitle>
                          LyCI{' '}
                          <Value dir={lyci.change > 0 ? 'up' : 'down'}>
                            {lyci.price.toLocaleString()}
                          </Value>
                        </AccentTitle>
                        <AccentDesc>Lykke Crypto Index</AccentDesc>
                      </Col>
                      <Col className="clear-height">
                        <Label dir={lyci.change > 0 ? 'up' : 'down'}>
                          {lyci.change.toLocaleString(undefined, {
                            style: 'percent',
                            minimumFractionDigits: 2
                          })}
                        </Label>
                      </Col>
                    </Row>
                  </ListItem>
                </Col>
              )}

              {rest.map(quote => (
                <Col key={quote.ticker} className="d-none d-lg-block">
                  <ListItem>
                    <Title>{quote.name}</Title>
                    <Desc>
                      ${quote.price}
                      <Value
                        green={quote.change > 0}
                        dir={quote.change > 0 ? 'up' : 'down'}
                      >
                        {quote.change.toLocaleString(undefined, {
                          style: 'percent',
                          minimumFractionDigits: 2
                        })}
                      </Value>
                    </Desc>
                  </ListItem>
                </Col>
              ))}
            </Row>
          </Wrapper>
        </Grid>
      </MarketList>
    );
  }
}
