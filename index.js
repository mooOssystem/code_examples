import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Jumbotron,
  Container,
  Row,
  Col,
} from 'reactstrap';
import Waypoint from 'react-waypoint';
import { BlockAppeareAnim } from '../Animations';
import PositionCard from './PositionCard';
import vacanciesActions from '../../actions/filterVacanciesActions';

class OpenPossitions extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = { appeare: false };
  }
  componentWillMount() {
    this.props.getVacancies();
  }
  prepareItems = (p) => {
    if (p.length === 0) {
      return <p>Loading...</p>;
    }
    const items = p.slice(0, 4).map((item, index) => {
      const startTrans = index % 2 === 0 ? -50 : 50;
      return (
        <Col md={{ size: 6 }} className="possitionCard" key={item.id}>
          <BlockAppeareAnim
            duration={{
              enter: 800 + (index * 500),
              exit: 500,
            }}
            appeare={this.state.appeare}
            stOpac={0}
            finOpac={1}
            stTrans={startTrans}
            finTrans={0}
            component={PositionCard}
            itemProps={item}
          />
        </Col>
      );
    });
    return items;
  };
  handleWaypoint = () => {
    this.setState({ appeare: !this.state.appeare });
  };
  render() {
    const items = this.prepareItems(this.props.data);
    return (
      <Jumbotron className="openPossitions">
        <Waypoint
          onEnter={this.handleWaypoint}
          onLeave={this.handleWaypoint}
        >
          <div>
            <Container>
              <Row className="title">
                <h2>{this.props.textInfo.header}</h2>
              </Row>
              <Row className="possitions">
                {items}
              </Row>
            </Container>
          </div>
        </Waypoint>
      </Jumbotron>
    );
  }
}

export default connect(
  store => ({
    fetching: store.vacancies.fetching,
    data: store.vacancies.data,
    error: store.vacancies.error,
  }),
  dispatch => bindActionCreators({ ...vacanciesActions }, dispatch),
)(OpenPossitions);
