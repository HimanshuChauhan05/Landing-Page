Shery.imageEffect("#back",{style:5,config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.105321502415481},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.91,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true})




var elems = document.querySelectorAll(".elem"); // Fix the selector by adding a dot before "elem" to select elements with the class name "elem".

elems.forEach(function (elem) { // Use "forEach" with a lowercase "f" and fix the function keyword.
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false; // Correct the variable name to "animating."

    document.querySelector("#main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: 'expo.inOut', // Use 'expo.inOut' for the ease parameter.
                duration: 1,
                onComplete: function () {
                    gsap.set(this.targets()[0], { top: "100%" }); // Use "this.targets()" instead of "this._targets."
                    animating = false;
                }
            });

            index === h1s.length - 1 ? (index = 0) : (index++); // Use a ternary operator to increment "index."

            gsap.to(h1s[index], {
                top: '-=100%',
                ease: 'expo.inOut', // Use 'expo.inOut' for the ease parameter.
                duration: 1,
                onComplete: function () {
                    // You can add code here if needed.
                }
            });
        }
    });
});


