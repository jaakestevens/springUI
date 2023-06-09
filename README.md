# springUI
University mini project in December 2022

Spinning Blade Canvas demonstrating laws of motion with colour and velocity of springs.
Brief summary of the idea
My sketch is inspired by the Benham disk and an artist that I had seen on social media.
The artist has a spinning wheel and uses a marker pen to draw designs as it is spinning. As the speed of the rotation increases, the patterns begin to change. I wanted to design a sketch that allowed the user to create their own patterns and spin the wheel, creating their own interesting designs. An article on the Dundee science centre website says that when the user uses different colours while spinning “our brain will blend them together. It’s a bit like colour mixing” (Lemon, n.d). This was my original goal.

To begin with, I used my source code form the Benham disk as it contained a simple UI and worked efficiently. I then gave the user the ability to switch from brushes 1,2 and 3. Each brush would produce a different shape and colour when clicked onto the wheel. When combining colour my idea was to test the theory that the colours should mix. As they are base colours (RGB) I was expecting some purples or yellows. This did not work despite trying multiple designs. I decided to focus more on patterns as opposed to colour and here is where I decided to make presets for the user to experience strange patterns. By clicking on the coloured squares, there is a cross-like pattern that is generated, a spiral and a triangle. When sped up, these all produce the illusion of movement, or more complex shapes than what they are. For instance, preset 3(blue) at a certain speed, appears to produce the star of David.

As I continued to work on this concept, I became fascinated by the idea of frame rate and speed of the circle that was rotating. This is when I decided that instead of a circle rotating, I wanted to make helicopter blades to be drawn on instead. This is inspired by a video in which the filmer matches the shutter speed of his camera and framerate with the rotation of the helicopters blades, creating the illusion that the blades were not moving at all (www.youtube.com, 2018). This is shown on the sketch where the blades begin to move so fast that they begin to spin forwards, then stop, then backwards. Repeating the same pattern. This led me to look into the phenomenon known as the ”persistence of vision”. This is the idea that the “afterimage seemingly persists for approximately 40 milliseconds (ms) on the retina of the eye”(Bakaus, 2022). My understanding is that the rotary speed had gotten so fast the framerate of the computer was matching up at times with the rotary speed. For example, the first time the blades are still, the rotary speed matches the frame rate, the second time it is double the framerate, therefore producing the same effect.

After finishing my basic sketch demonstrating patterns in motion, I was inspired by a fellow student that mentioned that the wheel and colours reminded them of a carnival. This gave me the idea to introduce a small string/lever that uses the physics of springs to pull the wheel. This has poor effects if the user is looking to investigate how framerate reacts with patterns (as the wheel does not spin as fast) but gives it a more interactive aspect to the sketch. Recycling the logic from a lab report and using a video tutorial to assist me with the code(www.youtube.com, 2022). In my opinion, the spring could be more realistic but due to a combination of the struggles of allowing the bob of the spring to be dragged properly with the mouse and applying the physics to the wheel, I stuck with the simple spring that I had made. This can be toggled if the user does not wish for it to affect the wheel.
The Logic of the code:
Spring logic:
Bob = Spring Head
Anchor = Holds the spring in place
   
Using 2d vectors the spring is assigned a bob, anchor, velocity and a gravity value(gravity only affects the y axis). If the spring use is selected, the speed of the rotation of the wheel is mapped to the combined velocity of the wheel. The force is the distance between the bob and the anchor. The extension is how much it is stretched past the rest point of the spring at 0 velocity. The force is then mapped between 0 and 1. The same logic is then applied from the other spring lab report and is shown in the code. A function then determines whether the mouse has clicked on the bob and will drag it accordingly.

Drawing logic:
Every frame, a for loop iterates through arrays of the x and y values of the shapes. There are six arrays in total, 2 for each brush. Every time the mouse is pressed within the circle the location is pushed into the array. This made it easy to implement the logic of removing a shape as by using the r key, the last values on the arrays can be removed(using the pop method) if the brush selected belongs to the shape the user wishes to remove. I believe this code is much neater than drawing to rub it out, similar to an eraser.

Things I would improve:
The program is not very smooth and lags significantly when there are multiple shapes on the board. I believe this is due to the for loops it iterates through at the beginning of every frame. I would therefore create less arrays and store both the x and y value for each brush. I would also improve the physics of the bouncing bob and the way that the mouse interacts with it so it is smoother, as sometimes it does not detect whether the mouse has picked it up. Also, due to the rotation of the shapes, the user cannot draw accurately while the shape is spinning.

Feedback received:
Lack of instructions: I added text surrounding the board instructing the user which keys to press. Reminded them of a carnival wheel: Added the spring for a realistic and interactive feel.
The spring is not doing anything: This is made it so that the spring could influence the rotary speed of the wheel which I think makes the wheel spin more genuinely like it would in real life.


References:

Articles:
Lemon, L. (n.d.). Plate Spinning Tops – What Happens When We Spin Colours? [online] www.dundeesciencecentre.org.uk. Available at: https://www.dundeesciencecentre.org.uk/plate-spinning-tops- early-years-week [Accessed 14 Jan. 2023].
Bakaus, P. (2022). Frames per second, or: The Illusion of Motion. [online] Renaissance Geek. Available at: https://paulbakaus.com/the-illusion-of-motion/ [Accessed 14 Jan. 2023].

Youtube Videos:
www.youtube.com. (2018). camera shutter speed and frame rate match helicopter`s rotor. [online] Available at: https://www.youtube.com/watch?v=yr3ngmRuGUc [Accessed 14 Jan. 2023].
www.youtube.com. (2022). Coding Challenge #160: Spring Forces. [online] Available at:
https://www.youtube.com/watch?v=Rr-5HiXquhw&t=824s [Accessed 14 Jan. 2023].
