async function fetchCatGif() {
  // Wrap the code in a try-catch block to catch any errors that may occur
  try {
    // Send a GET request to the API to retrieve the cat GIF URL
    const response = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
    // Log the response URL to the console
    console.log(response.url);
  } 
  // Catch any errors that may occur during the fetch
  catch (error) {
    // Log the error message to the console
    console.error(error);
  }
}

// Call the `fetchCatGif` function to retrieve the cat GIF URL
fetchCatGif();
