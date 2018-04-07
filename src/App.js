import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./memoryImages.json";
import "./App.css";
import Navbar from "./components/Navbar/Index";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: images,
    unselectedImages: images,
    message: "Select an image to begin",
    highestScore: 0,
    currentScore: 0
  };

  selectedImage = name => {
    
    const findImages = this.state.unselectedImages.find(item => item.name === name);

    if (findImages === undefined) {
      // Image already clicked
      this.setState({
        message: "Incorrect! Try again!.",
        highestScore: (this.state.currentScore > this.state.highestScore) ? this.state.currentScore : this.state.highestScore,
        currentScore: 0,
        images: images,
        unselectedImages: images
      });
    } else {
      // Did not click an image
      const newImage = this.state.unselectedImages.filter(item => item.name !== name);

      this.setState({
        message: "Great Guess!",
        currentScore: this.state.currentScore + 1,
        images: images,
        unselectedImages: images
      });
    }
    this.shuffleArray(images);
  };
  // function to shuffle the array. 
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let x = Math.floor(Math.random() * (i + 1));
      [array[i], array[x]] = [array[x], array[i]];
    };
  };
  
  // Map over this.state.images and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar 
          currentScore={this.state.currentScore}
          message={this.state.message}
          highestScore={this.state.highestScore}
        />
        <Title>Clickster</Title>
        {this.state.images.map(friend => (
          <FriendCard
            selectedImage={this.selectedImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
