const photoList = await(await fetch(`/api/photolist?folder=cats`)).json();

document.body.innerHTML = `
  <h1>My photos of dogs</h1>
  <h2>Click on the name of a photo to see it:</h2>
  ${photoList.filter(x => x.includes('.')).map(x => `<a href="/api/photo?file=cats/${x}"><h3>${x.split('.')[0]}</h3></a>`).join('')}
`;