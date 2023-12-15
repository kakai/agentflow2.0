// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
function(longurl, domain, extension) {
  var link
  const rbheaders = {
      accept: 'application/json',
      'content-type': 'application/json',
      apikey: 'fe23385ec0b5409394eead4223b83b25'
  };
  
  const postOptions = {
      method: 'POST',
      headers: rbheaders,
      body: JSON.stringify({
          domain: { fullName: domain },
        slashtag: extension,
          destination: longurl
      })
  };

  const data = fetch(`https://api.rebrandly.com/v1/links`, postOptions);
  const json = await data.json();
  
  link = `https://${json.shortUrl}`
  
  return link;
  
}
