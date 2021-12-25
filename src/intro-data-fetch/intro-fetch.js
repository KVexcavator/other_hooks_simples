// Запрос данных
fetch(`https://api.github.com/users/moonhighway`)
.then(response => response.json())
.then(console.log)
.catch(console.error);

async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  } 
}

// Отправка данных с запросом
fetch("/create/user", {
  method: "POST",
  body: JSON.stringify({ username, password, bio })
});

// Загрузка файлов с помощью функции fetch
const formData = new FormData();
formData.append("username", "moontahoe");
formData.append("fullname", "Alex Banks");
forData.append("avatar", imgFile);

fetch("/create/user", {
  method: "POST",
  body: formData
});

// Авторизованные запросы
// GitHub в меню Settings > Developer > Settings > Personal Access Tokens .
fetch(`https://api.github.com/users/${login}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// curl https://api.github.com/users/KVexcavator