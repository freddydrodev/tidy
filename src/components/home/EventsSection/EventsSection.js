import React, { Component } from "react";
import { SectionLegend } from "../../../common";
import EventItem from "./EventItem";
import _db from "../../../config/db";

class EventsSection extends Component {
  state = {
    db: []
  };

  componentDidMount() {
    const db = _db.filter((e, i) => i <= 3);
    this.setState({ db });
  }

  render() {
    return (
      <React.Fragment>
        <SectionLegend title={`Available Events`} subtitle="today" />
        {this.state.db.map(item => (
          <EventItem key={item.id} {...item} />
        ))}
      </React.Fragment>
    );
  }
}

export default EventsSection;
