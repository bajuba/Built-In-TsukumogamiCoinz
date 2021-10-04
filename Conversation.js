class Conversation {
  constructor(text) {
    this.name = text.name;
    this.frames = text.frames;
    this.currentFrame = 0;
    this.numFrames = text.frames.length;
  }
  getNextFrame(){
    if(this.currentFrame < this.numFrames){
      let frame = this.frames[this.currentFrame]
      this.currentFrame++;
      console.log(frame)
      return frame;
    }
    else{
      return "done";
    }
  }
  getPreviousFrame(){
    if(this.currentFrame > 0){
      let frame = this.frames[this.currentFrame]
      this.currentFrame--;
      return frame;
    }
  }
  
  
}//end of conversation class

  //characters: protagonist, tippytoes
 var conversations = {"banana":{
                      
    "name":"banana",
    "frames":[
              {
                "words":"Hello I am a nice boy!", 
                "leftportrait": 
                              {"person":"protagonistportrait",
                              "face":"talking"
                              },
                "rightportrait": 
                              {"person":"muggerportrait",
                              "face":"idle"
                              }
              },
              {  
              "words":"I will mug you now, little boy.", 
             "leftportrait": 
                              {"person":"protagonistportrait",
                              "face":"idle"
                              },
                "rightportrait": 
                              {"person":"muggerportrait",
                              "face":"talking"
                              }
              },
              {  
              "words":"That is not very nice.", 
              "leftportrait": 
                              {"person":"protagonistportrait",
                              "face":"talking"
                              },
                "rightportrait": 
                              {"person":"muggerportrait",
                              "face":"idle"
              }
            }]

    },

    "intro1":{
                      
    "name":"intro1",
    "frames":[
              {
                "words":"Welcome to the world of B.I.T. Coinz.", 
                "leftportrait": 
                              {"person":"narrator1portrait",
                              "face":"portrait"
                              },
                "rightportrait": 
                              {"person":"none",
                              "face":"portrait_animation"
                              }
              },
              {  
              "words":"Built-In Tsukumogami or 'tool spirits' inhabit special artifacts in this world which grant their owners tremendous power.", 
             "leftportrait": 
                              {"person":"narrator1portrait",
                              "face":"portrait_animation"
                              },
                "rightportrait": 
                              {"person":"name_of_portrait",
                              "face":"portrait_animation"
                              }
              }]

    }
 }

 

/* convo template

"convo_name":{
                      
    "name":"convo_name",
    "frames":[
              {
                "words":"the conversation_part_1", 
                "leftportrait": 
                              {"person":"name_of_portrait",
                              "face":"portrait_animation"
                              },
                "rightportrait": 
                              {"person":"name_of_portrait",
                              "face":"portrait_animation"
                              }
              },
              {  
              "words":"the conversation_part_2", 
             "leftportrait": 
                              {"person":"name_of_portrait",
                              "face":"portrait_animation"
                              },
                "rightportrait": 
                              {"person":"name_of_portrait",
                              "face":"portrait_animation"
                              }
              }
              }]

    

*/

