import React, { Component, FormEvent } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface EventData {
  id: string;
  title: string;
  description: string;
  date?: string;
  time: string;
}

interface Props {
  showModal?: boolean;
  toggleModal: () => void;
  eventToEdit: EventData;
  handleFormSubmit: (data: EventData) => void;
}

interface State {
  showModal: boolean;
  eventToEdit: EventData;
}

class AddEventModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: props.showModal || false,
      eventToEdit: props.eventToEdit,
    };
  }

  submitForm = (e: FormEvent) => {
    e.preventDefault();
    const { id, title, description, date, time } = this.state.eventToEdit;
    this.props.handleFormSubmit({
      id,
      title,
      description,
      date,
      time,
    });
  };

  setTitle = (t: string) => {
    this.setState(prevState => ({
      eventToEdit: {
        ...prevState.eventToEdit,
        title: t,
      },
    }));
  };

  setDescription = (d: string) => {
    this.setState(prevState => ({
      eventToEdit: {
        ...prevState.eventToEdit,
        description: d,
      },
    }));
  };

  setTime = (t: string) => {
    this.setState(prevState => ({
      eventToEdit: {
        ...prevState.eventToEdit,
        time: t,
      },
    }));
  };

  render() {
    const { title, description, time } = this.state.eventToEdit;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.showModal}
          onClose={this.props.toggleModal}
        >
          <div className="paper add-event-modal">
            <center>
              <h2 id="simple-modal-title">Edit Event Data</h2>
            </center>
            <form onSubmit={this.submitForm}>
              <div>
                <TextField
                  required
                  id="title"
                  label="Event Title"
                  value={title}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => this.setTitle(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  required
                  id="description"
                  label="Event Description"
                  value={description}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => this.setDescription(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  required
                  id="time"
                  type="time"
                  defaultValue="07:30"
                  label="Event Time"
                  value={time}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  onChange={(e) => this.setTime(e.target.value)}
                />
              </div>
              <div className="event-button">
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Save Event Data
                  </Button>
                </center>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddEventModal;
