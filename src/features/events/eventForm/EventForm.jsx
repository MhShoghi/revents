import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  console.log(values);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    e.preventDefault();
  }
  function onSubmitForm() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "assets/user.png",
        });
    setFormOpen(false);
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={onSubmitForm}>
        <Form.Field>
          <input
            type="text"
            name="title"
            value={values.title}
            placeholder="Event title"
            onChange={handleInputChange}
          />
        </Form.Field>

        <Form.Field>
          <input
            type="text"
            onChange={handleInputChange}
            name="category"
            value={values.category}
            placeholder="Category"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name="description"
            value={values.description}
            placeholder="Description"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name="city"
            value={values.city}
            placeholder="City"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            name="venue"
            value={values.venue}
            placeholder="Venue"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            onChange={(e) => handleInputChange(e)}
            name="date"
            value={values.date}
            placeholder="Date"
          />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
}
