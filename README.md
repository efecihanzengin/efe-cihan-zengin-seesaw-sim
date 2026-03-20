# Seesaw Simulation

link: https://efecihanzengin.github.io/efe-cihan-zengin-seesaw-sim/

## Thought Process & Design Decisions

The seesaw plank is represented as a div element.
Objects are appended as child divs inside the plank,
so when the plank rotates, objects rotate with it naturally.

Click position is calculated using event.offsetX, which gives
the position relative to the plank itself regardless of its rotation.

Torque is calculated as weight × distance from the pivot for each object.
The tilt angle is derived from the difference between right and left torques,
capped at ±30 degrees.

Smooth animation is handled by CSS transition on the transform property,
not JavaScript.

## State Persistence

The objects array is saved to localStorage on every click.
On page load, saved objects are restored and rendered back onto the plank.

## AI Usage

AI was used as a mentor throughout the process — explaining concepts,
reviewing code, and pointing out bugs. All code was written by me.
