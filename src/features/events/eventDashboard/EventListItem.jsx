import React from "react";
import { Icon, Item, List, Segment, Button } from "semantic-ui-react";
import EventListAttandee from "./EventListAttendee";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  const {
    id,
    hostedBy,
    title,
    description,
    date,
    // category,
    venue,
    attendees,
    hostPhotoURL,
  } = event;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description>Hosted by {hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock" /> {date}
          <Icon name="marker" />
          {venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {attendees.map((attendee) => (
            <EventListAttandee attendee={attendee} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div>{description}</div>
        <Button
          onClick={() => selectEvent(event)}
          color="teal"
          floated="right"
          content="View"
        />

        <Button
          onClick={() => deleteEvent(id)}
          color="red"
          floated="right"
          content="Delete"
        />
      </Segment>
    </Segment.Group>
  );
}
