import React, { Component, BaseSyntheticEvent } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { ICreateArt, ICreateArtProps } from "../Interfaces/Interfaces";
import UserContext from '../../context/UserContext';

class CreateArt extends Component<ICreateArtProps, ICreateArt> {

  render() {
    return(
      <div>I hate this!</div>
    )
  }
//   static contextType = UserContext;
//   context!: React.ContextType<typeof UserContext>

//   constructor(props: ICreateArtProps) {
//     super(props);
//     this.state = {
//       modal: false,
//       title: "",
//       audio: "",
//       gifOneURL: "",
//       gifOneAnimation: "",
//       gifOneAnimationSpeed: "",
//       gifTwoURL: "",
//       gifTwoAnimation: "",
//       gifTwoAnimationSpeed: "",
//       gifThreeURL: "",
//       gifThreeAnimation: "",
//       gifThreeAnimationSpeed: "",
//       gifFourURL: "",
//       gifFourAnimation: "",
//       gifFourAnimationSpeed: "",
//       gifFiveURL: "",
//       gifFiveAnimation: "",
//       gifFiveAnimationSpeed: "",
//     };
//   }

//   toggle = () => {
//     this.setState({
//       modal: !this.state.modal,
//     });
//   };

//   handleRegister = (e: BaseSyntheticEvent) => {
//     e.preventDefault();

//     fetch(`https://gif-gallery-server.herokuapp.com/art/create`, {
//       method: 'POST',
//       body: JSON.stringify({
//         title: this.state.title,
//         images: [
//           [this.state.gifOneURL, this.state.gifTwoURL],
//           [this.state.gifOneAnimation, this.state.gifTwoAnimation],
//           [this.state.gifOneAnimationSpeed, this.state.gifTwoAnimationSpeed]],
//         audio: this.state.audio
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json',


//         //THIS IS WHERE THE CONTEXT USER TOKEN WILL GET INSERTED

//         'Authorization': `${this.context.token}`
//       })
//     })
//       .then((res) => res.json())
//       .then((data) => {
        
//       })
//       .catch((err) => console.log(err))
//     this.toggle();
//   };

//   render() {
//     return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>
//           {this.props.buttonLabel}
//         </Button>
//         <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={this.toggle}>Create New</ModalHeader>
//           <ModalBody>
//             <Form onSubmit={this.handleRegister}>
//             <FormGroup>
//                 <Label htmlFor="title">title:</Label>
//                 <Input
//                   type="text"
//                   id="title"
//                   value={this.state.title}
//                   onChange={(e) => this.setState({ title: e.target.value })}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="audio">audio:</Label>
//                 <Input
//                   type="text"
//                   id="audio"
//                   value={this.state.audio}
//                   onChange={(e) => this.setState({ audio: e.target.value })}
//                   required
//                 />
//               </FormGroup>

// {/* GIF ONE INPUT FORM GROUPS  */}

//               <FormGroup>
//                 <Label htmlFor="gifOneURL">gifOneURL:</Label>
//                 <Input
//                   type="text"
//                   id="gifOneURL"
//                   value={this.state.gifOneURL}
//                   onChange={(e) => this.setState({ gifOneURL: e.target.value })}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="gifOneAnimation">gifOneAnimation:</Label>
//                 <Input
//                   type="text"
//                   id="gifOneAnimation"
//                   value={this.state.gifOneAnimation}
//                   onChange={(e) => this.setState({ gifOneAnimation: e.target.value })}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="gifOneAnimationSpeed">gifOneAnimationSpeed:</Label>
//                 <Input
//                   type="text"
//                   id="gifOneAnimationSpeed"
//                   value={this.state.gifOneAnimationSpeed}
//                   onChange={(e) => this.setState({ gifOneAnimationSpeed: e.target.value })}
//                   required
//                 />
//               </FormGroup>

//               {/* GIF TWO INPUT FORM GROUPS */}

//               <FormGroup>
//                 <Label htmlFor="gifTwoURL">gifTwoURL:</Label>
//                 <Input
//                   type="text"
//                   id="gifTwoURL"
//                   value={this.state.gifTwoURL}
//                   onChange={(e) => this.setState({ gifTwoURL: e.target.value })}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="gifTwoAnimation">gifTwoAnimation:</Label>
//                 <Input
//                   type="text"
//                   id="gifTwoAnimation"
//                   value={this.state.gifTwoAnimation}
//                   onChange={(e) => this.setState({ gifTwoAnimation: e.target.value })}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label htmlFor="gifTwoAnimationSpeed">gifTwoAnimationSpeed:</Label>
//                 <Input
//                   type="text"
//                   id="gifTwoAnimationSpeed"
//                   value={this.state.gifTwoAnimationSpeed}
//                   onChange={(e) => this.setState({ gifTwoAnimationSpeed: e.target.value })}
//                 />
//               </FormGroup>


//               <Button id="mainButton" type="submit">
//                 Create Art
//               </Button>{" "}
//               <Button id="importantButton" onClick={this.toggle}>
//                 Cancel
//               </Button>
//             </Form>
//           </ModalBody>
//         </Modal>
//       </div>
//     );
//   }
}

export default CreateArt;
