const containerRoot = document.getElementById('root');
const selectHouse = document.getElementById('house');

  // filtro DOM
  selectHouse.addEventListener('change', () => {
    let condition = selectHouse.options[selectHouse.selectedIndex].text;
    console.log(condition);
  
    let filtered = filterHouse(DATA, condition);
    containerRoot.innerHTML = '';

    filtered.forEach(element => {
      containerRoot.innerHTML += `
        <div class="img">
          <img src="${element.image}">
        </div>
        <h3>${element.name}</h3>
        <p>${element.house}</p>`
    })
  })

