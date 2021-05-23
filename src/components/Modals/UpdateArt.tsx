import React, { Component, BaseSyntheticEvent } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { ICreateArt, IUpdateArtProps } from "../Interfaces/Interfaces";
import UserContext from "../../context/UserContext";

class UpdateArt extends Component<IUpdateArtProps, ICreateArt> {
  render() {
    return(
      <div>Fuck typescript!</div>
    )
  }

  // static contextType = UserContext;
  // context!: React.ContextType<typeof UserContext>;

  // constructor(props: IUpdateArtProps) {
  //   super(props);
  //   this.state = {
  //     modal: false,
  //     title: "",
  //     audio: "",
  //     gifOneURL: "",
  //     gifOneAnimation: "",
  //     gifOneAnimationSpeed: "",
  //     gifTwoURL: "",
  //     gifTwoAnimation: "",
  //     gifTwoAnimationSpeed: "",
  //     gifThreeURL: "",
  //     gifThreeAnimation: "",
  //     gifThreeAnimationSpeed: "",
  //     gifFourURL: "",
  //     gifFourAnimation: "",
  //     gifFourAnimationSpeed: "",
  //     gifFiveURL: "",
  //     gifFiveAnimation: "",
  //     gifFiveAnimationSpeed: "",
  //   };
  // }

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };

  // deleteArt = () => {
  //   fetch(
  //     `https://gif-gallery-server.herokuapp.com/art/delete/${this.props.artID}`,
  //     {
  //       method: "DELETE",
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: `${this.context.token}`,
  //       }),
  //     }
  //   );

  //   this.toggle();
  // };

  // updateArt = (e: BaseSyntheticEvent) => {
  //   e.preventDefault();

  //   console.log("updating art!");

  //   fetch(
  //     `https://gif-gallery-server.herokuapp.com/art/update/${this.props.artID}`,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         title: this.state.title,
  //         images: [
  //           [this.state.gifOneURL, this.state.gifTwoURL],
  //           [this.state.gifOneAnimation, this.state.gifTwoAnimation],
  //           [this.state.gifOneAnimationSpeed, this.state.gifTwoAnimationSpeed],
  //         ],
  //         audio: this.state.audio,
  //       }),
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: `${this.context.token}`,
  //       }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {})
  //     .catch((err) => console.log(err));
  //   this.toggle();
  // };

  // render() {
  //   return (
  //     <div>
  //       <Button color="danger" onClick={this.toggle}>
  //         {this.props.buttonLabel}
  //       </Button>
  //       <Modal
  //         isOpen={this.state.modal}
  //         toggle={this.toggle}
  //         className={this.props.className}
  //       >
  //         <ModalHeader toggle={this.toggle}>Update your Art!</ModalHeader>
  //         <ModalBody>
  //           <Form
  //             onSubmit={(e) => {
  //               this.updateArt(e);
  //             }}
  //           >
  //             <FormGroup>
  //               <Label htmlFor="title">Title:</Label>
  //               <Input
  //                 type="text"
  //                 id="title"
  //                 value={this.state.title}
  //                 onChange={(e) => this.setState({ title: e.target.value })}
  //               />
  //             </FormGroup>
  //             <FormGroup>
  //               <Label htmlFor="audio">audio:</Label>
  //               <Input
  //                 type="text"
  //                 id="audio"
  //                 value={this.state.audio}
  //                 onChange={(e) => this.setState({ audio: e.target.value })}
  //               />
  //             </FormGroup>

  //             {/* GIF ONE INPUT FORM GROUPS  */}

  //             <FormGroup>
  //               <Label htmlFor="gifOneURL">gifOneURL:</Label>
  //               <Input
  //                 type="text"
  //                 id="gifOneURL"
  //                 value={this.state.gifOneURL}
  //                 onChange={(e) => this.setState({ gifOneURL: e.target.value })}
  //               />
  //             </FormGroup>
  //             <FormGroup>
  //               <Label htmlFor="gifOneAnimation">gifOneAnimation:</Label>
  //               <Input
  //                 type="text"
  //                 id="gifOneAnimation"
  //                 value={this.state.gifOneAnimation}
  //                 onChange={(e) =>
  //                   this.setState({ gifOneAnimation: e.target.value })
  //                 }
  //               />
  //             </FormGroup>
  //             <FormGroup>
  //               <Label htmlFor="gifOneAnimationSpeed">
  //                 gifOneAnimationSpeed:
  //               </Label>
  //               <Input
  //                 type="text"
  //                 id="gifOneAnimationSpeed"
  //                 value={this.state.gifOneAnimationSpeed}
  //                 onChange={(e) =>
  //                   this.setState({ gifOneAnimationSpeed: e.target.value })
  //                 }
  //               />
  //             </FormGroup>

  //             {/* GIF TWO INPUT FORM GROUPS */}

  //             <FormGroup>
  //               <Label htmlFor="gifTwoURL">gifTwoURL:</Label>
  //               <Input
  //                 type="text"
  //                 id="gifTwoURL"
  //                 value={this.state.gifTwoURL}
  //                 onChange={(e) => this.setState({ gifTwoURL: e.target.value })}
  //               />
  //             </FormGroup>
  //             <FormGroup>
  //               <Label htmlFor="gifTwoAnimation">gifTwoAnimation:</Label>
  //               <Input
  //                 type="text"
  //                 id="gifTwoAnimation"
  //                 value={this.state.gifTwoAnimation}
  //                 onChange={(e) =>
  //                   this.setState({ gifTwoAnimation: e.target.value })
  //                 }
  //               />
  //             </FormGroup>
  //             <FormGroup>
  //               <Label htmlFor="gifTwoAnimationSpeed">
  //                 gifTwoAnimationSpeed:
  //               </Label>
  //               <Input
  //                 type="text"
  //                 id="gifTwoAnimationSpeed"
  //                 value={this.state.gifTwoAnimationSpeed}
  //                 onChange={(e) =>
  //                   this.setState({ gifTwoAnimationSpeed: e.target.value })
  //                 }
  //               />
  //             </FormGroup>
  //             <Button id="mainButton" type="submit">
  //               Update Art
  //             </Button>
  //           </Form>
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button onClick={this.deleteArt}>Delete Art</Button>
  //           <Button id="importantButton" onClick={this.toggle}>
  //             Cancel
  //           </Button>
  //         </ModalFooter>
  //       </Modal>
  //     </div>
  //   );
  // }
}

export default UpdateArt;