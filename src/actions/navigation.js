function navigatedToURI(newURI) {
  // Strip leading and trailing '/'
  newURI = newURI.replace(/^\/|\/$/g, '')

  if (newURI == '') {
    // Redirect for default route
    navigateToLocation('/contacts')
  }
  else {
    // Otherwise update our application state
    setState({location: newURI.split('/'), live: true});
  }
}

function navigateToLocation(newURI) {
  var currentURI = window.location.hash.substr(1);

  if (currentURI != newURI) {
    setState({live: false});

    window.location.replace(
      window.location.pathname + window.location.search + '#' + newURI
    );
  }
}
