/**
 * @param {string} name
 */
 const delayedWelcome = name => {
	setTimeout(function() {
        console.log(`Welcome ${name}`);
    }, 1000);
}

// Sample usage - do not modify
delayedWelcome("Sam");
delayedWelcome("Alex");