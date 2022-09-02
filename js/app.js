const loadPhoneData = async(search) => {
    const api_URL = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(api_URL);
    const data = await res.json();
    displayPhoneData(data.data);
}
const displayPhoneData = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;
    phones = phones.slice(0, 20);
    const noPhone = document.getElementById('not-found-msg');
    if(phones.length == 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        console.log(phone);
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top w-75 ms-5 mt-3" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(createDiv);
    });
    toggleSpinner(false);
}

const searchPhones = () => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhoneData(searchText);
};

const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('loader');
    if (isLoading) {
        loadingSection.classList.remove('d-none');
    }
    else{
        loadingSection.classList.add('d-none');
    }
}